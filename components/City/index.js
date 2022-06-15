import React from "react";
import { Button, View, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./style";
import homeStyles from "../Home/style";

import NavButton from "../Home/Buttons";
const City = ({navigation}) => {
  return (
    <View style={homeStyles.rel}>
      <View style={styles.wrapper}>
        <Text style={homeStyles.text}>Search By City</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          
          placeholder="Enter a city"
          keyboardType='default'
        />
      </View>
    </View>
  );
};

export default City;
