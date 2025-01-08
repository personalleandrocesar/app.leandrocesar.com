<script setup>
import { ref } from 'vue';

const userId = ref(''); // ID do usuário
const athleteId = ref(''); // ID do atleta
const error = ref(null); // Para capturar erros

async function submitDelete() {
  error.value = null;

  if (!userId.value || !athleteId.value) {
    error.value = 'Por favor, forneça IDs válidos para o usuário e o atleta.';
    return;
  }

  try {
    const response = await fetch(`https://api.leandrocesar.com/usersnw/${userId.value}/team/${athleteId.value}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const data = await response.json();
      error.value = data.message || 'Erro ao tentar deletar o atleta.';
      return;
    }

    alert('Atleta removido com sucesso.');
  } catch (err) {
    error.value = 'Erro ao conectar ao servidor.';
    console.error(err);
  }
}
</script>

<template>
  <div>
    <label>
      ID do Usuário:
      <input v-model="userId" placeholder="Digite o ID do usuário" />
    </label>
    <br />
    <label>
      ID do Atleta:
      <input v-model="athleteId" placeholder="Digite o ID do atleta" />
    </label>
    <br />
    <button @click="submitDelete">Deletar Atleta</button>
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>
