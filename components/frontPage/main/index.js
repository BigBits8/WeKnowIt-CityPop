import React from "react";
import { View, Text} from "react-native";
import styles from './style'
import NavButton from '../navButton/index'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Main = ({navigation}) => {
  return (
    <View style={styles.rel}>
      <View style={styles.container}>
        <Text style={styles.text}>CityPop</Text>
      </View>
      <View style={styles.buttonContainer}>
        <NavButton 
        navigation={navigation} 
        title="search by city" />
        <NavButton 
        navigation={navigation} 
        title="search by country" />
      </View>
    </View>
  );
};

export default Main;
