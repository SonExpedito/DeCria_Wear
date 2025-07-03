import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import { router } from "expo-router";
import React, { useState } from "react";
import { styles } from "./styles";
import { categorias } from "./destaque/categorias";
import { InputBusca } from "../../components/Search";
import { SliderProduct } from "./sliders";

export function ExplorerPage() {
  const [termo, setTermo] = useState("");

  const irParaResultados = () => {
    if (termo.trim() !== "") {
      Keyboard.dismiss();
      router.push({
        pathname: "/store/product",
        params: { termo },
      });
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      <InputBusca
        termo={termo}
        setTermo={setTermo}
        onSubmit={irParaResultados}
      />

      <View style={styles.topSearchsContainer}>
        {categorias.map((categoria, index) => (
          <TouchableOpacity style={styles.destaqueButton} key={index}>
            <Image
              source={categoria.imagem}
              style={styles.destaqueImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>

      <SliderProduct />
    </ScrollView>
  );
}
