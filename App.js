import { ImageBackground, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lap1a from './view/Lap1a';
import Lap1b from './view/Lap1b';
import Lap1c from './view/Lap1c';
import Lap1d from './view/Lap1d';
import Home from './view/Home';
import * as React from 'react';
const Stack = createNativeStackNavigator();


export default function App() {
  return (

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Lap1a" component={Lap1a}/>
            <Stack.Screen name="Lap1b" component={Lap1b}/>
            <Stack.Screen name="Lap1c" component={Lap1c}/>
            <Stack.Screen name="Lap1d" component={Lap1d}/>
          </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
});
