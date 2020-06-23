import * as React from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import AuthPage from "./Pages/Auth.page";
import PlannerPage from "./Pages/Planner.page";
import HotelPage from "./Pages/Hotel.page";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <View style={styles.view}>
      <HotelPage />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#FAFAFA",
    height: "100vh"
  },
});