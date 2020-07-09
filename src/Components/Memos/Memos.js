import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, AsyncStorage, withNavigationFocus } from "react-native";
import { Icon, Button } from "react-native-elements";
import { API } from "./../../utils/api"
import { Dimensions } from 'react-native'

class Memos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      isSuccessful: false,
      notificationIsActive: false,
      screenHeight: Dimensions.get("window").height
    }
  }

  async componentDidMount() {

    let user = await AsyncStorage.getItem('userInfos')
    user = JSON.parse(user)

    API.get(`gestion/visites/get/foruser/${user._id}`)

      .then((response) => {
        const hotels = response.data
        const hotelsWithMemos = []

        for (let i = 0; i < hotels.length; i++) {
          if (hotels[i]) {
            let hotelMemos = hotels[i].hotel_id.memos
            if ((Array.isArray(hotelMemos) && hotelMemos.length)) {
              hotelsWithMemos.push(hotels[i].hotel_id)
            }
          }
        }

        this.setState({
          hotels: hotelsWithMemos
        });
      })

      .catch(error => {
        this.setState(prevState => ({
          ...prevState,
          notificationIsActive: true
        }));
        setTimeout(() => {
          this.setState(prevState => ({
            ...prevState,
            notificationIsActive: false
          }));
        }, 5000)
      });
  }

  render() {
    return (
      <ScrollView style={styles.memos}>
        <View style={styles.memosHeader}>
          <Text style={styles.memosTitle}>Mes mémos</Text>
          <Button
            buttonStyle={{ ...rawStyles.memosButton.btn }}
            title="Trier"
            titleStyle={{ ...rawStyles.memosButton.title }}
            icon={<Icon style={styles.memosButtonIcon} name="angle-down" type="font-awesome-5" size={20} />}
          />
        </View>
        {this.state.hotels.map((hotel, id) =>
          <View key={id} style={styles.memosContainer}>
            <View style={styles.memo}>
              <View style={styles.memoContainer}>
                <Text style={styles.memoName} numberOfLines={1} ellipsizeMode="tail">{hotel.nom}</Text>
                <Text style={styles.memoDate}>{hotel.memos[0].date.slice(0, 10)}</Text>
              </View>
              <Text style={styles.memoDescription}>{hotel.memos[0].message}</Text>
            </View>
          </View>
        )}
        {/*this.state.hotels.length === 0 || this.state.hotels.memos.length === 0 && <View>Vous n'avez pas de mémos</View>*/}
        <View style={this.state.notificationIsActive ? styles.notification : styles.notification}>
          <Icon
            style={styles.notificationIcon}
            color="#222222"
            name="times"
            type="font-awesome-5"
            size={12}
          />
          <Text style={styles.notificationText}>Une erreur est survenue lors du chargement de vos mémos, veuillez vérifier votre connexion internet.</Text>
        </View>
      </ScrollView>
    )
  }
}

export default Memos;

const styles = StyleSheet.create({
  memos: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingBottom: 40,
    height: 600
  },
  memosHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16
  },
  memosTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#031772",
    lineHeight: 24
  },
  memosContainer: {
    flex: 1,
    flexDirection: "column"
  },
  memo: {
    backgroundColor: "#FFF",
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    padding: 16,
    marginBottom: 8
  },
  memoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  memoName: {
    color: "#111215",
    fontSize: 14,
    fontWeight: "500",
    marginRight: 16
  },
  memoDate: {
    color: "#828282",
    fontSize: 12
  },
  memoDescription: {
    color: "#111215",
    fontSize: 12,
    lineHeight: 18
  },
  hidden: {
    display: "none"
  },
  notification: {
    flex: 1,
    backgroundColor: "#222222",
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: -112,
    marginRight: "auto",
    flexDirection: "row",
    alignItems: "center",
    bottom: 88,
    width: 224
  },
  notificationIcon: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FFF",
    width: 16
  },
  notificationText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "500",
    paddingLeft: 8
  }
})

const rawStyles = {
  memosButton: {
    btn : {
      backgroundColor: "transparent",
      alignItems: "center"
    },
    title: {
      fontSize: 12,
      color: "#111215",
      paddingRight: 12
    }
  }
};
