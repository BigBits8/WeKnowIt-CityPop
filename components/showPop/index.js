import React, { useState, useEffect } from "react";
import { Box, Center, NativeBaseProvider } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import cityStyles from "../City/style";
import homeStyles from "../Home/style";
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
    return <Text style={styles.popNum}>{item.population}</Text>;
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
      <View style={styles.rel}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{text}</Text>
        </View>

        {loading && <Box>Loading..</Box>}
        {data && (
          <View style={styles.pop}>
            <Text style={styles.popText}>Population</Text>
            <FlatList  data={data} renderItem={renderItem} />
          </View>
        )}
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  pop: {
    alignItems: "center",
    width: "80%",
    height: 100,
    padding: 10,
    borderWidth: 1,
  },
  popText: {
    marginBottom: 10,
    textTransform: "uppercase",
  },
  popNum: {
    fontSize: 20,
  },
  rel: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    paddingTop: 50,
    marginBottom: 100,
    // borderColor: "#FF3D00",
    // borderWidth: 5,
  },
  text: {
    fontSize: 40,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  container: {
    paddingTop: 50,
    fontSize: 70,
    marginBottom: 100,
    borderColor: "#FF3D00",
    borderWidth: 5,
  },
  item: {
    padding: 20,
    fontSize: 70,
    borderColor: "#FF3D00",
    borderWidth: 5,
  },
  title: {
    fontSize: 32,
  },
});
export default ShowPop;
