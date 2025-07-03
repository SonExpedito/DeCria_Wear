import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export type Produto = {
  id: string;
  nome: string;
  imagemUrl: string;
  preco?: number;
  descricao?: string;
};

export function useBuscaProdutos(termo: string) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function buscarProdutos() {
      setLoading(true);
      try {
        const produtosRef = collection(db, "produtos");
        const querySnapshot = await getDocs(produtosRef);

        const lista: Produto[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          lista.push({
            id: doc.id,
            nome: data.nome,
            preco: data.preco,
            imagemUrl: data.imagemUrl,
          });
        });

        const termoFormatado = termo?.trim().toLowerCase() || "";

        const filtrados = lista.filter((produto) =>
          produto.nome?.toLowerCase().trim().startsWith(termoFormatado)
        );

        setProdutos(filtrados);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    if (termo && termo.trim().length >= 2) {
      buscarProdutos();
    } else {
      setProdutos([]);
      setLoading(false);
    }
  }, [termo]);

  return { produtos, loading };
}
