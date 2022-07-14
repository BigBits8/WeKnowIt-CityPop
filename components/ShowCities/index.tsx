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
  totalResultsCount: number;
  geonames?: [];
};

let responseEmpty = true;

// Component for getting cities by country
const ShowCities = ({ navigation }: any) => {
  const [text, setText] = useState<string>("");
  const [handleData, setHandleData] = useState<Data>();
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState(false);

  // Get value from localstorage previously saved from 'Search by country' page
  const getData = async () => {
    try {
      const value: string = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        setText(value);
      }
    } catch (e) {
      console.warn("Faild to fetch the input");
    }
  };

  // Run function getData
  getData();

  let url = `http://api.geonames.org/searchJSON?country=${text}&maxRows=3&username=weknowit2`;
  // Fetch data from Api Geonames
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
      // Get response and handle data with useState
      const responseData: Data = await resp.json();
      setHandleData(responseData);
      console.log(responseData);
      setLoading(false);

      if (responseData.totalResultsCount === 0) {
        setErrorMessage(true);
        console.warn("no data found");
      }
      // On successful fetch, set Loading to false
    } catch (e) {
      console.warn("Fetch failed");
    }
  };
  // On submit, store name of city to localStorage and navigate to population page
  const onSubmitEdit = async (itemName: string) => {
    // if(responseData){

    // }
    StoreData(itemName);
    // console.warn(text);
    navigation.navigate("showPop");
  };

  type Item = {
    name: string;
  };
  interface Object {
    item: Item;
  }
  // Render each city
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
    if (text !== "") {
      fetchData();
    }
  }, [text]);

  return (
    <NativeBaseProvider>
      <View style={ShowPopStyles.rel}>
        <View style={ShowPopStyles.wrapper}>
          {}
          <Text style={ShowPopStyles.text}>
            {(errorMessage && (
              <Text style={ShowPopStyles.popText}>oops..</Text>
            )) ||
              text}
          </Text>
        </View>

        {handleData && (
          <View style={styles.pop}>
            <Text style={ShowPopStyles.popText}>Cities</Text>
            {/* Show loading message while fetching */}
            {loading && <Text>Loading..</Text>}
            {errorMessage && <Text>Cities not found..</Text>}

            <FlatList
              data={handleData.geonames}
              style={styles.flatList}
              renderItem={renderItem}
            />
          </View>
        )}
      </View>
    </NativeBaseProvider>
  );
};

export default ShowCities;
