import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Button } from "react-native-elements";
import { MyAppText, textStyles } from "../Texts/MyAppText";

export default function ProfileHeader() {
  return (
    <View>
      <View style={styles.header}>
          <MyAppText style={styles.title}>Profil</MyAppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    color: "#031772",
  },
});

