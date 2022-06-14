import React from "react";
import { View, Text} from "react-native";
import styles from './style'
import NavButton from '../navButton'
const Main = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>CityPop</Text>
      </View>
      <View>
        <NavButton />
        <NavButton />
      </View>
    </View>
  );
};

export default Main;
