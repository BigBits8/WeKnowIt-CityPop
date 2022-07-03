import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { NativeBaseProvider } from "native-base";
import ShowPopStyles from "../ShowPop/style";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StoreData from "../sharedFunctions/func";

export type Data = {
  country: string;
  is_capital: boolean;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  geonames?: [];
};

const ShowCities = ({ navigation }: any) => {
  const [text, setText] = useState<string>("");
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState<boolean>(true);



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
  
  let url = `http://api.geonames.org/searchJSON?country=${text}&maxRows=3&username=weknowit2`;
  
    const fetchData = async () => {
      
      try {
        const resp = await fetch(url, {
          method: "GET",
          headers: {
            "X-Api-Key": "EtG+IKg8qrx8SIdtZep7Nw==6XWiAFigpduBbahC",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data: Data = await resp.json();

        setData(data);
        setLoading(false);
      } catch (e) {
        console.warn("Fetch failed");
      }
    };
  
  

  const onSubmitEdit = async (itemName: string) => {

    StoreData(itemName);
    console.warn(text)
    navigation.navigate("showPop");
  };

  // KOLLA HÄR!!!
  type Item = {
    name: string,
  };
  interface Object {
    item: Item;
  }
  
  const renderItem = ({ item }: Object) => {
    return (
      <View>
        <Text style={styles.popNum} onPress={() => onSubmitEdit(item.name)}>
          {item.name}
        </Text>
      </View>
    );
  };

  useEffect(() => {
    if(text !== ''){
      fetchData();
    }
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
