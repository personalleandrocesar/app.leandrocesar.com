<template>
  <form @submit.prevent="uploadImage">
    <input type="file" @change="handleFileChange" />
    <button type="submit">Upload</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
const file = ref(null);

const handleFileChange = (event) => {
  file.value = event.target.files[0];
};

const uploadImage = async () => {
  if (!file.value) return alert("Por favor, selecione um arquivo.");
  
  const formData = new FormData();
  formData.append('image', file.value);

  try {
    const response = await fetch('https://api.leandrocesar.com/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert("Upload realizado com sucesso!");
    } else {
      alert("Erro no upload.");
    }
  } catch (err) {
    console.error(err);
    alert("Erro ao conectar com o servidor.");
  }
};
</script>
