import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Image, Text, TextInput, Alert } from "react-native";
import { CheckBox, Button, Icon } from "react-native-elements";

import { AsyncStorage } from "react-native";
import { API } from "../utils/api"

const hotelList = ['Lafayette', 'Turbigo', 'Clauzel', 'Riviera', 'Excelsior', 'Le Prado', 'Marclau']

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

class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      checked: false,
      hotelChecked: [],
      hotels: []
    };
  }

  async componentDidMount() {
    let user = await AsyncStorage.getItem('userInfos')
    user = JSON.parse(user)

    API.get(`gestion/visites/get/foruser/${user._id}`).then(res => {
      this.setState({hotels: res.data})
    })
  }

  onPress = (value) => {
    if (this.state.hotelChecked.includes(value)) {
      this.setState(prevState => ({
        hotelChecked: [...prevState.hotelChecked.filter(hotels => hotels !== value)]
      }));
    } else {
      this.setState(prevState => ({
        hotelChecked: [...prevState.hotelChecked, value]
      }))
    }
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
            {this.state.hotelChecked.includes(hotel._id) ? <TextInput style={styles.textInput} placeholder="Indiquer la raison..." multiline={true} numberOfLines={4} /> : <View/>}
          </View>
        ) 
      }
    })
  }

  render(){
    return(
      <View style={styles.view}>
        <View style={styles.content}>
        <Icon style={styles.backArrow} name="chevron-left" type="font-awesome-5" size={12} />
        <Text style={styles.h1}>Sélectionnez les hôtels que vous n'avez pas pu visiter aujourd'hui</Text>
        {/* <AuthForm /> */}
      </View>
        <ScrollView style={styles.scrollView}>
          { this.renderHotels() }
          <Button
            title="Valider"
            buttonStyle={{ ...rawStyles.button }}
            titleStyle={{ ...rawStyles.buttonText }}
            onPress={() => Alert.alert('Votre sélection a bien été enregistrée')}
          />
        </ScrollView>
      </View>
    )
  }
}

export default Resume;