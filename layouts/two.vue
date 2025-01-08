<template>
  <div class="layout">
    <!-- Coluna fixa à esquerda -->
    <aside class="sidebar">
      <p>Conteúdo da Coluna Fixa</p>
    </aside>

    <!-- Área do lado direito -->
    <div class="main">
      <!-- Barra fixa no topo -->
      <header class="topbar">
        <p>Barra Fixa</p>
      </header>

      <!-- Conteúdo com scroll -->
      <div class="content">
        <p>
          Conteúdo principal. Adicione texto suficiente para testar o scroll.
        </p>
        <p v-for="i in 50" :key="i">Linha {{ i }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.layout {
  display: grid;
  grid-template-columns: 250px 1fr; /* Coluna fixa e coluna flexível */
  height: 100vh; /* Altura total da viewport */
}

.sidebar {
  background-color: #f4f4f4;
  padding: 20px;
  border-right: 1px solid #ddd; /* Para separar visualmente */
}

.main {
  display: grid;
  grid-template-rows: auto 1fr; /* Barra fixa no topo e conteúdo abaixo */
  overflow: hidden; /* Para limitar o scroll no conteúdo */
}

.topbar {
  background-color: #007bff;
  color: #fff;
  padding: 15px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 10; /* Garante que a barra fique sobre o conteúdo */
}

.content {
  overflow-y: auto; /* Adiciona scroll vertical se necessário */
  padding: 20px;
}
</style>
