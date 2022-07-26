import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import { View, Text, FlatList } from "react-native";

const ShowPop = () => {
  const [text, setText] = useState<string>(null);
   
  const [handleData, setHandleData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<boolean>(true);
  
  const [fetchIsDone, setFetchIsDone] = useState(false)
  // Get value from localstorage previously saved from 'Search by country' or 'Search by city' page
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      // if (value !== '') {
        // console.warn(value);
        setText(value);
        
      // }
    } catch (e) {
      console.warn("Faild to fetch the input");
    }
  };
  
  const fetchData = async () => {
    try{
       
       console.warn(text);
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
    setFetchIsDone(true);
    // console.log(responseData.length);
    // console.log(responseData);
    const pop = responseData[0].population;
    // console.log(pop)
    if(responseData[0].population != pop){
      console.warn("no data found");
    }else{
      setErrorMessage(false)
    }
    }catch(err){
      // console.warn('fetch failed')
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
  getData();
    // if (text !== null) {
      if (text !== null) {
        fetchData();
        // setFetchIsDone(true);
      }
    
    
    // }
  
  
 }, [text]);

  return (
    <NativeBaseProvider>
      <View style={styles.rel}>
        <View style={styles.wrapper}>
          {fetchIsDone && (errorMessage && <Text style={styles.text}>oops..</Text>) || (
            <Text style={styles.text}>{text}</Text>
          )}
        </View>

        {handleData && (
          <View style={styles.pop}>
            <Text style={styles.popText}>Population</Text>
            {(loading && <Text>Loading..</Text>) ||
              /* Error message entering city */
              fetchIsDone&&(errorMessage && <Text>city not found..</Text>)}

            {fetchIsDone && (
              <FlatList data={handleData} renderItem={renderItem} />
            )}
          </View>
        )}
      </View>
    </NativeBaseProvider>
  );
};

export default ShowPop;
