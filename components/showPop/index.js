

import React, { useState, useEffect } from "react";
import { Box, Center, NativeBaseProvider } from "native-base";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";


let inputText = localStorage.getItem("inputText");
let cityPops = '';

const url = `https://api.api-ninjas.com/v1/city?name=${inputText}`;
const ShowPop = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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
      setData(data);
      setLoading(false);
    };

   const renderItem = ({ item }) => {
     return (
       <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
         {item.population}
       </Box>
     );
   };
    
    
    useEffect(() => {
  fetchData();
}, []);

return (
  <NativeBaseProvider>
    <Center flex={1}>
    <Box> Fetch API</Box>
      {loading && <Box>Loading..</Box>}
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          
        />
      )}
    </Center>
  </NativeBaseProvider>
);
}
    


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
