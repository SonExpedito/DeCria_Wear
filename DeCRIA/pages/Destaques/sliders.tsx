import Slider from "@/components/Slider";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import "@/locales/i18n";
import { useTranslation } from "react-i18next";

import { marcas } from "@/assets/images/marcas/marcas";
import EsportivoImg from "@/assets/images/conjuntos/Esportivo.png";
import SportsImg from "@/assets/images/conjuntos/Sports.png";
import InvernalImg from "@/assets/images/conjuntos/Invernal.png";
import WinterImg from "@/assets/images/conjuntos/Winter.png";
import FemininoImg from "@/assets/images/conjuntos/Feminino.png";
import FeminineImg from "@/assets/images/conjuntos/Feminine.png";
import EvomImg from "@/assets/images/conjuntos/EVOM.png";

const marcaSlider = [
  { id: 1, nome: "nike", rota: "/store/marcas", image: marcas.nike },
  { id: 2, nome: "adidas", rota: "/store/marcas", image: marcas.adidas },
  { id: 3, nome: "jordan", rota: "/store/marcas", image: marcas.jordan },
  { id: 4, nome: "puma", rota: "/store/marcas", image: marcas.puma },
];

export function SliderProduct() {
  const { t, i18n } = useTranslation();

  const conjuntoSlider = [
    {
      id: 1,
      nomeKey: "conjuntosSlider.esportivo",
      rota: "/store/conjuntos",
      image: i18n.language === "pt" ? EsportivoImg : SportsImg,
    },
    {
      id: 2,
      nomeKey: "conjuntosSlider.feminino",
      rota: "/store/conjuntos",
      image: i18n.language === "pt" ? FemininoImg : FeminineImg,
    },
    {
      id: 3,
      nomeKey: "conjuntosSlider.evom",
      rota: "/store/conjuntos",
      image: EvomImg,
    },
    {
      id: 4,
      nomeKey: "conjuntosSlider.brisainvernal",
      rota: "/store/conjuntos",
      image: i18n.language === "pt" ? InvernalImg : WinterImg,
    },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };
  return (
    <View style={{ width: "100%", gap: 20, paddingTop: 20 }}>
      <View style={styles.sliderContainer}>
        <View style={{ width: "100%", paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={styles.sliderText}>{t("sliderText")}</Text>
        </View>
        <Slider data={conjuntoSlider} styleInt={2} />
      </View>

      <View style={[styles.sliderContainer, { paddingBottom: 80 }]}>
        <View style={{ width: "100%", paddingLeft: 20 }}>
          <Text style={styles.sliderText}>{t("sliderText2")}</Text>
        </View>
        <Slider data={marcaSlider} styleInt={1} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  sliderText: {
    fontSize: 24,
    color: "#1c1c1c",
    fontWeight: "bold",
  },
});
