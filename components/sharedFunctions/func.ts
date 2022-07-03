
  
  import AsyncStorage from "@react-native-async-storage/async-storage";
   //  Function used in multiple pages
  //   Get input from user and store in localStorage
  const storeData = async (value: string) => {
    try {
      AsyncStorage.clear();
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
        if(value === ''){
             console.warn('Input a value')
        }
     
    }
  };
 export default storeData;

  

  