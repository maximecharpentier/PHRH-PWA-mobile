import * as React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import PlannerHeader from "../Components/Planner/PlannerHeader";
import PlannerDays from "../Components/Planner/PlannerDays";

import Constants from 'expo-constants';


export default function AuthPage() {
  return (
    <ScrollView style={styles.view}>
      <PlannerHeader/>
      <PlannerDays/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
    textAlign: "center",
  },
  h2: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 50,
    textAlign: "center",
  },
  view: {
    backgroundColor: "#e5e5e5",
  },
});
