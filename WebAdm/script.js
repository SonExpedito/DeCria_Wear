import { db } from './firebase.js';
import { collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
  const addCard = document.getElementById('addCard');
  const modalOverlay = document.getElementById('modalOverlay');
  const productNameInput = document.getElementById('productName');
  const fileInput = document.getElementById('productImage');
  const triggerImageBtn = document.getElementById('triggerImageBtn');
  const fileInput2 = document.getElementById('productImage2');
  const triggerImageBtn2 = document.getElementById('triggerImageBtn2');
  const fileInput3 = document.getElementById('productImage3');
  const triggerImageBtn3 = document.getElementById('triggerImageBtn3');
  const descriptionInput = document.getElementById('productDescription');
  const priceInput = document.getElementById('productPrice');
  const closeModalBtn = document.getElementById('closeModal');
  const form = document.getElementById('addProductForm');
  const cardsContainer = document.querySelector('.cards');

  // Abrir modal
  addCard.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    productNameInput.value = '';
    fileInput.value = '';
    fileInput2.value = '';
    fileInput3.value = '';
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

  // Botões para abrir seletor de imagem
  triggerImageBtn.addEventListener('click', () => fileInput.click());
  triggerImageBtn2.addEventListener('click', () => fileInput2.click());
  triggerImageBtn3.addEventListener('click', () => fileInput3.click());

  // Pré-visualização da imagem principal
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const preview = document.getElementById('imagePreview');
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    } else {
      preview.style.display = 'none';
      preview.src = '';
    }
  });

  // Pré-visualização da imagem 2
  fileInput2.addEventListener('change', () => {
    const file = fileInput2.files[0];
    const preview = document.getElementById('imagePreview2');
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    } else {
      preview.style.display = 'none';
      preview.src = '';
    }
  });

  // Pré-visualização da imagem 3
  fileInput3.addEventListener('change', () => {
    const file = fileInput3.files[0];
    const preview = document.getElementById('imagePreview3');
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    } else {
      preview.style.display = 'none';
      preview.src = '';
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
    return name.replace(/\s+/g, '_'); // substitui espaços por underline
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let nome = productNameInput.value.trim();
    const imageFile = fileInput.files[0];
    const imageFile2 = fileInput2.files[0];
    const imageFile3 = fileInput3.files[0];
    const description = descriptionInput.value.trim();
    const price = parseFloat(priceInput.value);

    if (!nome) {
      alert("Digite o nome do produto");
      return;
    }
    if (!imageFile) {
      alert("Selecione pelo menos a imagem principal");
      return;
    }
    if (!description || isNaN(price)) {
      alert("Preencha a descrição e o preço corretamente.");
      return;
    }

    nome = sanitizeProductName(nome);

    try {
      async function uploadImage(file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'products');

        const res = await fetch('https://api.cloudinary.com/v1_1/deCria/image/upload', {
          method: 'POST',
          body: formData
        });

        if (!res.ok) throw new Error("Erro no upload da imagem");
        const data = await res.json();
        return data.secure_url;
      }

      const imageUrl = await uploadImage(imageFile);
      const imageUrl2 = imageFile2 ? await uploadImage(imageFile2) : '';
      const imageUrl3 = imageFile3 ? await uploadImage(imageFile3) : '';

      await addDoc(collection(db, "produtos"), {
        nome,
        imagemUrl: imageUrl,
        imagemUrl2: imageUrl2,
        imagemUrl3: imageUrl3,
        descricao: description,
        preco: price,
        criadoEm: new Date()
      });

      alert("Produto salvo com sucesso!");
      modalOverlay.classList.remove('active');

      await loadProducts(); // atualiza lista

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
      fileInput2.value = '';
      fileInput3.value = '';
      hidePreview();
    });

    // Adiciona produtos do banco
    const querySnapshot = await getDocs(collection(db, 'produtos'));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const card = document.createElement('div');
      card.className = 'card';
      card.style.position = 'relative'; // para posicionar o ícone
      card.innerHTML = `
        <img src="${data.imagemUrl}" alt="${data.nome}" />
        <p>${data.nome}</p>
        <span class="delete-icon" title="Excluir produto" role="button" tabindex="0">🗑️</span>
      `;

      // Apagar produto ao clicar no ícone
      const deleteIcon = card.querySelector('.delete-icon');
      deleteIcon.style.position = 'absolute';
      deleteIcon.style.top = '10px';
      deleteIcon.style.right = '10px';
      deleteIcon.style.cursor = 'pointer';
      deleteIcon.style.fontSize = '20px';
      deleteIcon.style.userSelect = 'none';
      deleteIcon.style.color = '#ff4d4d';
      deleteIcon.style.transition = 'color 0.3s ease';

      deleteIcon.addEventListener('mouseenter', () => {
        deleteIcon.style.color = '#e60000';
      });
      deleteIcon.addEventListener('mouseleave', () => {
        deleteIcon.style.color = '#ff4d4d';
      });

      deleteIcon.addEventListener('click', async (e) => {
        e.stopPropagation(); // evita o clique abrir a página do produto
        if (confirm(`Deseja excluir o produto "${data.nome}"?`)) {
          try {
            await deleteDoc(doc(db, 'produtos', doc.id));
            alert('Produto excluído com sucesso!');
            await loadProducts();
          } catch (error) {
            console.error('Erro ao excluir produto:', error);
            alert('Erro ao excluir produto.');
          }
        }
      });

      // Clique no card abre página de detalhes
      card.addEventListener('click', () => {
        window.location.href = `../Criar/index.html?id=${doc.id}`;
      });

      cardsContainer.appendChild(card);
    });
  }
});
