import React from "react";
import { Button, View, Text, Pressable} from "react-native";
import styles from "./style";


const NavButton = ({title, navigation}) => {
  const content = title;
 
  return (
    <View style={styles.container}>
      <Button
        title={content}
        onPress={() => navigation.navigate("NextPage")}
        style={styles.button}
      >
        <Text style={styles.text}></Text>
      </Button>
      
    </View>
  );
};

export default NavButton;
