<script setup>
useHead({
    titleTemplate: 'Personal Leandro Cesar',
})
const colorMode = useColorMode()
function theme() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}

const colorCookie = useCookie('colorCookie')
if (colorMode.value === "dark") {
  colorCookie.value = "darkCookie"
} else {
 colorCookie.value = "lightCookie"
}
colorCookie.value === "darkCookie" ? colorMode.value = "dark" : colorMode.value ="light"

</script>

<template>
  <div>
    <div class="grid-container">
      <div class="left-column">
        <img src="~/assets/perfil.jpeg">
      </div>
      <div class="right-column">
        <Home1Index />
      </div>
    </div>
  </div>

</template>

<style scoped>

@media (min-width: 1001px) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Define duas colunas iguais */
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    height: 100vh; /* Limita o tamanho ao viewport */
    overflow: hidden; /* Previne que o conteúdo ultrapasse a borda */
  }

  .left-column, .right-column {
    text-align: center;
  }
  
  .right-column {
    overflow-y: auto;
  }

  .left-column img {
    display: flex;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    border-right: solid 2px #00dc82;
  }
}

@media (max-width: 1000px) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr; /* Define uma coluna */
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    height: 100vh; /* Limita o tamanho ao viewport */
    overflow: hidden; /* Previne que o conteúdo ultrapasse a borda */
  }

  .left-column, .right-column {
    text-align: center;
  }

  .left-column img {
    display: none;
  }
}

</style>
