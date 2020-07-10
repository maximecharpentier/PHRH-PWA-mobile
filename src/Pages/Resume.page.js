import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Image, Text, TextInput, Alert } from "react-native";
import { CheckBox, Button, Icon } from "react-native-elements";

import { AsyncStorage } from "react-native";
import { API } from "../utils/api"

const rawStyles = {
  container: { marginBottom: 20 },
  inputContainer: { background: "#F3F3F3" },
  button: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#EFF2FB",
  },
  buttonText: { color: "#111215", borderRadius: 4, fontSize: 12, paddingHorizontal: 50 },
};

const styles = StyleSheet.create({
  view: {
    overflow: "scroll",
    justifyContent: "center",
  },
  scrollView: {
    paddingTop: 16,
  },
  h1: {
    fontSize: 14,
    fontWeight: "bold",
  },
  content: {
    paddingTop: 25,
    paddingBottom: 25,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "5%",
    marginRight: "5%",
  },
  input: {
    marginLeft: "5%",
    marginRight: "5%",
  },
  textInput: { padding: 8, height: 72, fontSize: 12, backgroundColor: "#F3F3F3", marginTop: 8, marginBottom: 16 },
  backArrow: {
    marginRight: 15
  }
});

class ResumePage extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      checked: false,
      hotelChecked: [],
      listChecked: [],
      hotels: []
    };
  }

  async componentDidMount() {
    let user = await AsyncStorage.getItem('userInfos')
    user = JSON.parse(user)

    API.get(`/gestion/visites/cr/hotel/planned/foruser/${user._id}`).then(res => {
      this.setState({hotels: res.data})
    })
  }

  onPress = (value) => {
    if (this.state.hotelChecked.includes(value)) {
      this.setState(prevState => ({
        hotelChecked: [...prevState.hotelChecked.filter(hotels => hotels !== value)],
        listChecked: [...prevState.listChecked.filter(hotel => hotel.visite_id !== value)],
      }));
    } else {
      this.setState(prevState => ({
        hotelChecked: [...prevState.hotelChecked, value],
        listChecked: [...prevState.listChecked, { visite_id: value, raison: "" }],
      }))
    }
    console.log(this.state.listChecked)
  }

  handleChange = (_id) => {
    const name = event.target && event.target.name;
    const value = event.target && event.target.value;
    this.setState(prevState => ({
      listChecked: prevState.listChecked.map(obj => (obj.visite_id === _id ? Object.assign(obj, { raison: value }) : obj))
    }));
  }

  validateHotels = () => {
    let user = localStorage.getItem('userInfos')
    user = JSON.parse(user)
    let visite = {"visitesToCancel": this.state.listChecked}
    API.post(`/gestion/visites/cr/hotel/cancel/many/foruser/${user._id}`, visite).then(res => {
      console.log(res)
      Alert.alert(
      "Succès",
      "Informations enregistrées",
      [
        { text: "OK", onPress: () => navigation.navigate('Home') }
      ],
      { cancelable: false }
    );
    })
  } 

  renderHotels = () => {
    return this.state.hotels.map((hotel) => { 
      if (hotel) {
        return (
          <View key = { hotel._id }> 
          <CheckBox
              title = { hotel.hotel_id.nom }
              checked = { this.state.hotelChecked.includes(hotel._id)  }
              onPress = { () => this.onPress(hotel._id) }
            />
            {this.state.hotelChecked.includes(hotel._id) ? <TextInput name={hotel._id} onChangeText={() => this.handleChange(hotel._id)} value={this.state.listChecked[hotel._id]} style={styles.textInput} placeholder="Indiquer la raison..." multiline={true} numberOfLines={4} /> : <View/>}
          </View>
        ) 
      }
    })
  }

  render(){
    return(
      <View style={styles.view}>
        <View style={styles.content}>
        <Icon onPress={() => this.props.navigation.goBack()} style={styles.backArrow} name="chevron-left" type="font-awesome-5" size={12} />
        <Text style={styles.h1}>Sélectionnez les hôtels que vous n'avez pas pu visiter aujourd'hui</Text>
        {/* <AuthForm /> */}
      </View>
        <ScrollView style={styles.scrollView}>
          { this.renderHotels() }
          { this.state.hotels &&
          <Button
            title="Valider"
            buttonStyle={{ ...rawStyles.button }}
            titleStyle={{ ...rawStyles.buttonText }}
            onPress={this.validateHotels}
          /> }
        </ScrollView>
      </View>
    )
  }
}

export default ResumePage;
