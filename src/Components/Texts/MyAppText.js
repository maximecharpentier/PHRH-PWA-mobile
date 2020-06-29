import React from "react";
import { Text } from "react-native";

export const textStyles = {
  fontFamily: "Poppins_500Medium",
};

export const MyAppText = ({style, ...props}) => (
  <Text {...props} style={[textStyles, style]} />
);