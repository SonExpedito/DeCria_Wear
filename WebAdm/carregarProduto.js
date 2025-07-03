import { db } from './firebase.js';
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', async () => {
  function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  const productId = getProductIdFromURL();

  if (productId) {
    try {
      const docRef = doc(db, "produtos", productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const produto = docSnap.data();

        // Atualizar a imagem principal
        const img = document.getElementById('selected-image');
        if (img && produto.imagemUrl) {
          img.src = produto.imagemUrl;
        }

        // Atualizar o campo Nome
        const nomeInput = document.querySelector('input[placeholder="Nome"]');
        if (nomeInput) {
          nomeInput.value = produto.nome.replace(/_/g, ' ');
        }

      } else {
        console.error("Produto não encontrado no Firestore.");
      }
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  } else {
    console.warn("Nenhum ID de produto na URL.");
  }
});
