import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";

import ProfileHeader from '../Components/Profile/ProfileHeader'
import ProfileInfos from '../Components/Profile/ProfileInfos'
import ProfileSchedule from '../Components/Profile/ProfileSchedule'

import {AuthContext} from "../App"
import { API } from '../utils/api'

export default function ProfilePage() {
  const { signOut, infos } = React.useContext(AuthContext);

  const [team, setTeam] = useState(null)
  const [user_a, setUser_a] = useState(false)
  const [user_b, setUser_b] = useState(false)

  useEffect(() => {
    API.get(`gestion/equipes/`).then(res => {
      let firstUser = res.data.filter(firstUser => firstUser.equipe.user_a_id === infos._id)
      let secondUser = res.data.filter(secondUser => secondUser.equipe.user_b_id === infos._id)
      if(firstUser.length > 0){
        setTeam(firstUser)
        setUser_a(true)
      } else if (secondUser.length > 0){
        setTeam(secondUser)
        setUser_b(true)
      } else {
        setTeam(false)
      }
    })
  }, []);
  return (
    <ScrollView style={styles.view} contentContainerStyle={{flexGrow:1}}>
      <ProfileHeader title="Profil" />
      <ProfileInfos firstUser={user_a} secondUser={user_b} team={team} />
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
