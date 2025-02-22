<template>
  <div>
    <!-- Botão de menu -->
    <MenuButton 
      :isActive="menuOpen" 
      :toggleMenu="toggleMenu" 
    />

    <!-- Menu lateral -->
    <SideMenu :isOpen="menuOpen" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import MenuButton from '~/components/MenuButton.vue'
import SideMenu from '~/components/SideMenu.vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
/* Exemplo para posicionar o MenuButton */
:root {
  --menu-button-right: 20px;
  --menu-button-top: 20px;
}
div {
  position: relative;
}

.menu-button {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
}
</style>
