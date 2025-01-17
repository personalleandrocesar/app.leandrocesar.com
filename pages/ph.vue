<template>
  <div>
    <div>
      <div v-for="(image, username) in images" :key="username" class="team-member">
        <h3>{{ username }}</h3>
        <img :src="image" :alt="`Imagem mais recente de ${username}`" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Definindo os formatos de imagem possíveis
const formatss = ['jpeg', 'jpg', 'png', 'webp']; 

// Variável reativa para armazenar as imagens mais recentes de cada usuário
const images = ref({});

// Variável para controlar o estado de carregamento
const loading = ref(true);

// Função para verificar se a imagem existe e retornar a data de modificação
const imageExistsss = async (src) => {
  try {
    const response = await fetch(src, { method: "HEAD" });
    if (response.ok) {
      const lastModified = response.headers.get('Last-Modified');
      return lastModified;
    }
    return null;
  } catch (error) {
    return null;
  }
};

// Função que percorre os formatos e retorna a imagem mais recente
const getImageSrcc = async (username) => {
  let mostRecentImage = '';
  let mostRecentDate = null;

  for (const formato of formatss) {
    const src = `https://api.leandrocesar.com/uploads/${username}.${formato}`;
    const lastModified = await imageExistsss(src);

    if (lastModified) {
      const imageDate = new Date(lastModified);
      if (!mostRecentDate || imageDate > mostRecentDate) {
        mostRecentDate = imageDate;
        mostRecentImage = src;
      }
    }
  }

  return mostRecentImage;
};

// Função principal para carregar os dados dos usuários e buscar as imagens
const loadTeamImages = async () => {
  try {
    const { data } = await useFetch('https://api.leandrocesar.com/usersnw/6784f3e80c23ff230251716a/team');
    
    // Verifique o formato dos dados que você está recebendo
    console.log('Dados recebidos:', data.value);

    // Verifica se os dados são um array válido
    const itemmm = Array.isArray(data.value) ? data.value : [];

    if (itemmm.length === 0) {
      console.error('Nenhum usuário encontrado ou dados mal formatados.');
      loading.value = false;
      return;
    }

    // Para cada usuário, busca a imagem mais recente
    const userImages = {};
    for (const user of itemmm) {
      const username = user.username; // Supondo que 'username' seja uma propriedade de cada membro
      const recentImage = await getImageSrcc(username);
      userImages[username] = recentImage;  // Armazena a imagem mais recente para cada usuário
    }

    // Atualiza a variável reativa 'images' com as imagens mais recentes
    images.value = userImages;
    loading.value = false;  // Define o estado de carregamento como falso quando as imagens estiverem carregadas
  } catch (error) {
    console.error('Erro ao carregar os dados do time:', error);
    loading.value = false;
  }
};

// Chama a função de carregamento assim que o componente for criado
loadTeamImages();
</script>

<style scoped>
/* Estilos para o componente */
img {
  width: 150px;
  height: auto;
  border-radius: 8px;
  margin: 10px;
}
.team-member {
  display: inline-block;
  margin-right: 20px;
  text-align: center;
}
</style>
