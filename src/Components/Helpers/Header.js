import * as React from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { useNavigationState } from '@react-navigation/native';




const Header = ({ isInLogin }) => {
  return (
    <View style={[styles.container, {paddingVertical: isInLogin ? '35px' : '15px' }]}>
      <Image style={{width: isInLogin ? 105 : 80, height: isInLogin ? 28 : 22 }} source={require("../../assets/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 20 : 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#031772",
  },
});

export default Header;
