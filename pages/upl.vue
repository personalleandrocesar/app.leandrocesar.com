<template>
  <div class="logo">
    <!-- Foto do usuário ou pré-visualização -->
    <img @click="openPhoto" :src="user.foto || previewImage" alt="User Photo" />

    <!-- Ícone para abrir o seletor de arquivos -->
    <label for="file-upload" @click="openFloatingDiv">
      <Icon name="material-symbols:person-cancel-outline-rounded" />
    </label>

    <!-- Formulário de Upload -->
    <form @submit.prevent="uploadImage">
      <button type="submit">Upload</button>
    </form>

    <input id="file-upload" type="file" @change="handleFileChange" hidden />

    <!-- Informações do usuário -->
    <div class="head-name">
      <h3>{{ user.name }} {{ user.lastName }}</h3>
      <h4>{{ user.username }}</h4>
      <span><b>ID:</b> {{ user._id }}</span>
      <h4 :class="user.status !== 0 ? 'status' : 'statusOff'">
        {{ user.status === 0 ? "Inativo" : "Ativo" }}
      </h4>
    </div>
  </div>

  <!-- Div flutuante de pré-visualização -->
  <div v-if="showFloatingDiv" class="floating-div">
    <h3>Pré-visualização</h3>
    <img v-if="previewImage" :src="previewImage" alt="Preview Image" />
    <button @click="uploadImage" :disabled="loading">
      {{ loading ? "Enviando..." : "Upload" }}
    </button>
    <button @click="closeFloatingDiv">Cancelar</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showFloatingDiv = ref(false)
const previewImage = ref(null)
const file = ref(null) // Armazena o arquivo selecionado
const loading = ref(false) // Indica se o upload está em andamento

const user = ref({
  name: "João",
  lastName: "Silva",
  username: "usuario123",
  foto: "", // A imagem será carregada da API
  _id: "123456",
  status: 1
})

// Função para buscar os dados do usuário na API
const fetchUserData = async () => {
  try {
    const response = await fetch(`https://api.leandrocesar.com/api/user/${user.value.username}`)
    if (response.ok) {
      const data = await response.json()
      user.value.foto = `https://api.leandrocesar.com/upload/${data.foto}`
    }
  } catch (err) {
    console.error("Erro ao buscar dados do usuário:", err)
  }
}

// Carregar os dados do usuário ao montar o componente
onMounted(fetchUserData)

// Abre a div flutuante ao clicar no label
const openFloatingDiv = () => {
  showFloatingDiv.value = true
}

// Fecha a div flutuante e reseta a pré-visualização
const closeFloatingDiv = () => {
  showFloatingDiv.value = false
  previewImage.value = null
  file.value = null
}

// Atualiza a pré-visualização quando um arquivo é escolhido
const handleFileChange = (event) => {
  file.value = event.target.files[0]
  if (file.value) {
    previewImage.value = URL.createObjectURL(file.value)
    showFloatingDiv.value = true
  }
}

// Confirma o upload e envia o arquivo para a API
const uploadImage = async () => {
  if (!file.value) return alert("Por favor, selecione um arquivo.")
  
  const formData = new FormData()
  formData.append('image', file.value)

  try {
    loading.value = true
    const response = await fetch('https://api.leandrocesar.com/api/upload', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      alert("Upload realizado com sucesso!")

      // Atualiza os dados do usuário após o upload
      await fetchUserData()
      closeFloatingDiv()
    } else {
      alert("Erro no upload.")
    }
  } catch (err) {
    console.error(err)
    alert("Erro ao conectar com o servidor.")
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.logo {
  position: relative;
  display: flex;
  align-items: center;
}

.floating-div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 1000;
}

.floating-div img {
  max-width: 200px;
  display: block;
  margin: 10px auto;
}

.floating-div button {
  margin: 5px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
}

.floating-div button:first-child {
  background: green;
  color: white;
}

.floating-div button:last-child {
  background: red;
  color: white;
}

.floating-div button:disabled {
  background: gray;
  cursor: not-allowed;
}
</style>
