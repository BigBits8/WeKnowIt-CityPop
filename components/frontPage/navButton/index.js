import React from "react";
import { View, Text} from "react-native";
import styles from "./style";

const NavButton = (props) => {
   const content = props.content;
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>{content}</Text>
      </View>
    </View>
  );
};

export default NavButton;
