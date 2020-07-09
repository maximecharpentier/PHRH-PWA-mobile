import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Icon, Button } from "react-native-elements";
import { API } from "./../../utils/api"

class Memos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      isSuccessful: false
    }
  }

  componentDidMount() {
    API.get('hotels/')
      .then((response) => {

        const hotels = response.data
        const hotelsWithMemos = []

        for (let i = 0; i < hotels.length; i++) {
          let hotelMemos = hotels[i].memos
          if ((Array.isArray(hotelMemos) && hotelMemos.length)) {
            hotelsWithMemos.push(hotels[i])
          }
        }

        this.setState({
          hotels: hotelsWithMemos,
          isSuccessful: true
        });

        console.log(this.state)

      })
      .catch(error => {
        console.log(error);
        this.setState(prevState => ({
          ...prevState,
          isSuccessful: false
        }));
      });
  }

  render() {
    return (
      <ScrollView style={styles.memos}>
        <View style={styles.memosHeader}>
          <Text style={styles.memosTitle}>Mes mémos</Text>
          <Button
            buttonStyle={styles.memosButton}
            title="Trier"
            titleStyle={styles.memosButtonText}
            icon={<Icon style={styles.memosButtonIcon} name="angle-down" type="font-awesome-5" size={20} />}
          />
        </View>
        <View style={styles.memosContainer}>
          <View style={styles.memo}>
            <View style={styles.memoContainer}>
              <Text style={styles.memoName} numberOfLines={1} ellipsizeMode="tail">RivieraRivieraRivieraRivieraRivieraRivieraRivieraRiviera</Text>
              <Text style={styles.memoDate}>13/05/2020</Text>
            </View>
            <Text style={styles.memoDescription}>Constatation de traces de moisissure, logement humide. Demande de chamgement de chambre effectué auprés du propriétaire.</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default Memos;

const styles = StyleSheet.create({
  memos: {
    backgroundColor: "#FAFAFA",
    paddingBottom: 40
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
  memosButton: {
    backgroundColor: "transparent",
    alignItems: "center"
  },
  memosButtonText: {
    fontSize: 12,
    color: "#111215",
    paddingRight: 12,
    // order: -1
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
  }
})
