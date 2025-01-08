<template>
  <div class="search-bar-container">
    <!-- Barra de pesquisa -->
    <div class="search-bar mar">
      <Icon name="heroicons-outline:search" />
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Pesquisar usuários"
        @input="updateSearchQuery"
        @keydown.down.prevent="navigateDropdown(1)"
        @keydown.up.prevent="navigateDropdown(-1)"
        @keydown.enter.prevent="confirmSelection"
        class="search-input"
      />
      <!-- Lista suspensa de resultados -->
      <ul v-if="filteredUsserss.length > 0 && searchQuery && searchQuery !== selectedUserName" class="dropdown-list">
        <li
          v-for="(user, index) in filteredUsserss"
          :key="user._id"
          :class="['dropdown-item', { 'active': index === highlightedIndex }]"
          @click="selectUser(user)"
        >
          <img :src="user.img" alt="Avatar" class="user-avatar" />
          <div class="user-info">
            <span class="user-name">{{ user.name }}</span>
            <span class="user-username">{{ user.username }}</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- Lista de usuários selecionados -->
    <div v-if="selectedEx.length > 0" class="selected-users">
      <h3>Usuários Selecionados:</h3>
      <ul>
        <li v-for="user in selectedEx" :key="user._id" class="selected-user-item">
          <img :src="user.img" alt="Avatar" class="user-avatar" />
          <div class="user-info">
            <span class="user-name">{{ user.name }}</span>
            <span class="user-username">{{ user.username }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Dados e estado
const searchQuery = ref('');
const Usserss = await useFetch(`https://api.leandrocesar.com/exercises`);
const users = Usserss.data;

const selectedEx = ref([]); // Lista de usuários selecionados
const selectedUserName = ref(''); // Nome do usuário selecionado para controlar o dropdown
const highlightedIndex = ref(-1); // Índice destacado no dropdown

// Computed para filtrar usuários
const filteredUsserss = computed(() => {
  if (!searchQuery.value) return [];
  return users.value.filter(user =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.grupo.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Métodos
const updateSearchQuery = () => {
  highlightedIndex.value = -1; // Reinicia o índice destacado
};

const navigateDropdown = (direction) => {
  if (filteredUsserss.value.length === 0) return;

  // Calcula o próximo índice destacado
  highlightedIndex.value = (highlightedIndex.value + direction + filteredUsserss.value.length) % filteredUsserss.value.length;
};

const confirmSelection = () => {
  if (highlightedIndex.value >= 0 && highlightedIndex.value < filteredUsserss.value.length) {
    selectUser(filteredUsserss.value[highlightedIndex.value]);
  }
};

const selectUser = (user) => {
  // Verifica se o usuário já foi adicionado para evitar duplicatas
  if (!selectedEx.value.some(selected => selected._id === user._id)) {
    selectedEx.value.push(user); // Adiciona o usuário selecionado
  }
  searchQuery.value = user.name; // Atualiza o input com o nome do usuário selecionado
  selectedUserName.value = user.name; // Atualiza o controle do dropdown
  highlightedIndex.value = -1; // Reinicia o índice destacado
};
</script>

<style>
/* Adicione um estilo para o item destacado */
.active {
  background-color: #f0f0f0;
}

img{
    height: 40px;
}
</style>
