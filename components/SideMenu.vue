<template>
  <aside class="side-menu" :class="{ open: isOpen }">
    <nav class="side-menu__content">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.side-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;       /* Largura do menu lateral */
  height: 100%;
  background: #222;
  transform: translateX(100%); /* Escondido por padrão */
  transition: transform 0.3s ease;
  z-index: 1;
}

/* Quando o menu está aberto */
.side-menu.open {
  transform: translateX(0);
}

.side-menu__content {
  padding: 1rem;
  color: #fff;
}
.side-menu__content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.side-menu__content li {
  margin: 1rem 0;
}
.side-menu__content li a {
  text-decoration: none;
  color: #fff;
}
</style>
