<template>
  <div id="app">
    <div class="div-main-two">
      <div
        v-for="(exercise, index) in getExercises()"
        :key="index"
        class="exercise-card"
        @click="showExerciseDetails(exercise)"
      >
        <img :src="exercise.img" :alt="exercise.nome" />
        <h3>{{ exercise.nome }}</h3>
        <p>Sets: {{ exercise.sets }}</p>
        <p>Reps: {{ exercise.reps }}</p>
        <p>Rest: {{ exercise.rest }}</p>
        <p>{{ exercise.obs }}</p>
      </div>
    </div>

    <!-- Modal de imagem -->
    <div v-if="isImageVisible" class="modal" @click="hideExerciseDetails">
      <div class="modal-content" @click.stop>
        <img :src="selectedExercise.img" :alt="selectedExercise.nome" @click="hideExerciseDetails"/>
       
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Estado reativo
const isImageVisible = ref(false); // Estado da imagem em destaque
const selectedExercise = ref({}); // Exercício atual selecionado

// Função para exibir os detalhes do exercício
function showExerciseDetails(exercise) {
  selectedExercise.value = exercise; // Define o exercício atual
  isImageVisible.value = true; // Mostra a imagem em destaque
}

// Função para ocultar os detalhes do exercício
function hideExerciseDetails() {
  isImageVisible.value = false; // Oculta a imagem em destaque
}

// Mock de lista de exercícios
function getExercises() {
  return [
    {
      img: "exemplo1.jpg",
      nome: "Exercício 1",
      sets: 3,
      reps: 12,
      rest: "1:00",
      obs: "Mantenha a postura correta.",
    },
    {
      img: "exemplo2.jpg",
      nome: "Exercício 2",
      sets: 4,
      reps: 10,
      rest: "1:30",
      obs: "",
    },
  ];
}
</script>

<style>
.div-main-two {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.exercise-card {
  border: 1px solid #ccc;
  padding: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.exercise-card:hover {
  transform: scale(1.05);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
}

.modal-content img {
  max-width: 100%;
  height: auto;
}
</style>
