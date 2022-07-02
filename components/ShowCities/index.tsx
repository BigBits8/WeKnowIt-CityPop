import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { NativeBaseProvider } from "native-base";
import ShowPopStyles from "../ShowPop/style";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const storeData = async (value: string) => {
    try {
      AsyncStorage.clear();
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
  let url = `http://api.geonames.org/searchJSON?country=${text}&maxRows=3&username=weknowit2`;

  const fetchData = async () => {
    await getData();
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
      console.warn();
      setData(data);

      setLoading(false);
    } catch (e) {
      console.warn("Fetch failed");
    }
  };

  const onSubmitEdit = async () => {
    storeData(text);
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
        <Text style={styles.popNum} onPress={onSubmitEdit}>
          {item.name}
        </Text>
      </View>
    );
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
