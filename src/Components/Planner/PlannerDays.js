import * as React from "react";
import { View } from "react-native";
import PlannerDay from "./PlannerDay";

const planning = {
  150620: [
    {
      name: "Lafayette",
      zip: 75010,
      isUrgence: true,
    },
    // {
    //   name: "Lafayette",
    //   zip: 75010,
    //   isUrgence: false,
    // },
    // {
    //   name: "Lafayette",
    //   zip: 75010,
    //   isUrgence: false,
    // },
    // {
    //   name: "Lafayette",
    //   zip: 75010,
    //   isUrgence: true,
    // },
    // {
    //   name: "Lafayette",
    //   zip: 75010,
    //   isUrgence: false,
    // },
    // {
    //   name: "Lafayette",
    //   zip: 75010,
    //   isUrgence: true,
    // },
  ],
  160620: [
    {
      name: "Lafayette",
      zip: 75010,
      isUrgence: false,
    },
    // {
    //   name: "Lafayette",
    //   zip: 75010,
    //   isUrgence: false,
    // },
    // {
    //   name: "Lafayette",
    //   zip: 75010,
    //   isUrgence: true,
    // },
    // {
    //   name: "Lafayette",
    //   zip: 75010,
    //   isUrgence: true,
    // },
    // {
    //   name: "Lafayette",
    //   zip: 75010,
    //   isUrgence: false,
    // },
    // {
    //   name: "Lafayette",
    //   zip: 75010,
    //   isUrgence: true,
    // },
  ],
}

export default function PlannerDays() {
  return (
    <>
    {/* {Object.values(planning).map((x, i) => {
       */}
      <PlannerDay hotels={planning[150620]}/>
      <PlannerDay hotels={planning[160620]}/>
    {/* })} */}
      
    </>
  );
}
