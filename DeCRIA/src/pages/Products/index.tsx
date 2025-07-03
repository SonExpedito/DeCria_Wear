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
import { useBuscaProdutos } from "../../components/Search/serachProducts";
import { InputBusca } from "../../components/Search";
import { styles } from "./styles";

export function ProductsPage() {
  const { termo: termoInicial } = useLocalSearchParams<{ termo: string }>();
  const [termoDigitado, setTermoDigitado] = useState(termoInicial || "");
  const [termoBusca, setTermoBusca] = useState(termoInicial || "");
  const { produtos, loading } = useBuscaProdutos(termoBusca);

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
    <View>
      <View style={styles.headerVoltar}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back-outline" size={30} color="black" />
          <Text style={styles.textoVoltar}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <InputBusca
        termo={termoDigitado}
        setTermo={setTermoDigitado}
        onSubmit={confirmarBusca}
      />

      <TouchableOpacity onPress={confirmarBusca} style={{ padding: 10 }}>
        <Text>Buscar</Text>
      </TouchableOpacity>

      {produtos.length === 0 && termoBusca.trim().length > 0 ? (
        <View style={styles.center}>
          <Text>Nenhum produto encontrado para "{termoBusca}"</Text>
        </View>
      ) : (
        <>
          <Text style={styles.h2}>Resultados da Busca:</Text>
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
                    pathname: `/store/product/${item.id}`,
                    params: {
                      nome: item.nome,
                      preco: item.preco,
                      imagemUrl: item.imagemUrl,
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
                  R${" "}
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
