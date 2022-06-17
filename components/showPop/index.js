
import {React, useState} from "react";
import { FlatList, View, Text } from "react-native";

let inputText = localStorage.getItem("inputText");
let myData = '';
const ShowPop = () => {

    const [data, setData] = useState(null);
     let inputText = "Paris";
     const url = `https://api.api-ninjas.com/v1/city?name=${inputText}`;
     fetch(
       url,

       {
         method: "GET",
         headers: {
           "x-api-Key": "EtG+IKg8qrx8SIdtZep7Nw==6XWiAFigpduBbahC",
           "Content-Type": "application/x-www-form-urlencoded",
           Accept: "application/json",
         },
       }
     )
       .then((resp) => resp.json())
       .then(function (data) {
        setData(data);

       })
       .catch(function (error) {
         console.log(error);
       });
       
      


  return (
    <View>
      <FlatList />
    </View>
  );
};

export default ShowPop;
