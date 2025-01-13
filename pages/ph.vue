<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.username">
        <img 
          :src="`https://api.leandrocesar.com/uploads/${user.username}.${format}`" 
          :alt="user.username"
          width="150"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const users = ref([
  { username: "leandrocosta" },
  { username: "dmorais" },
  { username: "" }
]);

const format = ref("png"); // Ajuste conforme o formato das imagens (jpg, png, etc.)
</script>
