import * as React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
export default function Lap1d({ navigation }) {
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../img/background3.png')} style={styles.container}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Home', { name: 'Home' })
                }>
                    <Image source={require('../img/back.png')} style={{ left: 160 }}></Image>
                </TouchableOpacity>

                <Text>REGISTER</Text>
                <TextInput></TextInput>
                <TextInput
                    label="Label"
                    variant="outlined"
                    trailing={props => (
                        <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
                    )}
                />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        marginTop: 30,
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

});