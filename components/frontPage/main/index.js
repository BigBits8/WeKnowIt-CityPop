import React from "react";
import { View, Text} from "react-native";
import styles from './style'
import NavButton from '../navButton/index'
const Main = (props) => {
  return (
    <View style={styles.rel}>
      <View style={styles.container}>
        <Text style={styles.text}>CityPop</Text>
      </View>
      <View style={styles.buttonContainer}>
        <NavButton content="Search by city" />
        <NavButton content="Search by country" />
      </View>
    </View>
  );
};

export default Main;
