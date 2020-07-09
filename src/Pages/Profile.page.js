import * as React from "react";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";

import ProfileHeader from '../Components/Profile/ProfileHeader'
import ProfileInfos from '../Components/Profile/ProfileInfos'
import ProfileSchedule from '../Components/Profile/ProfileSchedule'

import {AuthContext} from "../App"

export default function ProfilePage() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScrollView style={styles.view} contentContainerStyle={{flexGrow:1}}>
      <ProfileHeader title="Profil" />
      <ProfileInfos />
      <ProfileHeader title="Indisponibilités" />
      <ProfileSchedule />
      <Button title="Deconnexion" onPress={() => signOut()}>Deconnexion</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 100,
    backgroundColor: "#FAFAFA",
  },
});
