import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export type Produto = {
  id: string;
  nome: string;
  imagemUrl: string;
  imagemUrl2: string;
  imagemUrl3: string;
  preco?: number;
  descricao?: string;
  type: string;
  itemLink: string;
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
            imagemUrl2: data.imagemUrl2,
            imagemUrl3: data.imagemUrl3,
            descricao: data.descricao,
            type: data.type,
            itemLink: data.itemLink,
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
