import * as React from "react";
import { Platform, StyleSheet, Text, View, Image, AppRegistry } from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { AppLoading } from "expo";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';

import Header from "./Components/Helpers/Header";
import AuthPage from "./Pages/Auth.page";

import PlannerPage from "./Pages/Planner.page";
import ProfilePage from "./Pages/Profile.page"
import NotificationPage from "./Pages/Notification.page"
import HotelPage from "./Pages/Hotel.page";
import MemosPage from "./Pages/Memos.page";


const Tab = createBottomTabNavigator();

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const HomeStack = createStackNavigator();

const SignIn = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Planning" component={PlannerPage} />
      <HomeStack.Screen name="Hotel" component={HotelPage} />
    </HomeStack.Navigator>
  );
}

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_900Black,
  });

  const [isLoggin, setIsLoggin] = React.useState(true)


  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Header />
      <NavigationContainer>
        {!isLoggin ? (
          <SignIn.Navigator>
            <SignIn.Screen name="Se connecter" component={AuthPage} />
          </SignIn.Navigator>
        ) : (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = 'md-home';
                  } else if (route.name === 'Memo') {
                    iconName = 'tags';
                  } else if (route.name === 'Profile') {
                    iconName = 'account-circle';
                  } else if (route.name === 'Notification') {
                    iconName = 'md-notifications';
                  }
                  if (route.name === 'Profile') {
                    return <MaterialIcons name={iconName} size={30} color={color} />;
                  } else if (route.name === 'Memo') {
                    return <AntDesign name={iconName} size={30} color={color} />;
                  } else {
                    return <Ionicons name={iconName} size={30} color={color} />
                  }
                },
              })}
              tabBarOptions={{
                activeTintColor: '#000000',
                inactiveTintColor: '#A1B5D8',
                showLabel: false,
                keyboardHidesTabBar: true,
                tabStyle: {
                  borderTopColor: "#031772",
                  borderTopWidth: 1,
                  backgroundColor: '#EFF2FB'
                }
              }}
            >
              <Tab.Screen name="Home" component={HomeStackScreen} />

              <Tab.Screen name="Memo" component={MemosPage} />
              <Tab.Screen name="Profile" component={ProfilePage} />
              <Tab.Screen name="Notification" component={NotificationPage} />
            </Tab.Navigator>
          )}
      </NavigationContainer>
    </>
  )
}



export default App;

// const styles = StyleSheet.create({
//   view: {
//     backgroundColor: "#FAFAFA",
//     height: "100vh"
//   },
// });
