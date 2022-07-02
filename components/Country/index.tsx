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

const Country = ({ navigation }) => {
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
    navigation.navigate("ShowCities");
  };

  return (
    <View style={homeStyles.rel}>
      <View style={styles.wrapper}>
        <Text style={homeStyles.text}>Search By Country</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a country"
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

export default Country;
