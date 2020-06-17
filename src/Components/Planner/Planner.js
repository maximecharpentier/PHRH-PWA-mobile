import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon, Button } from "react-native-elements";
import { create } from "react-test-renderer";

export default function Planner() {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.center1}>
          <Text style={sHeader.month}>Mai 2020</Text>
          <Text style={sHeader.label}>Jour</Text>
        </View>
        <View style={styles.center2}>
          <Icon name="calendar-alt" type="font-awesome-5" size={18} />

          <Button
            title={isStarted ? "Fin" : "Debut"}
            titleStyle={{ ...rawStyles.headerBtn.title }}
            buttonStyle={{ ...rawStyles.headerBtn.btn }}
            iconRight={true}
            icon={
              isStarted ? (
                <Icon
                  name="toggle-on"
                  type="font-awesome-5"
                  color="#0de029"
                  size={20}
                />
              ) : (
                <Icon
                  name="toggle-off"
                  type="font-awesome-5"
                  color="#bf2f00"
                  size={20}
                />
              )
            }
            onPress={() => setIsStarted(!isStarted)}
          />
        </View>
      </View>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 15,
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
});

const sHeader = StyleSheet.create({
  month: {
    color: "#111215",
    fontWeight: "bold",
    fontSize: 16,
  },
  label: {
    backgroundColor: "#EFF2FB",
    borderRadius: 4,
    paddingHorizontal: 7,
    paddingVertical: 3,
    fontSize: 12,
    marginHorizontal: 15,
    // height: 20,
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
};
