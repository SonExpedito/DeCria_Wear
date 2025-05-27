import React from "react";
import { Text, TouchableOpacity } from "react-native";

export const Button = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-white rounded-[25px] py-4 px-12 justify-center items-center ${style}`}
    >
      <Text className="text-black font-bold text-center" style={{ fontSize: 20 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}