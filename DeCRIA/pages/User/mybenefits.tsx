import descontosIMG from "@/assets/images/benefits/desconto.png";
import referenIMG from "@/assets/images/benefits/referencias.png";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import "@/locales/i18n";
import { useTranslation } from "react-i18next";

export default function MyBenefits() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        paddingBottom: 70,
      }}
    >
      <TouchableOpacity
        style={[style.beneCard, { backgroundColor: "#4ade80" }]} /* green-400 */
        onPress={() => router.navigate("/store/destaques/ofertas")}
      >
        <View
          style={{
            height: "100%",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={style.beneTitle}>{t('baneTitle')}</Text>
          <Text style={style.beneText}>
            {t('baneText')}
          </Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "50%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            source={descontosIMG}
            style={{ height: "90%", resizeMode: "contain" }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[style.beneCard, { backgroundColor: "#f87171" }]} /* red-400 */
        onPress={() => router.navigate("/store/destaques/artistas")}
      >
        <View
          style={{
            height: "100%",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={style.beneTitle}>{t('baneTitle2')}</Text>
          <Text style={style.beneText}>
            {t('baneText2')}
          </Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "50%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            source={referenIMG}
            style={{ height: "90%", resizeMode: "contain" }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
