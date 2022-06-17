
import {React, useState} from "react";
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



 const Item = ({ prop }) => (
   <View style={styles.item}>
     <Text style={styles.title}>{prop.name}</Text>
   </View>
 );

const url = `https://api.api-ninjas.com/v1/city?name=${inputText}`;
const ShowPop = () => {

    const [state, setState] = useState('');

    const fetchData = async (prop) =>{
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-api-Key": "EtG+IKg8qrx8SIdtZep7Nw==6XWiAFigpduBbahC",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const json = await response.json();
        setState({data: json})
       let s = state.data;

        
       
    }

   
        fetchData();
    
    const renderItem = ({ item }) => <Item title={item} />;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={state}
          renderItem={renderItem}
          keyExtractor={(x, i) => i}
        />
      </SafeAreaView>
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
