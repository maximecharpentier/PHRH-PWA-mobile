import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Icon, Button } from "react-native-elements";
import { MyAppText, textStyles } from "../Texts/MyAppText";
import {AuthContext} from "../../App"

export default function ProfileInfos() {
    const [useOwnVehicule, setUseOwnVehicule] = useState(false);
    const { infos } = React.useContext(AuthContext);
    // const userInfos = JSON.parse(infos)
    return (
        <View elevation={3} style={styles.cardInfos}>
            <View style={[styles.flexContent, styles.firstFlexContent]}>
                <View style={styles.flexContentFirstChild}>
                    <MyAppText style={styles.label}>Période</MyAppText>
                </View>
                <View style={styles.flexContentSecondChild}>
                    <MyAppText style={styles.text}>11 au 16 mai 2020</MyAppText>
                </View>
            </View>
            <View style={[styles.flexContent, styles.mt20]}>
                <View style={styles.flexContentFirstChild}>
                    <MyAppText style={styles.label}>Binôme</MyAppText>
                    <MyAppText style={styles.text}>{infos.prenom} {infos.nom}</MyAppText>
                </View>
                <View style={styles.flexContentSecondChild}>
                    <MyAppText style={styles.label}>Secteur</MyAppText>
                    <MyAppText style={styles.text}>{infos.secteur}</MyAppText>
                </View>
            </View>
            <View style={[styles.flexContent, styles.mt20]}>
                <View style={styles.flexContentFirstChild}>
                    <MyAppText style={styles.label}>Plage horaire</MyAppText>
                    <MyAppText style={styles.text}>Matin</MyAppText>
                </View>
                <View style={styles.flexContentSecondChild}>
                    <MyAppText style={styles.label}>Véhicule</MyAppText>
                    <MyAppText style={styles.text}>Identifiant</MyAppText>
                </View>
            </View>
            <View style={[styles.flexContent, styles.mt20]}>
                <View style={styles.flexContentSecondChild}>
                    <MyAppText style={styles.text}>J’utilise mon véhicule personnel</MyAppText>
                </View>
                <View style={styles.flexContentSecondChild}>
                    {useOwnVehicule ? (
                        <Icon
                            name="toggle-on"
                            type="font-awesome-5"
                            color="#0de029"
                            size={30}
                            onPress={() => setUseOwnVehicule(!useOwnVehicule)}
                        />
                    ) : (
                            <Icon
                                name="toggle-off"
                                type="font-awesome-5"
                                color="#bf2f00"
                                size={30}
                                onPress={() => setUseOwnVehicule(!useOwnVehicule)}
                            />
                        )}
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
    firstFlexContent: {
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#031772"
    },
    flexContentFirstChild: {
        flex: 2
    },
    flexContentSecondChild: {
        flex: 1
    },
    label: {
        fontSize: 12,
        color: "#828282",
        lineHeight: 18,
        marginBottom: 5
    },
    text: {
        fontSize: 14,
        color: "#000000",
        lineHeight: 21,
    },
    btn: {
        backgroundColor: "#FFFFFF"
    },
    mt20: {
        marginTop: 20
    },
    mt5: {
        marginTop: 5
    },
    width200: {
        width: 200
    }
});

