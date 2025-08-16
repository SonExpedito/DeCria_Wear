import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  imagemUrl: string;
  imagemUrl2?: string;
  imagemUrl3?: string;
  descricao?: string;
};

export function FavoritesPage() {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  useEffect(() => {
    async function loadFavoritos() {
      const favoritosJSON = await AsyncStorage.getItem("favoritos");
      const favs = favoritosJSON ? JSON.parse(favoritosJSON) : [];
      setFavoritos(favs);
    }
    loadFavoritos();
  }, []);

  const removerFavorito = async (id: string) => {
    const novosFavoritos = favoritos.filter((item) => item.id !== id);
    setFavoritos(novosFavoritos);
    await AsyncStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  };

  return (
    <ScrollView style={styles.container}>
      {favoritos.length === 0 ? (
        <Text style={styles.msgVazio}>
          Você ainda não favoritou nenhum produto.
        </Text>
      ) : (
        <View style={styles.grid}>
          {favoritos.map((item, index) => (
            <View key={index} style={styles.cardContainer}>
              <TouchableOpacity
                style={styles.heartButton}
                onPress={() => removerFavorito(item.id)}
              >
                <AntDesign name="heart" size={20} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => router.push(`/store/product/${item.id}`)}
              >
                <Image source={{ uri: item.imagemUrl }} style={styles.imagem} />
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}
