import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import { View, Text, FlatList } from "react-native";

const ShowPop = () => {
  const [text, setText] = useState<string>();
  const [handleData, setHandleData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<boolean>(true);

  // Get value from localstorage previously saved from 'Search by country' or 'Search by city' page
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        // console.warn(value);
        setText(value);
      }
    } catch (e) {
      console.warn("Faild to fetch the input");
    }
  };

  const fetchData = async () => {
    try{
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

    const responseData = await resp.json();

    setHandleData(responseData);
    setLoading(false);
    console.log(responseData.length);
    // console.log(responseData);
    const pop = responseData[0].population;
    console.log(pop)
    if(responseData[0].population != pop){
      console.warn("no data found");
    }else{
      setErrorMessage(false)
    }
    }catch(err){
      console.warn('fetch failed')
    }
   
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
          {(errorMessage && <Text style={styles.text}>oops..</Text>) || (
            <Text style={styles.text}>{text}</Text>
          )}
        </View>

        {handleData && (
          <View style={styles.pop}>
            <Text style={styles.popText}>Population</Text>
            {(loading && <Text>Loading..</Text>) ||
              (errorMessage && <Text>city not found..</Text>)}

            {<FlatList data={handleData} renderItem={renderItem} />}
          </View>
        )}
      </View>
    </NativeBaseProvider>
  );
};

export default ShowPop;
