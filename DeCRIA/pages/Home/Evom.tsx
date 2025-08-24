import React from "react";
import { router } from "expo-router";
import { Text, View, Image } from "react-native";
import { styles } from "./style";
import { Button } from "@/components/Button";
import evom from "@/assets/images/Content/Evom.png";
import "@/locales/i18n";
import { useTranslation } from "react-i18next";

export function Evom() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  function handleVeigh() {
    router.navigate("store/artistas/veigh");
  }

  return (
    <View style={styles.evomCard}>
      <Image
        source={evom}
        style={{
          width: "80%",
          height: 400,
          resizeMode: "contain",
          borderRadius: 40,
        }}
      />
      <Text style={styles.evomText}>{t('evomText')}</Text>
      <Text style={[styles.subText, { color: "#1c1c1c" }]}>
        {t('subText')}
      </Text>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 12,
        }}
      >
        <Text style={[styles.subText, { color: "#1c1c1c" }]}>{t('subText2')}</Text>
        <Button
          texto="Veigh"
          textColor={2}
          style={{ backgroundColor: "#111827", width: "25%" }}
          onPress={handleVeigh}
        />
      </View>
    </View>
  );
}
