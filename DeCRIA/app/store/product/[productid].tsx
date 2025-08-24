import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import InfoProduct from "./produtoinfo";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import "@/locales/i18n";
import { useTranslation } from "react-i18next";

function ProductPageContainer() {
  const { productid } = useLocalSearchParams<{ productid: string }>();
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  const [produto, setProduto] = useState<{
    id: string;
    nome: string;
    preco: number;
    imagemUrl: string;
    imagemUrl2: string;
    imagemUrl3: string;
    descricao: string;
    type: string;
    itemLink: string;
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduto() {
      try {
        const docRef = doc(db, "produtos", productid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProduto({
            id: docSnap.id,
            nome: data.nome,
            preco: data.preco,
            imagemUrl: data.imagemUrl,
            imagemUrl2: data.imagemUrl2,
            imagemUrl3: data.imagemUrl3,
            descricao: data.descricao,
            type: data.type,
            itemLink: data.itemLink,
          });
        } else {
          console.log("Produto não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      } finally {
        setLoading(false);
      }
    }

    if (productid) {
      fetchProduto();
    }
  }, [productid]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!produto) {
    return (
      <View style={styles.loading}>
        <Text>{t("produtos")}</Text>
      </View>
    );
  }

  return <InfoProduct produto={produto} />;
}

const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});

// Set display name for better debugging
ProductPageContainer.displayName = "ProductPageContainer";

export default ProductPageContainer;
