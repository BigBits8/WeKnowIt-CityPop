import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import { View, Text, FlatList } from "react-native";

const ShowPop = () => {
  const [text, setText] = useState<string>();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Get value from localstorage previously saved from 'Search by country' or 'Search by city' page
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        console.warn(value);
        setText(value);
      }
    } catch (e) {
      console.warn("Faild to fetch the input");
    }
  };

  const fetchData = async () => {
    getData();
    const resp = await fetch(
      `https://api.api-ninjas.com/v1/city?name=${text}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "EtG+IKg8qrx8SIdtZep7Nw==6XWiAFigpduBbahC",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    const data = await resp.json();

    setData(data);
    setLoading(false);
  };

  type Item = {
    population: number;
  };
  interface Object {
    item: Item;
  }
  const renderItem = ({ item }: Object) => {
    return <Text style={styles.popNum}>{item.population}</Text>;
  };

  useEffect(() => {
    if (text !== null) {
      fetchData();
    }
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
            {(loading && <Text>Loading..</Text>) || (
              <FlatList data={data} renderItem={renderItem} />
            )}
          </View>
        )}
      </View>
    </NativeBaseProvider>
  );
};

export default ShowPop;
