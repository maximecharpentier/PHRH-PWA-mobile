import * as React from "react";
import { Platform, StyleSheet, Text, View, Image, AppRegistry, AsyncStorage } from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { API } from "./utils/api"

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
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
import ResumePage from "./Pages/Resume.page";

export const AuthContext = React.createContext();

const Tab = createBottomTabNavigator();

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const NotificationStack = createStackNavigator();

function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator headerMode={"none"}>
      <NotificationStack.Screen name="Notification" component={NotificationPage} />
      <NotificationStack.Screen name="Resume" component={ResumePage} />
    </NotificationStack.Navigator>
  );
}
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode={"none"}>
      <HomeStack.Screen name="Planning" component={PlannerPage} />
      <HomeStack.Screen name="Hotel" component={HotelPage} />
    </HomeStack.Navigator>
  );
}

const SignIn = createStackNavigator();


const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_900Black,
  });



  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      let userInfos;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        userInfos = await AsyncStorage.getItem('userInfos');
      } catch (e) {
        console.log("failed")
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken, infos: JSON.parse(userInfos) });
    };

    bootstrapAsync();
  }, []);

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            userInfos: action.infos,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            userInfos: action.infos,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            userInfos: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      userInfos: null,
    }
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        API.post('auth/login/', data).then((response) => {
          console.log(response)
          dispatch({ type: 'SIGN_IN', token: response.data.token, infos: response.data.user });
          AsyncStorage.setItem('userToken', response.data.token);
          AsyncStorage.setItem('userInfos', JSON.stringify(response.data.user));
        }).catch(error => {
          console.log(error.response)
        });
      },
      signOut: async () => {
        AsyncStorage.clear();
        dispatch({ type: 'SIGN_OUT' })
      },
    }),
    []
  );

  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFFFFF',
    },
  };

  return (
    <AuthContext.Provider value={{ signIn: authContext.signIn, signOut: authContext.signOut, token: state.userToken, infos: state.userInfos }}>
      <Header isInLogin={state.userToken == null ? true : false } />
      <NavigationContainer theme={AppTheme}>
        {state.userToken == null ? (
          <SignIn.Navigator headerMode="none">
            <SignIn.Screen name="SignIn"
              component={AuthPage}
              options={{
                title: 'Sign in',
                animationTypeForReplace: 'push',
              }} />
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
                  } else if (route.name === 'NotificationPage') {
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
                },
              }}

            >
              <Tab.Screen name="Home" component={HomeStackScreen} />

              <Tab.Screen name="Memo" component={MemosPage} />
              <Tab.Screen name="Profile" component={ProfilePage} />
              <Tab.Screen name="NotificationPage" component={NotificationStackScreen} />
            </Tab.Navigator>
          )}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}



export default App;
