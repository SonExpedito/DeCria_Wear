import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type InputBuscaProps = {
  termo: string;
  setTermo: (texto: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
};

export function InputBusca({
  termo,
  setTermo,
  placeholder = "Buscar",
  onSubmit,
}: InputBuscaProps) {
  return (
    <View style={styles.barraBuscaContainer}>
      <View style={styles.barraBusca}>
        <TextInput
          placeholder={placeholder}
          value={termo}
          onChangeText={setTermo}
          style={styles.input}
          placeholderTextColor="#666"
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="while-editing"
          returnKeyType="search"
          onSubmitEditing={onSubmit}
        />
        <Ionicons
          name="search"
          size={20}
          color="#666"
          style={styles.iconeBusca}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barraBuscaContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 15,
    alignSelf: "center",
  },
  barraBusca: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 60,
    elevation: 10,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,

    zIndex: 10,
    width: 360,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#262626",
    paddingVertical: 0,
  },
  iconeBusca: {
    marginLeft: 10,
  },
});
