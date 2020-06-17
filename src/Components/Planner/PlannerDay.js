import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { round } from "react-native-reanimated";

export default function PlannerDay() {
  const hotels = [
    {
      name: "Lafayette",
      zip: 75010,
      isUrgence: true,
    },
    {
      name: "Lafayette",
      zip: 75010,
      isUrgence: true,
    },
    {
      name: "Lafayette",
      zip: 75010,
      isUrgence: true,
    },
    {
      name: "Lafayette",
      zip: 75010,
      isUrgence: true,
    },
    {
      name: "Lafayette",
      zip: 75010,
      isUrgence: true,
    },
    {
      name: "Lafayette",
      zip: 75010,
      isUrgence: true,
    },
  ];
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.center1}>
          <Text style={styles.day}>Mer. 13</Text>
        </View>
        <View style={styles.center2}>
          <Text style={styles.chambers}>00 chambres</Text>
        </View>
      </View>
      <View style={styles.days}>
        {hotels.map((l, i) => (
          <View key={i} style={styles.dayCard}>
            <Text style={styles.hotelName}>{l.name}</Text>
            <Text style={styles.hotelZip}>{l.zip}</Text>
          </View>
        ))}
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
    borderBottomColor: "#031772",
    borderBottomWidth: 1,
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
  chambers: {
    fontSize: 14,
  },
  days: {
    padding: 15,
    backgroundColor: "#F3F3F3",
  },
  dayCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.15)",
    borderRadius: 4,
    paddingVertical: 11,
    paddingHorizontal: 16,
    marginVertical: 4,
  },
  hotelName: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
