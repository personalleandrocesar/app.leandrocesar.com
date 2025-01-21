<script setup>
import { ref } from 'vue';

// Estados
const file = ref(null); // Arquivo selecionado
const previewImage = ref(null); // Pré-visualização da imagem
const uploadedImageUrl = ref(null); // URL da imagem carregada
const loading = ref(false); // Estado de carregamento
const username = ref('joaocesar'); // Nome de usuário (substitua conforme necessário)

// Manipula a seleção de arquivo
const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    file.value = selectedFile;
    previewImage.value = URL.createObjectURL(selectedFile); // Gera uma pré-visualização
  }
};

// Faz o upload da imagem para o servidor
const uploadImage = async () => {
  if (!file.value) {
    alert('Por favor, selecione um arquivo.');
    return;
  }

  const formData = new FormData();
  formData.append('image', file.value);
  formData.append('username', username.value); // Envia o nome de usuário

  try {
    loading.value = true;

    const response = await fetch('https://api.leandrocesar.com/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Upload realizado com sucesso!');
      fetchImage(); // Atualiza a URL da imagem carregada
    } else {
      const errorData = await response.json();
      alert(`Erro no upload: ${errorData.error}`);
    }
  } catch (error) {
    console.error('Erro ao fazer o upload:', error);
    alert('Erro ao conectar ao servidor.');
  } finally {
    loading.value = false;
  }
};

// Busca a imagem mais recente do servidor
const fetchImage = async () => {
  try {
    const response = await fetch(`http://localhost:3000/uploads/${username.value}`);
    if (response.ok) {
      uploadedImageUrl.value = `http://localhost:3000/uploads/${username.value}`;
    } else {
      uploadedImageUrl.value = null;
      console.warn('Imagem não encontrada.');
    }
  } catch (error) {
    console.error('Erro ao buscar a imagem:', error);
  }
};

// Busca a imagem inicial ao montar o componente
fetchImage();
</script>

<template>
  <div>
    <h1>Upload de Imagem</h1>

    <!-- Formulário de Upload -->
    <form @submit.prevent="uploadImage">
      <input type="file" @change="handleFileChange" accept="image/*" />
      <button type="submit" :disabled="loading">
        {{ loading ? 'Carregando...' : 'Fazer Upload' }}
      </button>
    </form>

    <!-- Pré-visualização da Imagem -->
    <div v-if="previewImage" class="preview">
      <h2>Pré-visualização</h2>
      <img :src="previewImage" alt="Pré-visualização" />
    </div>

    <!-- Imagem Carregada -->
    <div v-if="uploadedImageUrl" class="uploaded-image">
      <h2>Imagem Carregada</h2>
      <img :src="uploadedImageUrl" alt="Imagem Carregada" />
    </div>

    <!-- Mensagem de Imagem não Encontrada -->
    <div v-else>
      <p>Nenhuma imagem carregada para o usuário: {{ username }}</p>
    </div>
  </div>
</template>

<style scoped>
.preview, .uploaded-image {
  margin-top: 20px;
}
img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 5px;
}
</style>
