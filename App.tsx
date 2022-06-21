// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";
import {useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home/main";
import City from "./components/City";
import ShowPop from "./components/ShowPop";
import Country from "./components/Country";
import ShowCities from "./components/ShowCities";
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
          component={ShowPop}
          options={{ title: "Population" }}
        />
        <Stack.Screen
          name="Country"
          component={Country}
          options={{ title: "Country" }}
        />
        <Stack.Screen
          name="ShowCities"
          component={ShowCities}
          options={{ title: "ShowCities" }}
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
