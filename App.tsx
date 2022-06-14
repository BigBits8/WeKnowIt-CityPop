// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/frontPage/main'
import NextPage from './components/nextPage/main'
const Stack = createNativeStackNavigator();
export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="NextPage" component={NextPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // borderColor: "#FF3D00",
//     // borderWidth: 5,
//     flex: 1,
//     backgroundColor: '#eff9c8',
//     alignItems: 'center',
//     paddingTop: 150,
//   },
// });
