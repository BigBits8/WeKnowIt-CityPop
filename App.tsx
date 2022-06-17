// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";
import {useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import City from "./components/City";
import showPop from "./components/showPop";
const Stack = createNativeStackNavigator();
export default function App() {

 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "CityPop", headerShown: false }}
        />
        <Stack.Screen
          name="NextPage"
          component={City}
          options={{ title: "CityPop" }}
        />
        <Stack.Screen
          name="showPop"
          component={showPop}
          options={{ title: "Population", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // borderColor: "#FF3D00",
//     // borderWidth: 5,
//     flex: 1,
//     backgroundColor: '#eff9c8',
//     alignItems: 'center',
//     paddingTop: 150,
//   },
// });
