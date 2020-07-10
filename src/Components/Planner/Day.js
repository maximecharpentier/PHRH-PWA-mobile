import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button, Icon } from "react-native-elements";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { AuthContext } from "../../App"
import { API } from "../../utils/api"


const Day = ({ hotel }) => {
    const navigation = useNavigation();
    const [urgences, setUrgences] = useState([])

    useEffect(() => {
        API.get('urgences').then((response) => {
            let urgences = response.data
            urgences = urgences.filter(urgence => urgence.hotel_id === hotel.hotel_id._id)
            setUrgences(urgences)
        })
            .catch(error => {
                console.log(error.response);
            });
    }, []);

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Hotel', { hotel: hotel.hotel_id, })} style={styles.dayCard}>
            <View style={styles.center1}>
                <View style={styles.flex1}>
                    <Text style={styles.hotelName}>{hotel.hotel_id.nom}</Text>
                    <Text>{hotel.hotel_id.adresse} - {hotel.hotel_id.cp}</Text>
                </View>
            </View>
            {urgences.length !== 0 ? (
                <View style={styles.center2}>
                    <Button
                        title="Urgence"
                        titleStyle={{ ...rawStyles.urgence.title }}
                        buttonStyle={{ ...rawStyles.urgence.btn }}
                        icon={
                            <Icon
                                name="exclamation-triangle"
                                type="font-awesome-5"
                                color="#EA2430"
                                size={12}
                            />
                        }
                        onPress={() => setIsStarted(!isStarted)}
                    />
                </View>
            ) : null}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderBottomColor: "#031772",
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
        justifyContent: "space-between",
        alignItems: "center",
    },
    day: {
        fontWeight: "bold",
        fontSize: 13,
    },
    chambers: {
        fontSize: 14,
    },
    days: {
        padding: 15,
        backgroundColor: "#F3F3F3",
    },
    dayCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        // boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.15)",
        borderRadius: 4,
        paddingVertical: 11,
        paddingHorizontal: 16,
        marginVertical: 4,
    },
    hotelName: {
        fontSize: 12,
        fontWeight: "bold",
    },
});

const rawStyles = {
    urgence: {
        title: {
            color: "#EA2430",
            fontSize: 12,
            fontWeight: "bold",
            marginLeft: 6,
        },
        btn: {
            backgroundColor: "rgba(234, 36, 48, 0.24)",
            borderRadius: 4,
        },
    },
};


export default Day;