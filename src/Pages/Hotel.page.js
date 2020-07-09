import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation, NavigationContainer } from '@react-navigation/native';

import Header from "../Components/Helpers/Header";
import Hotel from "../Components/Hotel/Hotel"

export default function HotelPage({route}) {
  const { hotel } = route.params;
  const navigation = useNavigation();

  return (
    <Hotel navigation={navigation} hotel={hotel} />
  );
}

const styles = StyleSheet.create({
  hotelPage: {
    flex: 1,
    flexDirection: "column"
  }
});
