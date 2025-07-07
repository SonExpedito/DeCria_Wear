import {
  ScrollView,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import { useCarrinho } from "./bagUtils";

export function BagPage() {
  const {
    carrinho,
    carregando,
    aumentarQuantidade,
    diminuirQuantidade,
    valorTotal,
  } = useCarrinho();

  if (carregando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (carrinho.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.vazio}>Seu carrinho está vazio.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 160 }}
      >
        {carrinho.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: item.imagemUrl }} style={styles.imagem} />

            <View style={styles.info}>
              <View style={styles.nomePreco}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.preco}>
                  R$ {(item.preco * item.quantidade).toFixed(2)}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 4,
                }}
              >
                <Text style={styles.detalhe}>Cor: </Text>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: item.cor,
                    borderWidth: 1,
                    borderColor: "#ccc",
                  }}
                />
              </View>

              <Text style={styles.detalhe}>Tamanho: {item.tamanho}</Text>

              <View style={styles.controleQuantidade}>
                <TouchableOpacity onPress={() => diminuirQuantidade(index)}>
                  {item.quantidade === 1 ? (
                    <Ionicons name="trash-outline" size={24} color="black" />
                  ) : (
                    <Ionicons
                      name="remove-circle-outline"
                      size={24}
                      color="#262626"
                    />
                  )}
                </TouchableOpacity>

                <Text style={styles.quantidade}>{item.quantidade}</Text>

                <TouchableOpacity onPress={() => aumentarQuantidade(index)}>
                  <Ionicons
                    name="add-circle-outline"
                    size={24}
                    color="#262626"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.resumoContainer}>
        <Text style={styles.resumoTitulo}>Resumo</Text>
        <View style={styles.resumoLinha}>
          <Text style={styles.resumoTexto}>Total:</Text>
          <Text style={styles.resumoValor}>R$ {valorTotal.toFixed(2)}</Text>
        </View>
        <View style={styles.resumoLinha}>
          <Text style={styles.resumoTexto}>Frete:</Text>
          <Text style={styles.resumoValor}>A calcular</Text>
        </View>

        <TouchableOpacity
          style={styles.botaoComprar}
          onPress={() =>
            Alert.alert("Compra", "Finalizar compra não implementado")
          }
        >
          <Text style={styles.botaoTexto}>Comprar</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 100 }} />
    </View>
  );
}
