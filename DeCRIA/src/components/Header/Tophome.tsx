import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import logo from "#/assets/images/Content/Logo.png";
import Icon from "react-native-vector-icons/Ionicons";
import { router } from 'expo-router';

export function Tophome() {
  return (
    <View style={style.home}>
      <Image
        className="h-4/5"
        resizeMode="contain"
        source={logo}
        accessibilityLabel="Logo"
      />
      <TouchableOpacity onPress={() => router.push("/store/explorer")}>
        <Icon className="pr-4" name="search" size={24} color="#1c1c1" />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  home: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
