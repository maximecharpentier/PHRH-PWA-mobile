import * as React from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 20 : 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#031772",
    padding: Platform.OS === 'android' ? 35 : 15
  },
  logo: {
    width: 130,
    height: 35,
  },
});
