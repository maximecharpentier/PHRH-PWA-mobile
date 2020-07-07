import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import PlannerHeader from "../Components/Planner/PlannerHeader";
import PlannerDays from "../Components/Planner/PlannerDays";

export default function PlannerPage() {
  const [currentWeek, setCurrentWeek] = useState([])
  const [nextWeek, setNextWeek] = useState([])
  const [isNextWeek, setIsNextWeek] = useState(false)

  const getCurrentWeek = () => {
    let currentDay = new Date()
    let Week = []

    for (let i = 2; i <= 6; i++) {
      let firstDayOfTheWeek = currentDay.getDate() - currentDay.getDay() + i
      let newDay = new Date(currentDay.setDate(firstDayOfTheWeek)).toISOString().slice(0, 10)
      currentWeek.push(newDay)
    }
    setCurrentWeek([...currentWeek, Week])
  }

  const getNextWeek = () => {
    var currentDay = new Date();
    currentDay.setDate(currentDay.getDate() + 7);
    let Week = []

    for (let i = 2; i <= 6; i++) {
      let firstDayOfTheWeek = currentDay.getDate() - currentDay.getDay() + i
      let newDay = new Date(currentDay.setDate(firstDayOfTheWeek)).toISOString().slice(0, 10)
      nextWeek.push(newDay)
    }
    setNextWeek([...nextWeek, Week])
  }

  useEffect(() => {
    getCurrentWeek();
    getNextWeek();
  }, []);

  const getToCurrentWeek = () => {
    setIsNextWeek(false)
  }
  const getToNextWeek = () => {
    setIsNextWeek(true)
  }

  return (
    <ScrollView style={styles.view}>
      <PlannerHeader
        currentWeek={currentWeek}
        nextWeek={nextWeek}
        getToCurrentWeek={getToCurrentWeek}
        getToNextWeek={getToNextWeek}
        isNextWeek={isNextWeek}
      />
      <PlannerDays
        currentWeek={currentWeek}
        nextWeek={nextWeek}
        isNextWeek={isNextWeek} />
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
