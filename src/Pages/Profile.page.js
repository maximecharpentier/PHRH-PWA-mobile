import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import ProfileHeader from '../Components/Profile/ProfileHeader'

export default function ProfilePage() {
  return (
    <ScrollView style={styles.view}>
      <ProfileHeader />
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