import React, { useState, useEffect } from "react";
import { Box, Center, NativeBaseProvider } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";

let cityPops = "";

const ShowPop = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

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
    return <Box>{item.population}</Box>;
  };
// const fetchIt = async () =>{
//   await getData()
//   await fetchData();
// }
// fetchIt();
  useEffect(() => {
    fetchData();
  }, [text]);
  
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box></Box>
        {loading && <Box>Loading..</Box>}
        {data && <FlatList data={data} renderItem={renderItem} />}
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default ShowPop;
