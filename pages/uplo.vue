<script setup>
import { ref } from 'vue';

const username = ref('');
const message = ref('');

const deleteFile = async () => {
  if (!username.value) {
    message.value = 'Digite o nome de usuário!';
    return;
  }

  try {
    const { data, error } = await useFetch('https://api.leandrocesar.com/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value }),
    });

    if (error.value) {
      message.value = 'Erro: ' + error.value.data;
    } else {
      message.value = data.value;
    }
  } catch (err) {
    message.value = 'Erro ao conectar com o servidor';
  }
};
</script>

<template>
  <div>
    <h2>Deletar Arquivo</h2>
    <input v-model="username" placeholder="Digite o username" />
    <button @click="deleteFile">Deletar</button>
    <p>{{ message }}</p>
  </div>
</template>
