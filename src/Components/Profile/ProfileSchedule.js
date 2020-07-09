import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Button } from "react-native-elements";
import { MyAppText, textStyles } from "../Texts/MyAppText";

export default function ProfileSchedule() {
    return (
        <View elevation={3} style={styles.cardInfos}>
            <View style={styles.flexContent}>
                <View style={styles.flexContentFirstChild}>
                    <MyAppText style={styles.label}>Arrêt maladie</MyAppText>
                </View>
                <View style={styles.flexContentSecondChild}>
                    <MyAppText style={styles.text}>12 au 14 mai 2020</MyAppText>
                </View>
            </View>
            <View style={[styles.flexContent, styles.mt20]}>
                <View style={styles.flexContentFirstChild}>
                    <MyAppText style={styles.label}>Congés payés</MyAppText>
                </View>
                <View style={styles.flexContentSecondChild}>
                    <MyAppText style={styles.text}>20 au 10 juin 2020</MyAppText>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardInfos: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    flexContent: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    flexContentFirstChild: {
        flex: 2
    },
    flexContentSecondChild: {
        flex: 1
    },
    label: {
        fontSize: 14,
        color: "#000000",
        lineHeight: 21,
    },
    text: {
        fontSize: 12,
        color: "#000000",
        lineHeight: 18
    },
    mt20: {
        marginTop: 20
    },
    width200: {
        width: 200
    },
});
