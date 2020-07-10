import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import Notification from "../Components/Notification/Notification"
import { useNavigation, NavigationContainer } from '@react-navigation/native';

import { AsyncStorage } from "react-native";
import { API } from '../utils/api'

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

  // const navigation = useNavigation();

class NotificationPage extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      notifs: {}
    };
  }

  async componentDidMount() {
    let user = await AsyncStorage.getItem('userInfos')
    user = JSON.parse(user)

    API.get(`/notifications/push/valid_semaine/${user._id}`).then(res => {
      this.setState({notifs: res.data})
      console.log(res.data)
    })
  }

  // renderNotifs = () => {
  //   return (
  //     <View key = { this.state.notifs._id }>
  //       <Text>{this.state.notifs.elem.message}</Text>
  //     </View>
  //   ))
  // }

  render() {
    console.log(this.state.notifs)
    return (
      <View style={styles.view}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Notifications</Text>
        </View>
        <ScrollView>
        <View>
          {this.state.notifs && <Text>{this.state.notifs.elem.message}</Text>}
        </View>
        </ScrollView>
      </View>
    )
  }
}

export default NotificationPage;