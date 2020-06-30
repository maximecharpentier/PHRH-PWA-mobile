import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Button } from "react-native-elements";
import { MyAppText, textStyles } from "../Texts/MyAppText";

export default function ProfileHeader({title}) {
  return (
      <View style={styles.header}>
          <MyAppText style={styles.title}>{title}</MyAppText>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  title: {
    fontSize: 18,
    color: "#031772",
  },
});

