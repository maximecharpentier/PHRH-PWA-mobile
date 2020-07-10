import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import Hotel from "../Components/Hotel/Hotel"

export default function HotelPage({route}) {
  const { hotel } = route.params;
  const navigation = useNavigation();

  return (
    <Hotel navigation={navigation} hotel={hotel} />
  );
}
