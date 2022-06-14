import React from "react";
import { View, Text} from "react-native";
import styles from "./style";

const NavButton = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.text}>Button</Text>
        </View> 
    </View>
  );
};

export default NavButton;
