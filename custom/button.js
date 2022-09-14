import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
export default function ButtonCustom({ text, onPress, source }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        justifyContent:"center",
        flexDirection: "row",
        width: 130,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#E3C000',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center",
    },

})