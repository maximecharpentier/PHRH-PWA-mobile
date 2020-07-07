import React, { useState } from 'react';
import { View } from "react-native";
import PlannerDay from "./PlannerDay";

export default function PlannerDays(props) {
  const [days, setDays] = useState([
    {
      id: 1,
      label: 'Lun.',
      date: ''
    },
    {
      id: 2,
      label: 'Mar.',
      date: ''
    },
    {
      id: 3,
      label: 'Mer.',
      date: ''
    },
    {
      id: 4,
      label: 'Jeu.',
      date: ''
    },
    {
      id: 5,
      label: 'Ven.',
      date: ''
    }
  ])

  const getDay = (dateString) => {
    const dates = props.isNextWeek ? props.nextWeek : props.currentWeek;
    if (dates.length) {
      return dateString.replace(/2020-[0-1][0-9]-/g, '')
    } else {
      return "00"
    }
  }

  return (
    <>
      {days.map((day, id) => <PlannerDay
        key={id}
        label={day.label}
        date={getDay(props.isNextWeek ? props.nextWeek[id] : props.currentWeek[id])}
        fullDate={props.isNextWeek ? props.nextWeek[id] : props.currentWeek[id]} />)}
    </>
  );
}
