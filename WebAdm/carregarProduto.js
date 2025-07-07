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

        // Imagem principal
        const imgPrincipal = document.getElementById('selected-image');
        if (imgPrincipal && produto.imagemUrl) {
          imgPrincipal.src = produto.imagemUrl;
        }

        // Container para imagens secundárias
        const containerSecundarias = document.getElementById('secondary-images');
        containerSecundarias.innerHTML = ''; // limpa antes

        if (produto.imagemUrl2) {
          const img2 = document.createElement('img');
          img2.src = produto.imagemUrl2;
          img2.alt = "Imagem secundária 1";
          img2.classList.add('secondary-img'); // adiciona a classe
          containerSecundarias.appendChild(img2);
        }

        if (produto.imagemUrl3) {
          const img3 = document.createElement('img');
          img3.src = produto.imagemUrl3;
          img3.alt = "Imagem secundária 2";
          img3.classList.add('secondary-img'); // adiciona a classe
          containerSecundarias.appendChild(img3);
        }


        // Nome do produto
        const nomeInput = document.querySelector('input[placeholder="Nome"]');
        if (nomeInput) {
          nomeInput.value = produto.nome.replace(/_/g, ' ');
        }

        // Descrição
        const descricaoTextarea = document.querySelector('textarea[placeholder="Descrição"]');
        if (descricaoTextarea && produto.descricao) {
          descricaoTextarea.value = produto.descricao;
        }

        // Preço
        const precoInput = document.querySelector('input[placeholder="Preço"]');
        if (precoInput && produto.preco !== undefined) {
          precoInput.value = produto.preco;
        }

        const tipoSelect = document.getElementById('productType');
        if (tipoSelect && produto.type) {
          tipoSelect.value = produto.type;
        }

        // Marca
        const marcaSelect = document.getElementById('productBrand');
        if (marcaSelect && produto.marca) {
          marcaSelect.value = produto.marca;
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
