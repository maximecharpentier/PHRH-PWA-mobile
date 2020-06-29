import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from "../Components/Helpers/Header";

export default function ProfilePage() {
  return (
    <View style={styles.view}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
    textAlign: "center",
  },
  h2: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 50,
    textAlign: "center",
  },
  view: {
    backgroundColor: "#e5e5e5",
  },
});
