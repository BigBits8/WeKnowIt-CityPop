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
import StoreData from '../sharedFunctions/func'

// Component for searching by city
const City = ({ navigation }) => {
  const [text, setText] = useState("");

  // Store input form user to localStorage and navigate population page
  const onSubmitEdit = async () => {
    StoreData(text);
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
