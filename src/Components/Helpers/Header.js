import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#031772",
    padding: 15,
    paddingTop: 35,
  },
  logo: {
    width: 130,
    height: 35,
  },
});
