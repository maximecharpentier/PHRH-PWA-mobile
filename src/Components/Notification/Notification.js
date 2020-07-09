import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";

export default function Notification() {
  return (
    <View style={styles.notification}>
      <View style={styles.notificationPoint} />
      <Text>Votre planning du XX au XX vient d'être modifié.</Text>
      <Text style={styles.date}>26 mai</Text>
      <Icon style={styles.arrow} name="chevron-right" type="font-awesome-5" size={12} />
    </View>
  )
}

const styles = StyleSheet.create({
  notification: {
    lineHeight: 18,
    borderBottomColor: '#031772',
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  notificationPoint: {
    width: 8,
    height: 8,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "#EA2430",
    borderRadius: 100
  },
  date: {
    whiteSpace: "nowrap",
    marginLeft: 16,
    marginRight: 16
  },
  arrow: {
    width: 8,
    height: 16,
    marginRight: 16,
  },
})
