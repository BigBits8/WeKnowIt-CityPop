import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";

import styles from "./style";
import homeStyles from "../Home/main/style";
import Icon from "react-native-vector-icons/Ionicons";
import StoreData from "../sharedFunctions/func";
// Component for search by country page
const Country = ({ navigation }) => {
  const [text, setText] = useState("");
  // On submit Store input from user to localStorage and navigate to population page
  const onSubmitEdit = async () => {
    StoreData(text);
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
