import React from "react";
import { Button, View, Text } from "react-native";
import styles from "./style";

interface NavButtons {
  title: string;
  navigation: any;
  direction: string;
}

// Component of button for navigation, first page
// Pass name as title, activate navigation, and direction of page
const NavButton = ({ title, navigation, direction }: NavButtons) => {
  return (
    <View style={styles.container}>
      <Button
        color="#34a5e3"
        title={title}
        // On press get navigation and direction
        onPress={() => navigation.navigate(direction)}
      >
        <Text style={styles.text}></Text>
      </Button>
    </View>
  );
};

export default NavButton;
