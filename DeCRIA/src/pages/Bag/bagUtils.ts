// bagUtils.ts
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export type CarrinhoItem = {
  id: string;
  nome: string;
  preco: number;
  imagemUrl: string;
  cor: string;
  tamanho: number;
  quantidade: number;
};

export function useCarrinho() {
  const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarCarrinho();
  }, []);

  async function carregarCarrinho() {
    try {
      const carrinhoJSON = await AsyncStorage.getItem("carrinho");
      const carrinhoSalvo: CarrinhoItem[] = carrinhoJSON
        ? JSON.parse(carrinhoJSON)
        : [];
      const carrinhoComQuantidade = carrinhoSalvo.map((item) => ({
        ...item,
        quantidade: item.quantidade ?? 1,
      }));
      setCarrinho(carrinhoComQuantidade);
    } catch (error) {
      console.log("Erro ao carregar carrinho:", error);
    } finally {
      setCarregando(false);
    }
  }

  async function salvarCarrinho(novoCarrinho: CarrinhoItem[]) {
    setCarrinho(novoCarrinho);
    await AsyncStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  }

  function aumentarQuantidade(index: number) {
    const novoCarrinho = [...carrinho];
    novoCarrinho[index].quantidade += 1;
    salvarCarrinho(novoCarrinho);
  }

  function diminuirQuantidade(index: number) {
    const item = carrinho[index];
    if (item.quantidade === 1) {
      Alert.alert(
        "Remover produto",
        "Deseja remover este produto do carrinho?",
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Remover",
            style: "destructive",
            onPress: () => {
              const novoCarrinho = [...carrinho];
              novoCarrinho.splice(index, 1);
              salvarCarrinho(novoCarrinho);
            },
          },
        ]
      );
    } else {
      const novoCarrinho = [...carrinho];
      novoCarrinho[index].quantidade -= 1;
      salvarCarrinho(novoCarrinho);
    }
  }

  const valorTotal = carrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  return {
    carrinho,
    carregando,
    aumentarQuantidade,
    diminuirQuantidade,
    valorTotal,
  };
}
