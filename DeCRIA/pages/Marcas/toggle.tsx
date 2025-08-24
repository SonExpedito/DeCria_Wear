import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import "@/locales/i18n";
import { useTranslation } from "react-i18next";

type Option = "PEÇAS" | "TÊNIS";

interface ToggleSwitchProps {
  onToggle?: (value: Option) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onToggle }) => {
  const [active, setActive] = useState<Option>("PEÇAS");

  const handleToggle = (option: Option) => {
    setActive(option);
    if (onToggle) onToggle(option);
  };

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.option, active === "PEÇAS" && styles.activeOption]}
        onPress={() => handleToggle("PEÇAS")}
      >
        <Text style={[styles.text, active === "PEÇAS" && styles.activeText]}>
          {t('Pecas')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, active === "TÊNIS" && styles.activeOption]}
        onPress={() => handleToggle("TÊNIS")}
      >
        <Text style={[styles.text, active === "TÊNIS" && styles.activeText]}>
          {t('Tenis')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#e5e5e5",
    borderRadius: 50,
    padding: 4,
    paddingVertical: 8,
    width: "70%",
    justifyContent: "space-between",
  },
  option: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 50,
  },
  activeOption: {
    backgroundColor: "#fff",
  },
  text: {
    color: "#777",
    fontWeight: "500",
  },
  activeText: {
    color: "#000",
    fontWeight: "700",
  },
});

export default ToggleSwitch;
