<template>
  <div ref="revealElement" :class="{ 'visible': isVisible }">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const revealElement = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(revealElement.value); // Desativa após visível
      }
    },
    { threshold: 0.4 } // Aparece quando 10% do elemento estiver visível
  );

  if (revealElement.value) {
    observer.observe(revealElement.value);
  }

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<style scoped>
/* Estilo inicial (antes de aparecer) */
div {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 2s ease, transform 2s ease;
}

/* Estilo quando o elemento se torna visível */
div.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
