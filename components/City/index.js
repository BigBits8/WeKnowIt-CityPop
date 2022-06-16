import {React, useState} from "react";
import { Button, View, Text, TextInput, TouchableHighlight } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./style";
import homeStyles from "../Home/style";
import NavButton from "../Home/Buttons";
let myText = "";


const City = ({navigation}) => {
  
  const [text, setText] = useState("");

  const onSubmitEdit = () => {
    myText = `This is my text: ${text}`;
    console.warn(myText)

  };
  return (
    <View style={homeStyles.rel}>
      <View style={styles.wrapper}>
        <Text style={homeStyles.text}>Search By City</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a city"
          keyboardType="default"
          defaultValue={text}
          onChangeText={(newText) => setText(newText)}
        />

        <TouchableHighlight style={styles.button} onPress={onSubmitEdit}>
          <Text>Button</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default City;
