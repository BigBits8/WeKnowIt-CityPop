import { React, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Box, Center, NativeBaseProvider } from "native-base";
import ShowPopStyles from '../ShowPop/style';
import styles from './style';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Ionicons";

const ShowCities = ({ navigation }) => {
   const [text, setText] = useState("");
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);

   const storeData = async (value) => {
     try {
       await AsyncStorage.setItem("@storage_Key", value);
     } catch (e) {
       // saving error
     }
   };

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

   let url = `http://api.geonames.org/searchJSON?q=${text}&featureCode=PPLC&maxRows=3&username=weknowit2`;
   const fetchData = async () => {
     const resp = await fetch(url,{
       method: "GET",
       headers: {
         "X-Api-Key": "EtG+IKg8qrx8SIdtZep7Nw==6XWiAFigpduBbahC",
         "Content-Type": "application/json",
         Accept: "application/json",
       },
     });
     const data = await resp.json();
     console.log(data);
     setData(data);
     setLoading(false);
   };

   const renderItem = ({ item }) => {
     return (
       <View style={styles.test}>
         <Text
           style={styles.popNum}
           onPress={(event) =>{
             storeData(event._dispatchInstances.memoizedProps.children);
            navigation.navigate("showPop");
           }
           }
         >
           {item.name}
         </Text>
       </View>
     );
   };
   

   const onSubmitEdit = async () => {
     storeData(text);
     
   };

   useEffect(() => {
     fetchData();
   }, [text]);
  
  return (
    <NativeBaseProvider>
      <View style={ShowPopStyles.rel}>
        <View style={ShowPopStyles.wrapper}>
          <Text style={ShowPopStyles.text}>{text}</Text>
        </View>

        {data && (
          <View style={styles.pop}>
            <Text style={ShowPopStyles.popText}>Cities</Text>
            {(loading && <Text>Loading..</Text>) || (
              <FlatList
                data={data.geonames}
                style={styles.flatList}
                renderItem={renderItem}
              />
            )}
          </View>
        )}
      </View>
    </NativeBaseProvider>
  );
};

export default ShowCities;
