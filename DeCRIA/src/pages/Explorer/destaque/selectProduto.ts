import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";

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

export async function selectRandomProduct(): Promise<Produto | null> {
  try {
    const produtosSnapshot = await getDocs(collection(db, "produtos"));
    const produtos = produtosSnapshot.docs;

    if (produtos.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * produtos.length);
    const randomDoc = produtos[randomIndex];
    const data = randomDoc.data();

    return {
      id: randomDoc.id,
      nome: data.nome,
      preco: data.preco,
      imagemUrl: data.imagemUrl,
      imagemUrl2: data.imagemUrl2,
      imagemUrl3: data.imagemUrl3,
      descricao: data.descricao,
      type: data.type,
    };
  } catch (error) {
    console.error("Erro ao selecionar produto aleatório:", error);
    return null;
  }
}
