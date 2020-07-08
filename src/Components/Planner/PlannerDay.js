import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button, Icon } from "react-native-elements";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { AuthContext } from "../../App"
import { API } from "../../utils/api"


const PlannerDay = ({ fullDate, label, date }) => {
  const navigation = useNavigation();
  const { infos } = React.useContext(AuthContext);
  const [visits, setVisits] = useState([])

  useEffect(() => {
    API.get(`gestion/visites/get/foruser/${infos._id}`).then(res => {
      setVisits(res.data)
    })
  }, [infos]);

  console.log(visits)

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.center1}>
          <Text style={styles.day}>{label} {date}</Text>
        </View>
        <View style={styles.center2}>
          <Text style={styles.chambers}>00 chambres</Text>
        </View>
      </View>
      <View style={styles.days}>
        {visits !== "Aucune visite pour cet user" && visits.filter(visit => visit !== null && visit !== undefined && visit.date_visite.slice(0, 10) == fullDate).map((hotel, i) => hotel !== null && (
          <TouchableOpacity onPress={() => navigation.navigate('Hotel', {hotel: hotel.hotel_id,})} key={i} style={styles.dayCard}>
            <View style={styles.center1}>
              <Text style={styles.hotelName}>{hotel.hotel_id.nom}</Text>
              <Text style={styles.hotelZip}>{hotel.hotel_id.cp}</Text>
            </View>
            {hotel.isUrgence ? (
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
          </TouchableOpacity>))}
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
  hotelZip: {
    marginLeft: 10,
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


export default PlannerDay;