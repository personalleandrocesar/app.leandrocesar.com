<template>
  <div class="form-container">
    <h1>Formulário de Consultoria Personalizada</h1>
    <form @submit.prevent="submitForm">
      <!-- Informações Gerais -->
      <div class="form-section">
        <h2>Informações Gerais</h2>
        <input v-model="form.name" type="text" placeholder="Nome completo" required />
        <input v-model="form.age" type="number" placeholder="Idade" required />
        <select v-model="form.gender" required>
          <option disabled value="">Selecione o gênero</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>
        <input v-model="form.email" type="email" placeholder="E-mail" required />
      </div>

      <!-- Objetivos de Treino -->
      <div class="form-section">
        <h2>Objetivos de Treino</h2>
        <select v-model="form.goal" required>
          <option disabled value="">Selecione seu objetivo</option>
          <option value="weight_loss">Emagrecimento</option>
          <option value="muscle_gain">Ganho de massa muscular</option>
          <option value="health_improvement">Melhora da saúde geral</option>
          <option value="sports_performance">Performance esportiva</option>
        </select>
        <input v-model="form.deadline" type="date" placeholder="Prazo para alcançar o objetivo" />
        <textarea v-model="form.motivation" placeholder="O que te motivou a procurar um Personal Trainer?"></textarea>
      </div>

      <!-- Histórico de Saúde -->
      <div class="form-section">
        <h2>Histórico de Saúde</h2>
        <input v-model="form.medical_conditions" type="text" placeholder="Condições médicas (se houver)" />
        <input v-model="form.medications" type="text" placeholder="Medicamentos em uso (se houver)" />
        <textarea v-model="form.injuries" placeholder="Lesões ou cirurgias anteriores (se houver)"></textarea>
      </div>

      <!-- Nível de Atividade Física -->
      <div class="form-section">
        <h2>Nível de Atividade Física</h2>
        <select v-model="form.activity_level" required>
          <option disabled value="">Selecione seu nível de atividade</option>
          <option value="sedentary">Sedentário</option>
          <option value="light">Leve</option>
          <option value="moderate">Moderado</option>
          <option value="active">Ativo</option>
          <option value="very_active">Muito ativo</option>
        </select>
        <input v-model="form.training_frequency" type="number" placeholder="Dias por semana que você treina" />
      </div>

      <!-- Preferências e Restrições -->
      <div class="form-section">
        <h2>Preferências e Restrições</h2>
        <select v-model="form.preferred_location" required>
          <option disabled value="">Onde prefere treinar?</option>
          <option value="home">Em casa</option>
          <option value="outdoor">Ao ar livre</option>
          <option value="gym">Na academia</option>
        </select>
        <textarea v-model="form.preferences" placeholder="Exercícios ou atividades preferidas"></textarea>
        <textarea v-model="form.restrictions" placeholder="Exercícios ou atividades que deseja evitar"></textarea>
      </div>

      <!-- Hábitos de Vida -->
      <div class="form-section">
        <h2>Hábitos de Vida</h2>
        <input v-model="form.sleep_hours" type="number" placeholder="Horas de sono por noite" />
        <select v-model="form.diet" required>
          <option disabled value="">Como é sua alimentação?</option>
          <option value="balanced">Equilibrada</option>
          <option value="high_carb">Rica em carboidratos</option>
          <option value="low_carb">Baixa em carboidratos</option>
          <option value="vegetarian">Vegetariana/Vegana</option>
        </select>
        <input v-model="form.alcohol_consumption" type="text" placeholder="Consumo de álcool (frequência)" />
      </div>

      <!-- Termo de Responsabilidade -->
      <div class="form-section">
        <h2>Termo de Responsabilidade</h2>
        <label>
          <input v-model="form.agreement" type="checkbox" required />
          Declaro que as informações fornecidas são verdadeiras.
        </label>
      </div>

      <!-- Botão de Envio -->
      <button type="submit">Enviar Formulário</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Estado reativo para o formulário
const form = ref({
  name: '',
  age: null,
  gender: '',
  email: '',
  goal: '',
  deadline: '',
  motivation: '',
  medical_conditions: '',
  medications: '',
  injuries: '',
  activity_level: '',
  training_frequency: null,
  preferred_location: '',
  preferences: '',
  restrictions: '',
  sleep_hours: null,
  diet: '',
  alcohol_consumption: '',
  agreement: false,
});

// Função para lidar com o envio do formulário
const submitForm = () => {
  console.log('Formulário enviado:', form.value);
  alert('Formulário enviado com sucesso!');
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #333;
}

.form-section {
  margin-bottom: 15px;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>