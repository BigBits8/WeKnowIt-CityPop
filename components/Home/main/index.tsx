import React from "react";
import { View, Text} from "react-native";
import styles from './style'
import NavButton from '../Buttons'


const Home = ({navigation}: any) => {
  return (
    <View style={styles.rel}>
      <View style={styles.container}>
        <Text style={styles.text}>CityPop</Text>
      </View>
      <View style={styles.buttonContainer}>
        <NavButton
          navigation={navigation}
          title="search by city"
          direction={"NextPage"}
        />

        <NavButton
          navigation={navigation}
          title="search by country"
          direction={"Country"}
        />
      </View>
    </View>
  );
};

export default Home;
