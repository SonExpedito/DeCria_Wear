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
import { useCategorias } from "./destaque/categorias";
import { InputBusca } from "../../components/Search";
import { SliderProduct } from "./sliders";
import "@/locales/i18n";
import { useTranslation } from "react-i18next";

export function ExplorerPage() {
  const [termo, setTermo] = useState("");
  const { t, i18n } = useTranslation();
  const categorias = useCategorias();

  const irParaResultados = () => {
    if (termo.trim() !== "") {
      Keyboard.dismiss();
      router.push({
        pathname: "/store/product" as const,
        params: { termo },
      });
    }
  };
  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      <InputBusca
        termo={termo}
        setTermo={setTermo}
        onSubmit={irParaResultados}
        placeholder={t("buscar")}
      />

      <View style={styles.topSearchsContainer}>
        {categorias.map((categoria, index) => (
          <TouchableOpacity
            style={styles.destaqueButton}
            key={index}
            onPress={() => router.navigate(`store/destaques/${categoria.nome}`)}
          >
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
