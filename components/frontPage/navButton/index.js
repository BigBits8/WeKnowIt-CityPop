import React from "react";
import { View, Text, Pressable} from "react-native";
import styles from "./style";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NavButton = (props: Object, navigation) => {
  
   const content: string = props.content;
   console.warn(typeof props)
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("NextPage")}
        style={styles.button}
      >
        <Text style={styles.text}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default NavButton;
