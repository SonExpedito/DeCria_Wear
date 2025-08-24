import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useBuscaProdutos } from "../../../components/Search/serachProducts";
import { InputBusca } from "../../../components/Search";
import { styles } from "@/pages/Products/styles";
import "@/locales/i18n";
import { useTranslation } from "react-i18next";

function ProductsPage() {
  const { termo: termoInicial } = useLocalSearchParams<{ termo: string }>();
  const [termoDigitado, setTermoDigitado] = useState(termoInicial || "");
  const [termoBusca, setTermoBusca] = useState(termoInicial || "");
  const { produtos, loading } = useBuscaProdutos(termoBusca);

  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  function confirmarBusca() {
    setTermoBusca(termoDigitado.trim());
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <InputBusca
        termo={termoDigitado}
        setTermo={setTermoDigitado}
        onSubmit={confirmarBusca}
      />

      <TouchableOpacity
        onPress={confirmarBusca}
        style={{ padding: 10 }}
      ></TouchableOpacity>

      {produtos.length === 0 && termoBusca.trim().length > 0 ? (
        <View style={styles.center}>
          <Text>{t("produtos2")} "{termoBusca}"</Text>
        </View>
      ) : (
        <>
          <Text style={styles.h2}>{t("Busca")}</Text>
          <FlatList
            data={produtos}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingBottom: 100,
            }}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.produtoContainer}
                onPress={() =>
                  router.push({
                    pathname: "/store/product/[productid]",
                    params: {
                      productid: item.id,
                      nome: item.nome,
                      preco: item.preco,
                      imagemUrl: item.imagemUrl,
                      imagemUrl2: item.imagemUrl2,
                      imagemUrl3: item.imagemUrl3,
                      type: item.type,
                      itemLink: item.itemLink,
                    },
                  })
                }
              >
                <Ionicons
                  name="heart-outline"
                  size={20}
                  color="black"
                  style={styles.iconeCoracao}
                />
                <Image
                  source={{ uri: item.imagemUrl }}
                  style={styles.imagemProduto}
                  resizeMode="contain"
                />
                <Text style={styles.nomeMarca}>Nike</Text>
                <Text style={styles.nomeProduto}>{item.nome}</Text>
                <Text style={styles.preco}>
                  {t("preco")}
                  {typeof item.preco === "number"
                    ? item.preco.toFixed(2)
                    : "0.00"}
                </Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
}

// Set display name for better debugging
ProductsPage.displayName = "ProductsPage";

export default ProductsPage;
