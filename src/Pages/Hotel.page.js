import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../Components/Helpers/Header";
import Hotel from "../Components/Hotel/Hotel"

export default function HotelPage() {
  return (
    <View styles={styles.hotelPage}>
      <Header />
      <Hotel />
    </View>
  );
}

const styles = StyleSheet.create({
  hotelPage: {
    flex: 1,
    flexDirection: "column"
  }
});
