import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import styles from "./style";
import homeStyles from "../Home/main/style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Ionicons";


const City = ({ navigation }) => {
  const [text, setText] = useState("");

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
      // saving error
    }
  };
  const onSubmitEdit = async () => {
    storeData(text);
    navigation.navigate("showPop");
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
          <Text>
            <Icon style={styles.Icon} name="search-outline"></Icon>
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default City;
