import { Button } from "@/components/Button";
import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import "@/locales/i18n";
import { useTranslation } from 'react-i18next';

import { universal } from "@/assets/Style/Universal";
import { styles } from "./styles";

import logo from "@/assets/images/Content/Logo.png";
import Banner from "@/assets/images/Content/Splash.png";

export function SplashScreen() {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  function handleNext() {
    router.replace("/store/home");
  }
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          style={{ height: "95%" }}
          source={Banner}
          accessibilityLabel="Banner"
          resizeMode="contain"
        />
      </View>

      <View style={styles.lastContainer}>
        <Text style={universal.titulo}>{t('titulo')}</Text>
        <Button
          texto={t("acessar")}
          textColor={0}
          style={styles.button}
          onPress={handleNext}
        />
      </View>

      <Image style={styles.logo} source={logo} accessibilityLabel="Logo" />
    </View>
  );
}
