import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import imageDN8 from "@/assets/images/Content/DN8.png";
import { Button } from "@/components/Button";
import "@/locales/i18n";
import { useTranslation } from "react-i18next";

export function Offerproduct() {
  const { t, i18n } = useTranslation();

  // Lista de produtos
  const produtos = {
    DN: {
      color: "#ff5581",
      tituloKey: "produto.DN.titulo",
      produtoId: "1",
      nome: "DN8",
      image: imageDN8,
    },
  } as const;

  // Seleção aleatória do produto
  const keys = Object.keys(produtos) as (keyof typeof produtos)[];
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const produto = produtos[randomKey];

  // Função para alternar idioma
  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <View style={styles.offerProductContainer}>
      <View style={styles.contentSide}>
        <Text style={styles.textProduct}>
          <Text style={{ color: produto.color }}>{produto.nome}</Text>{" "}
          {t(produto.tituloKey)}
        </Text>

        <Image
          style={{ width: "72%", height: 200, resizeMode: "contain" }}
          source={produto.image}
        />

        <Text style={styles.subText}>{t("subText3")}</Text>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            texto={t("botaoComprar")}
            textColor={1}
            style={{ backgroundColor: "#F5F5F5", width: "33%" }}
          />
        </View>

      </View>

      <View
        style={[
          { backgroundColor: produto.color, height: "5%", width: "100%" },
        ]}
      />
    </View>
  );
}
