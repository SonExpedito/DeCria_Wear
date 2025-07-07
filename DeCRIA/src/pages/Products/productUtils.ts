import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export type Produto = {
  id: string;
  nome: string;
  preco: number;
  imagemUrl: string;
  imagemUrl2: string;
  imagemUrl3: string;
  descricao: string;
  type: string;
};

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

export async function adicionarAoCarrinho(
  produto: Produto,
  corSelecionada: string | null,
  tamanhoSelecionado: number | null
): Promise<void> {
  if (!corSelecionada || !tamanhoSelecionado) {
    Alert.alert("Atenção", "Por favor, selecione uma cor e um tamanho.");
    return;
  }

  const itemCarrinho = {
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco,
    imagemUrl: produto.imagemUrl,
    cor: corSelecionada,
    tamanho: tamanhoSelecionado,
    type: produto.type,
  };

  try {
    const carrinhoJSON = await AsyncStorage.getItem("carrinho");
    const carrinho = carrinhoJSON ? JSON.parse(carrinhoJSON) : [];

    carrinho.push(itemCarrinho);
    await AsyncStorage.setItem("carrinho", JSON.stringify(carrinho));

    Alert.alert("Sucesso", "Produto adicionado ao carrinho!");
  } catch (error) {
    console.log("Erro ao adicionar ao carrinho:", error);
    Alert.alert("Erro", "Não foi possível adicionar ao carrinho.");
  }
}
