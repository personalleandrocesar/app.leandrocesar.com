<template>
  <div 
    class="menu-button" 
    :class="{ active: isActive }" 
    @click="toggleMenu"
  >
    <span></span>
    <span></span>
    <span></span>
    <span class="tr"></span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  toggleMenu: {
    type: Function,
    required: true
  }
})
</script>

<style scoped>
.menu-button {
  width: 30px;
  height: 30px;
  border: .1px solid #d4af37; /* Dourado */
  transform: rotate(45deg);
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 0px;
  /* Usamos flex para centralizar o conteúdo */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-button span:nth-child(1) {
  transform: rotate(-45deg);
    display: inline;
  width: 20px;
  height: 2px;
  background-color: #d4af37;
  margin: 0px 8px 0 0 ;
  /* Garante espaçamento entre as barras */
  
  /* Rotaciona cada barra para compensar o ângulo do botão */
  transition: all 0.3s ease;

}
.menu-button span:nth-child(2) {
  transform: rotate(-45deg);
    display: inline;
  width: 20px;
  height: 2px;
  background-color: #d4af37;
  margin: 2px -0px 0 0 ;
  /* Garante espaçamento entre as barras */
  
  /* Rotaciona cada barra para compensar o ângulo do botão */
  transition: all 0.3s ease;

}
.menu-button span:nth-child(3) {
  transform: rotate(-45deg);
  display: inline;
  width: 20px;
  height: 2px;
  background-color: #d4af37;
  margin: 2px -8px 0 0 ;
  /* Garante espaçamento entre as barras */
  
  /* Rotaciona cada barra para compensar o ângulo do botão */
  transition: all 0.3s ease;
  
}
.tr{
    display: inline;
  width: 18px;
  height: .1px;
  background-color: #d4af37;
  /* Garante espaçamento entre as barras */
  position: relative; 
  transform: rotate(-45deg);
  right: -19.5px;
  top:-25.45px;

  /* Rotaciona cada barra para compensar o ângulo do botão */
  transition: all 0.3s ease;

}
/* Animação quando o menu está ativo */
.menu-button.active span:nth-child(1) {
  transform: rotate(0deg) translate(4px, 4px);
}

.menu-button.active span:nth-child(2) {
  opacity: 0;
}

.menu-button.active span:nth-child(3) {
  transform: rotate(-90deg) translate(4px, -4px)
}
</style>
