import * as React from "react";
import { Image, ImageBackground, StyleSheet, Text, View} from "react-native";

import ButtonCustom from '../custom/button';

export default function Home({ navigation }){
    return (
      <View style={styles.main}>
        <ButtonCustom text='Lap1a' onPress={() =>
        navigation.navigate('Lap1a')
      }/>
      <ButtonCustom text='Lap1b' onPress={() =>
        navigation.navigate('Lap1b')
      }/>
      <ButtonCustom text='Lap1c' onPress={() =>
        navigation.navigate('Lap1c')
      }/>
      <ButtonCustom text='Lap1d' onPress={() =>
        navigation.navigate('Lap1d')
      }/>
    </View>
    );
  };

  const styles = StyleSheet.create({
    main: {
      marginTop:40,
      flex: 1,
      flexDirection:"row",
      justifyContent:"space-evenly",
      flexWrap:"wrap",
      alignContent:"space-around",
    },
  });