import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { usuarios } from "./perfiluser";
import { style } from "./styles";
import { router } from "expo-router";
import "@/locales/i18n";
import { useTranslation } from "react-i18next";

export function UserPage() {
  const { t, i18n } = useTranslation();

  // Usuário fixo durante a tela
  const [user] = useState(() => {
    const randomIndex = Math.floor(Math.random() * usuarios.length);
    return usuarios[randomIndex];
  });

  const secoes = [
    { tituloKey: "secoes.configuracoes" },
    { tituloKey: "secoes.portal" },
    { tituloKey: "secoes.avaliarApp" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  function beneficios() {
    router.navigate("/store/benefits");
  }

  function Indisponivel() {
    Alert.alert(
      "Indisponível",
      "Esta funcionalidade ainda não está implementada.",
      [{ text: "OK" }]
    );
  }

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image style={style.imagePic} source={user.image} />
        <Text style={style.textPic}>
          {t("textPic")} {user.nome}!
        </Text>
      </View>

      <View style={style.quickInfoContainer}>
        <TouchableOpacity
          style={{ alignItems: "center", gap: 6 }}
          onPress={toggleLanguage} // 🔹 aqui
        >
          <Icon size={26} name="globe-outline" color="#1c1c1c" />
          <Text style={{ color: "#1c1c1c", fontSize: 14 }}>
            {i18n.language === "pt" ? "English" : "Português"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", gap: 6 }}
          onPress={beneficios}
        >
          <Icon size={26} name="sparkles-outline" color="#1c1c1c" />
          <Text style={{ color: "#1c1c1c", fontSize: 14 }}>
            {t("subText4")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", gap: 6 }}
          onPress={Indisponivel}
        >
          <Icon size={26} name="file-tray-full-outline" color="#1c1c1c" />
          <Text style={{ color: "#1c1c1c", fontSize: 14 }}>
            {t("subText5")}
          </Text>
        </TouchableOpacity>
      </View>

      <>
        {secoes.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={style.item}
            onPress={Indisponivel}
          >
            <View style={{ flex: 1 }}>
              <Text style={style.titulo}>{t(item.tituloKey)}</Text>
            </View>
            <Icon name="chevron-forward" size={20} color="#000" />
          </TouchableOpacity>
        ))}
      </>
    </View>
  );
}
