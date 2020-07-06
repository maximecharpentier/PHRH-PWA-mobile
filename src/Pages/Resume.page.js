import * as React from "react";
import { useState } from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TextInput, Alert } from "react-native";
import { CheckBox, Button } from "react-native-elements";

import Header from "../Components/Helpers/Header";
// import AuthForm from "../Components/Forms/AuthForm";

export default function AuthPage() {
  const [isClicked, setIsClicked] = useState(false);
  const hotelList = ['Lafayette', 'Turbigo', 'Clauzel', 'Riviera', 'Excelsior', 'Le Prado', 'Marclau'];
  return (
    <View style={styles.view}>
      <Header />
      <View style={styles.content}>
        <Image style={styles.backArrow} source={require("./../assets/back.png")} />
        <Text style={styles.h1}>Sélectionnez les hôtels que vous n'avez pas pu visiter aujourd'hui</Text>
        {/* <AuthForm /> */}
      </View>
      <ScrollView style={styles.scrollView}>
      {hotelList.map(function(name, index) {
        return <View style={styles.input}>
        <CheckBox key={index} title={name} checked={isClicked} onPress={() => { isClicked ? setIsClicked(false) : setIsClicked(true) }} />
        {isClicked ? <TextInput style={styles.textInput} placeholder="Indiquer la raison..." multiline={true} numberOfLines={4} /> : <View/>}
        </View>;
      })}
      <Button
        title="Valider"
        buttonStyle={{ ...rawStyles.button }}
        titleStyle={{ ...rawStyles.buttonText }}
        onPress={() => Alert.alert('Votre sélection a bien été enregistrée')}
      />
      </ScrollView>
    </View>
  );
}

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
