import { db } from '../firebase.js';
import { doc, getDoc, setDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const nomeInput = document.querySelector('input[placeholder="Nome"]');
  const selectedImage = document.getElementById('selected-image');
  const cancelBtn = document.querySelector('.cancel-btn');

  function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  let productId = getProductIdFromURL();

  async function carregarProduto() {
    if (!productId) return;

    const docRef = doc(db, "produtos", productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const produto = docSnap.data();
      nomeInput.value = produto.nome.replace(/_/g, ' ');
      selectedImage.src = produto.imagemUrl;
      // atualize outros campos aqui se houver
    } else {
      alert('Produto não encontrado.');
    }
  }

  // Carrega dados ao abrir a página
  carregarProduto();

  // Evento do botão Cancelar — limpa e recarrega os dados originais
  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
    carregarProduto();
  });

  // Evento do form submit (botão Adicionar) — salva/atualiza produto
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let nome = nomeInput.value.trim();
    if (!nome) {
      alert("Digite o nome do produto");
      return;
    }

    const nomeSanitizado = nome.replace(/\s+/g, '_');
    const imagemUrl = selectedImage.src;

    try {
      if (productId) {
        // Atualizar produto existente
        const docRef = doc(db, "produtos", productId);
        await setDoc(docRef, {
          nome: nomeSanitizado,
          imagemUrl,
          atualizadoEm: new Date()
        }, { merge: true });

        alert("Produto atualizado com sucesso!");
      } else {
        // Criar novo produto
        const docRef = await addDoc(collection(db, "produtos"), {
          nome: nomeSanitizado,
          imagemUrl,
          criadoEm: new Date()
        });
        productId = docRef.id;
        alert("Produto criado com sucesso!");
        history.replaceState(null, "", `?id=${productId}`);
      }

      // Recarrega os dados para garantir consistência
      carregarProduto();

    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      alert("Erro ao salvar produto.");
    }
  });
});
