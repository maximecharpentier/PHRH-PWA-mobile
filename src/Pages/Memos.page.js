import * as React from "react";
import { StyleSheet, View } from "react-native";

import Header from "../Components/Helpers/Header";
import Memos from "../Components/Memos/Memos"

export default function MemosPage() {
  return (
    <View styles={styles.memosPage}>
      <Header />
      <Memos />
    </View>
  );
}

const styles = StyleSheet.create({
  memosPage: {
    flex: 1,
    flexDirection: "column"
  }
});
