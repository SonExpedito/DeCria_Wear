import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Linking } from "react-native";

export type Produto = {
  id: string;
  nome: string;
  preco: number;
  imagemUrl: string;
  imagemUrl2: string;
  imagemUrl3: string;
  descricao: string;
  type: string;
  itemLink: string;
};

export async function comprarLink(produto: Produto): Promise<boolean> {
  try {
    if (!produto.itemLink) {
      Alert.alert("Indisponível", "Link de compra não encontrado.");
      return false;
    }

    const canOpen = await Linking.canOpenURL(produto.itemLink);
    if (!canOpen) {
      Alert.alert("Erro", "Não foi possível abrir o link.");
      return false;
    }

    await Linking.openURL(produto.itemLink);
    return true;
  } catch {
    Alert.alert("Erro", "Ocorreu um problema ao tentar abrir o link.");
    return false;
  }
}

export async function checkFavorito(produto: Produto): Promise<boolean> {
  const favoritosJSON = await AsyncStorage.getItem("favoritos");
  const favoritos: Produto[] = favoritosJSON ? JSON.parse(favoritosJSON) : [];
  return favoritos.some((item) => item.nome === produto.nome);
}

export async function toggleFavorito(
  produto: Produto,
  isFavorito: boolean
): Promise<boolean> {
  const favoritosJSON = await AsyncStorage.getItem("favoritos");
  let favoritos: Produto[] = favoritosJSON ? JSON.parse(favoritosJSON) : [];

  if (isFavorito) {
    favoritos = favoritos.filter((item) => item.nome !== produto.nome);
  } else {
    favoritos.push(produto);
  }

  await AsyncStorage.setItem("favoritos", JSON.stringify(favoritos));
  return !isFavorito;
}
