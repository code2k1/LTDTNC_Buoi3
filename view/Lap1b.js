import * as React from "react";
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import ButtonCustom from '../custom/button';

function callFunction() {
  console.log('1');
};

export default function Lap1b({ navigation }) {
  return (
    <View style={styles.main}>
      <ImageBackground source={require('../img/background2.png')} style={styles.container}>
        <TouchableOpacity onPress={() =>
            navigation.navigate('Home', { name: 'Home' })
          }>
          <Image source={require('../img/back.png')} style={{left:160}}></Image>
        </TouchableOpacity>


        <Image
          style={styles.tinyLogo}
          source={require('../img/lock.png')}
        />
        <Text style={styles.lable}>FORGET {"\n"} PASSWORD</Text>
        <Text style={styles.text}>Provide your account’s email for which you want to reset your password</Text>
        <View style={{flexDirection:"row",backgroundColor:'#C4C4C4', width:350,height:50, top:50}}>
        <Image
          style={{marginTop:4,}}
          source={require('../img/mail-29353651.png')}
        />
        <TextInput placeholder="Email" style={{fontSize:20,flex:1,}}  underlineColorAndroid="transparent"></TextInput>
        </View>
       



        <TouchableOpacity style={{marginTop:90}}>
            <View style={{backgroundColor:'#E3C000', width:350,height:50}}>
                <Text style={{fontWeight:"700",textAlign:"center", fontSize:23, textAlignVertical:"center",marginTop:5}}>Next</Text>
            </View>
        </TouchableOpacity>
    
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop:30,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  tinyLogo: {
    marginTop: 60,
  },
  lable: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
  },
  text: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
    width: 400,
  },
});