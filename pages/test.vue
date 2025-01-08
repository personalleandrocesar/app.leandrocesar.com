<script setup>
import { ref, nextTick } from "vue";

const route = useRoute();
const training = ref({
  name: '',
  serie: []
});

// Temporário para adicionar um exercício
const newExercise = ref({
  nome: '',
  reps: '',
  sets: 0,
  obs: '',
  img: ''
});

// Série atualmente selecionada para adicionar exercícios
const selectedSeriesIndex = ref(null);

// Referência para o primeiro input (nome do exercício)
const exerciseNameInput = ref(null);

const addSeries = () => {
  training.value.serie.push({ name: '', set: [] });
  selectedSeriesIndex.value = training.value.serie.length - 1;
};

const removeSeries = (index) => {
  training.value.serie.splice(index, 1);
  if (selectedSeriesIndex.value === index) {
    selectedSeriesIndex.value = null;
  }
};

const removeAllSeries = () => {
  if (confirm("Tem certeza que deseja apagar todas as séries?")) {
    training.value.serie = [];
    selectedSeriesIndex.value = null;
  }
};

const addExercise = () => {
  if (selectedSeriesIndex.value !== null) {
    training.value.serie[selectedSeriesIndex.value].set.push({
      ...newExercise.value,
      id: training.value.serie[selectedSeriesIndex.value].set.length + 1
    });
    newExercise.value = {
      nome: '',
      reps: '',
      sets: 0,
      obs: '',
      img: ''
    };
    // Após adicionar o exercício, foca no primeiro campo
    nextTick(() => exerciseNameInput.value.focus());
  } else {
    alert("Por favor, selecione uma série primeiro.");
  }
};

const removeExercise = (seriesIndex, exerciseIndex) => {
  training.value.serie[seriesIndex].set.splice(exerciseIndex, 1);
};

const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addExercise();
  }
};

const moveExerciseUp = (seriesIndex, exerciseIndex) => {
  if (exerciseIndex > 0) {
    const serie = training.value.serie[seriesIndex].set;
    [serie[exerciseIndex - 1], serie[exerciseIndex]] = [serie[exerciseIndex], serie[exerciseIndex - 1]];
  }
};

const moveExerciseDown = (seriesIndex, exerciseIndex) => {
  const serie = training.value.serie[seriesIndex].set;
  if (exerciseIndex < serie.length - 1) {
    [serie[exerciseIndex], serie[exerciseIndex + 1]] = [serie[exerciseIndex + 1], serie[exerciseIndex]];
  }
};

async function handleSubmit() {
  try {
    const response = await fetch(`https://api.leandrocesar.com/usernw/${route.params.id}/atleta/${route.params.iddd}/treinos`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        treino: training.value
      }),
    });
    if (response.ok) {
      console.log('Create Training successfully');
    } else {
      console.error('Failed to Create Training');
    }
  } catch (error) {
    console.error('Error Create Training:', error);
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Nome do Treino:</label>
      <input v-model="training.name" id="name" placeholder="Ex: jul-24" required />
    </div>

    <div>
      <h3>Adicionar Série</h3>
      <button type="button" @click="addSeries">Adicionar Nova Série</button>
      <button type="button" @click="removeAllSeries" style="color: red;">Apagar Todas as Séries</button>
    </div>

    <div>
      <h3>Adicionar Exercício</h3>
      <div>
        <label>Nome do Exercício:</label>
        <input 
          v-model="newExercise.nome" 
          ref="exerciseNameInput" 
          placeholder="Ex: Cadeira Flexora" 
          required 
        />

        <label>Reps:</label>
        <input 
          v-model="newExercise.reps" 
          placeholder="Ex: 10" 
          required 
          @keydown="handleKeyDown"
        />

        <label>Sets:</label>
        <input 
          type="number" 
          v-model.number="newExercise.sets" 
          required 
          @keydown="handleKeyDown"
        />

        <label>Observações:</label>
        <input 
          v-model="newExercise.obs" 
          placeholder="Opcional" 
          @keydown="handleKeyDown"
        />

        <label>URL da Imagem:</label>
        <input 
          v-model="newExercise.img" 
          placeholder="Ex: https://app...gif" 
          @keydown="handleKeyDown"
        />

        <label>Selecionar Série:</label>
        <select v-model="selectedSeriesIndex">
          <option v-for="(serie, index) in training.serie" :key="index" :value="index">
            {{ serie.name || `Série ${index + 1}` }}
          </option>
        </select>

        <button type="button" @click="addExercise">Adicionar Exercício</button>
      </div>
    </div>

    <div class="series-container">
      <div v-for="(serie, index) in training.serie" :key="index" class="series-column">
        <h4>
          {{ serie.name || `Série ${index + 1}` }}
          <button type="button" @click="removeSeries(index)" style="color: red;">Remover Série</button>
        </h4>
        <label for="serie-name">Nome da Série:</label>
        <input v-model="serie.name" placeholder="Ex: perna" required />

        <ul>
          <li v-for="(exercise, idx) in serie.set" :key="idx">
            {{ exercise.nome }} - Reps: {{ exercise.reps }} - Sets: {{ exercise.sets }}
            <button type="button" @click="moveExerciseUp(index, idx)" :disabled="idx === 0">↑</button>
            <button type="button" @click="moveExerciseDown(index, idx)" :disabled="idx === serie.set.length - 1">↓</button>
            <button type="button" @click="removeExercise(index, idx)" style="color: red;">Remover Exercício</button>
          </li>
        </ul>
      </div>
    </div>

    <button type="submit">Criar Treino</button>
  </form>
</template>

<style scoped>
.series-container {
  display: flex;
  gap: 1rem;
}

.series-column {
  border: 1px solid #ddd;
  padding: 1rem;
  width: 250px;
}

.series-column h4 {
  margin-top: 0;
}

.series-column ul {
  padding: 0;
  list-style: none;
}
</style>
