import * as React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "@react-native-material/core";

export default function Lap1c({ navigation }) {
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() =>
                navigation.navigate('Home', { name: 'Home' })
            }>
                <Image source={require('../img/back.png')}></Image>
            </TouchableOpacity>

            <View style={{ backgroundColor: '#FFFFFF', width: '100%', height: '85%', marginTop: '35%' }}>
                <ImageBackground source={require('../img/Rectangle25.png')} style={styles.footer}>
                </ImageBackground>
            </View>

            <View style={styles.center}>
                <Image source={require('../img/donaltrum1.png')} style={{ position: "absolute", top: -60 }}></Image>
                <View style={styles.centerText}>
                    <Text style={{ fontWeight: "bold", fontSize: 21 }}>DONAL TRUMP</Text>
                    <Text style={{ fontSize: 16, padding: 10 }}>Full Stack developer, Android UI</Text>
                    <Text style={{ textAlign: "center" }}>
                        Donald Trump is closely associated with {"\n"} the sport of golf. As a real estate {"\n"} developer, Trump began acquiring and {"\n"}constructing golf courses in 1999
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: "700", padding: 10 }}>New York, USA</Text>
                </View>
            </View>

            <View style={{ flex: 1, position: "absolute", marginTop: 450, width: '100%' }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>9.8</Text>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>178</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>rating</Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>projects</Text>
                </View>

                <View style={{flexDirection:"row", width:'100%', justifyContent:"space-around", marginTop:20}}>
                    <TouchableOpacity>
                        <View style={{ borderColor: '#580FCE', borderStyle: "solid", borderWidth: 2, width: 120, height: 50, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: '#E710D1', fontSize: 20, fontWeight: "500" }}>PORTFOLIO</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderColor: '#580FCE', borderStyle: "solid", borderWidth: 2, width: 120, height: 50, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: '#06896A', fontSize: 20, fontWeight: "500" }}>HIRE ME</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        marginTop: 30,
        flex: 1,
        backgroundColor: '#51AC54',
        alignItems: "center",
    },
    center: {
        position: "absolute",
        fontSize: 18,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FFFFFF',
        width: '80%',
        height: 250,
        marginTop: 100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderStyle: "solid",
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 0,
        elevation: 10,
    },
    centerText: {
        justifyContent: "center",
        alignItems: "center",
        top: 30,
    },
    footer: {
        width: '100%',
        height: '100%',
    }

});