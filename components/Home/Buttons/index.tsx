import React from "react";
import { Button, View, Text } from "react-native";
import styles from "./style";

interface Buttons {
  title: string;
  navigation: any;
  direction: string;
}
const NavButton = ({ title, navigation, direction }: Buttons) => {
  return (
    <View style={styles.container}>
      <Button
        color="#34a5e3"
        title={title}
        onPress={() => navigation.navigate(direction)}
      >
        <Text style={styles.text}></Text>
      </Button>
    </View>
  );
};

export default NavButton;
