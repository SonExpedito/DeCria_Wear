import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import logo from '#/assets/images/Content/Logo.png';
import Icon from 'react-native-vector-icons/Ionicons';


export function Tophome() {
    return (
        <View style={style.home}>
            <Image className="h-3/5" resizeMode="contain" source={logo} accessibilityLabel="Logo" />
            <Icon className="pr-4" name="search" size={24} color="#1c1c1" />
        </View>
    )
}

const style = StyleSheet.create({
    home: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }

})