import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { Icon, Button } from "react-native-elements";
import axios from 'axios';

export default function Hotel() {

  const [hotelInformations, setHotelInformations] = useState({
    adress: "26 Avenue Descartes",
    zipcode: "75619",
    city: "Paris",
    sector: "75",
    currentNotation: "30.51",
    lastVisit: "19/04/2019",
    occupedRooms: 20,
    availableRooms: 10,
    urgencyDescription: "Les occupants de la chambre ont constatés des traces de moisissure. Ils affirment que le logement est plein d’humidité, l’air ne circule pas correctement."
  })

  return (
    <ScrollView style={styles.hotel}>
      {/* <View style={styles.header}>
        <Button
          buttonStyle={styles.headerButton}
          icon={<Icon style={styles.headerIcon} name="angle-left" type="font-awesome-5" size={23} />}
        />
        <Text style={styles.headerTitle}>Lafayette</Text>
      </View> */}
      <Text style={styles.hotelTitle}>Informations sur l'hôtel</Text>
      <View style={styles.card}>
        <View style={styles.cardContainerFix}>
          <View style={styles.cardItemLarge}>
            <Text style={styles.cardTitle}>Adresse</Text>
            <Text style={styles.cardText}>{hotelInformations.adress}</Text>
            <Text style={styles.cardText}>{hotelInformations.zipcode} {hotelInformations.city}</Text>
          </View>
          <View style={styles.cardItemSmall}>
            <Text style={styles.cardTitle}>Secteur</Text>
            <Text style={styles.cardText}>{hotelInformations.sector}</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardItemLarge}>
            <Text style={styles.cardTitle}>Note de la dernière visite</Text>
            <Text style={styles.cardText}>{hotelInformations.currentNotation}</Text>
          </View>
          <View style={styles.cardItemSmall}>
            <Text style={styles.cardTitle}>Dernière visite</Text>
            <Text style={styles.cardText}>{hotelInformations.lastVisit}</Text>
          </View>
        </View>
        <View style={styles.cardContainerLastChild}>
          <View style={styles.cardItemFull}>
            <Text style={styles.cardTitle}>Nombre de chambres</Text>
            <Text style={styles.cardText}>{hotelInformations.occupedRooms} occupés / {hotelInformations.availableRooms} disponibles</Text>
          </View>
        </View>
      </View>
      <Text style={styles.hotelTitle}>Urgence</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitleUrgency}>Descriptif de l'urgence</Text>
        <Text style={styles.cardTextUrgency}>{hotelInformations.urgencyDescription}</Text>
      </View>
      <View style={styles.hotelContainer}>
        <View style={styles.button}>
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            icon={<Icon style={styles.buttonIcon} name="plus" type="font-awesome-5" size={10} />}
            title="Ajouter un mémo"
          />
        </View>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.formInput}
          placeholder="Ajouter votre mémo..."
          numberOfLines={4}
          multiline={true}
        />
        <View style={styles.formButtons}>
          <View style={styles.formContainer}>
            <Button buttonStyle={styles.formButtonFirstChild} titleStyle={styles.formButtonFirstChildTitle} title="Annuler" />
          </View>
          <View style={styles.formContainer}>
            <Button buttonStyle={styles.formButtonLastChild} titleStyle={styles.formButtonLastChildTitle} title="Valider" />
          </View>
        </View>
      </View>
      <View style={styles.notification}>
        <Icon style={styles.notificationIcon} color="#222222" name="check" type="font-awesome-5" size={12} />
        <Text style={styles.notificationText}>Votre mémo a été enregistré.</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  hotel: {
    backgroundColor: "#FAFAFA",
    paddingBottom: 40
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderColor: "#E0E0E0"
  },
  headerButton: {
    backgroundColor: "transparent",
    paddingTop: 0,
    paddingBottom: 0
  },
  headerTitle: {
    position: "absolute",
    left: "50%",
    // transform: "translateX(-50%)",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24
  },
  hotelTitle: {
    color: "#031772",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 27,
    padding: 16
  },
  card: {
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    marginBottom: 8
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 16
  },
  cardContainerFix: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 34
  },
  cardContainerLastChild: {
    flex: 1,
    flexDirection: "row",
  },
  cardItemLarge: {
    flex: 7
  },
  cardItemSmall: {
    flex: 3
  },
  cardTitle: {
    marginBottom: 4,
    fontSize: 12,
    lineHeight: 18,
    color: "#828282"
  },
  cardText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#000",
    fontWeight: "500"
  },
  cardTitleUrgency: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
    color: "#000"
  },
  cardTextUrgency: {
    marginBottom: 8,
    fontSize: 12,
    lineHeight: 18,
    color: "#111215"
  },
  hotelContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
    marginRight: 16
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 8,
    paddingLeft: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#EFF2FB",
    borderRadius: 4
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
    paddingLeft: 12,
    paddingTop: 0
  },
  form: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  formInput: {
    backgroundColor: "#F3F3F3",
    borderRadius: 2,
    fontSize: 12,
    lineHeight: 18,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    color: "#9D9D9D",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2
  },
  formButtons: {
    flex: 1,
    flexDirection: "row",
    marginTop: 24
  },
  formContainer: {
    flex: 1
  },
  formButtonFirstChild: {
    width: "96%",
    backgroundColor: "#EFF2FB"
  },
  formButtonLastChild: {
    width: "96%",
    alignSelf: "flex-end",
    backgroundColor: "#031772"
  },
  formButtonFirstChildTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#111215"
  },
  formButtonLastChildTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#FFF"
  },
  notification: {
    flex: 1,
    backgroundColor: "#222222",
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    alignItems: "center",
    // position: "fixed",
    bottom: 88,
    left: "50%",
    // transform: "translateX(-50%)",
    width: 224
  },
  notificationIcon: {
    color: "#FFF",
    backgroundColor: "#FFF",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FFF"
  },
  notificationText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "500",
    paddingLeft: 8
  }
})