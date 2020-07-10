import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

import Notification from "../Components/Notification/Notification"
import { useNavigation, NavigationContainer } from '@react-navigation/native';

export default function NotificationPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Notifications</Text>
      </View>
      <Notification />
    </View>
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
  banner: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  bannerText: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 24
  }
});
