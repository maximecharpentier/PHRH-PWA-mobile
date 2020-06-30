import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Button } from "react-native-elements";

export default function PlannerHeader() {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.center1}>
          <Text style={styles.month}>Mai 2020</Text>
          <Text style={styles.label}>Jour</Text>
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
      <View style={styles.nav}>
        <View style={styles.center1}>
          <Button
            buttonStyle={{ ...rawStyles.nav.btn }}
            icon={<Icon name="chevron-left" type="font-awesome-5" size={12} />}
          />
          <Text style={styles.changeWeekText}>11 Mai - 16 Mai</Text>
          <Button
            buttonStyle={{ ...rawStyles.nav.btn }}
            icon={<Icon name="chevron-right" type="font-awesome-5" size={12} />}
          />
        </View>
        <View style={styles.center2}>
          <Text style={styles.label}>Temps de trajet</Text>
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
    padding: 15,
    borderBottomColor: "#E0E0E0",
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
  },
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
  },
  changeWeekText: {
    fontSize: 12,
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
