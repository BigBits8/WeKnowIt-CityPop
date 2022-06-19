import React, { useState, useEffect } from "react";
import { Box, Center, NativeBaseProvider } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";

const ShowPop = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        setText(value);
        
      }
    } catch (e) {
      console.warn("Faild to fetch the input");
    }
  };

   getData();
  
  
  let url = `https://api.api-ninjas.com/v1/city?name=${text}`;
  const fetchData = async () => {
     
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-Key": "EtG+IKg8qrx8SIdtZep7Nw==6XWiAFigpduBbahC",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await resp.json();
    console.log(data)
    setData(data);
    setLoading(false);
  };

  const renderItem = ({ item }) => {
    return <Text style={styles.popNum}>{item.population}</Text>;
  };

  
  useEffect(() => {
    fetchData();
  }, [text]);
  
  return (
    <NativeBaseProvider>
      <View style={styles.rel}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{text}</Text>
        </View>

        {data && (
          <View style={styles.pop}>
            <Text style={styles.popText}>Population</Text>
            {loading && <Text>Loading..</Text> || <FlatList data={data} renderItem={renderItem} />}
          </View>
        )}
      </View>
    </NativeBaseProvider>
  );
};


export default ShowPop;
