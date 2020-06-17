import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Button } from "react-native-elements";

export default function PlannerDay() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.center1}>
          <Text style={styles.day}>Mer. 13</Text>
        </View>
        <View style={styles.center2}>
          <Text style={styles.chambers}>00 chambres</Text>
        </View>
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
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  center1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  center2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  nav: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  day: {
    fontWeight: "bold",
    fontSize: 13,
  },
  day: {
    fontSize: 14,
  },
});

const rawStyles = {
  headerBtn: {
    title: {
      fontSize: 12,
      color: "#000000",
      marginRight: 10,
    },
    btn: {
      backgroundColor: "#EFF2FB",
      paddingVertical: 6,
      paddingHorizontal: 8,
      marginLeft: 10,
    },
  },
  nav: {
    btn: {
      backgroundColor: "none",
    },
  },
};
