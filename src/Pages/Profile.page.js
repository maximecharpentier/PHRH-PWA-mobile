import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import ProfileHeader from '../Components/Profile/ProfileHeader'
import ProfileInfos from '../Components/Profile/ProfileInfos'
import ProfileSchedule from '../Components/Profile/ProfileSchedule'

export default function ProfilePage() {
  return (
    <ScrollView style={styles.view} contentContainerStyle={{flexGrow:1}}>
      <ProfileHeader title="Profil" />
      <ProfileInfos />
      <ProfileHeader title="Indisponibilités" />
      <ProfileSchedule />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 100,
    backgroundColor: "#FAFAFA",
  },
});
