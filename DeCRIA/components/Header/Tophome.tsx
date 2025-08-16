import logo from "@/assets/images/Content/Logo.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from 'expo-router';
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export function Tophome() {
  return (
    <View style={style.home}>
      <Image
        style={{ height: '30%', resizeMode: 'contain' }}
        source={logo}
        accessibilityLabel="Logo"
      />
      <TouchableOpacity onPress={() => router.push('/store/explorer')}>
        <Ionicons name="search" size={24} color="#1c1c1c" />
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
    paddingRight: 20
  },
});
