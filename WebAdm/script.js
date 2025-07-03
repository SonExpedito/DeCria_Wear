import { db } from './firebase.js';
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
  const addCard = document.getElementById('addCard');
  const modalOverlay = document.getElementById('modalOverlay');
  const productNameInput = document.getElementById('productName');
  const fileInput = document.getElementById('productImage');
  const triggerImageBtn = document.getElementById('triggerImageBtn');
  const closeModalBtn = document.getElementById('closeModal');
  const form = document.getElementById('addProductForm');
  const cardsContainer = document.querySelector('.cards');

  // Abrir modal
  addCard.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    productNameInput.value = '';
    fileInput.value = '';
    hidePreview();
  });

  // Fechar modal
  closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });

  // Fechar modal ao clicar fora
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });

  // Abrir seletor de imagem
  triggerImageBtn.addEventListener('click', () => {
    fileInput.click();
  });

  // Pré-visualização da imagem
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        showPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      hidePreview();
    }
  });

  function showPreview(src) {
    let preview = document.getElementById('imagePreview');
    if (!preview) {
      preview = document.createElement('img');
      preview.id = 'imagePreview';
      preview.style.maxWidth = '100px';
      preview.style.marginTop = '10px';
      fileInput.parentElement.appendChild(preview);
    }
    preview.src = src;
    preview.style.display = 'block';
  }

  function hidePreview() {
    const preview = document.getElementById('imagePreview');
    if (preview) {
      preview.style.display = 'none';
      preview.src = '';
    }
  }

  // Submissão do formulário para salvar produto
  function sanitizeProductName(name) {
    return name.replace(/\s+/g, '_'); // substitui um ou mais espaços por underline
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let nome = productNameInput.value.trim();
    const imageFile = fileInput.files[0];

    if (!nome) {
      alert("Digite o nome do produto");
      return;
    }
    if (!imageFile) {
      alert("Selecione uma imagem");
      return;
    }

    // Sanitiza o nome antes de salvar
    nome = sanitizeProductName(nome);

    try {
      // Upload para Cloudinary
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('upload_preset', 'products');

      const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/deCria/image/upload';

      const res = await fetch(cloudinaryUrl, {
        method: 'POST',
        body: formData
      });

      if (!res.ok) throw new Error("Erro no upload da imagem");

      const data = await res.json();
      const imageUrl = data.secure_url;

      // Salvar no Firestore com nome sanitizado
      await addDoc(collection(db, "produtos"), {
        nome,
        imagemUrl: imageUrl,
        criadoEm: new Date()
      });

      alert("Produto salvo com sucesso!");
      modalOverlay.classList.remove('active');

      await loadProducts(); // atualiza a lista logo após salvar

    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao salvar produto.");
    }
  });

  // Carrega os produtos ao iniciar a página
  loadProducts();

  // Função para carregar produtos
  async function loadProducts() {
    cardsContainer.innerHTML = ''; // limpa tudo

    // Recria o botão de adicionar
    const addCard = document.createElement('div');
    addCard.className = 'card add';
    addCard.id = 'addCard';
    addCard.innerHTML = `<span>+</span><p>Adicione</p>`;
    cardsContainer.appendChild(addCard);

    addCard.addEventListener('click', () => {
      modalOverlay.classList.add('active');
      productNameInput.value = '';
      fileInput.value = '';
      hidePreview();
    });

    // Agora adiciona os produtos do banco
    const querySnapshot = await getDocs(collection(db, 'produtos'));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
      <img src="${data.imagemUrl}" alt="${data.nome}" />
      <p>${data.nome}</p>
    `;

  // Ao clicar no card, enviar o ID do produto na URL
  card.addEventListener('click', () => {
    window.location.href = `../Criar/index.html?id=${doc.id}`;
  });

      cardsContainer.appendChild(card);
    });
  }

});
