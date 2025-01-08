<template>
  <Doughnut :data="data" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'

import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

import { ref } from 'vue';
// const layout = "duo"

// useHead({
//     titleTemplate: 'Leandro Cesar - App',
// });


// const user = ref('leandrocesar');
// const senha = ref('');

// const route = useRoute();
// const Users = await useFetch('https://api.leandrocesar.com/users');
// const item = Users.data.value;
// const UsersId = await useFetch(`https://api.leandrocesar.com/users/:id`);

// const service = ref('')
// const exists = Users.data.value.find(u => service);
// console.log(exists);

// const servicesCount = {};

// // Loop pelos objetos
// item.forEach(obj => {
//     const service = obj.service;
//     if (service) {
//         // Se o service já existe no objeto de contagem, incrementa a contagem
//         if (servicesCount[service]) {
//             servicesCount[service]++;
//         } else {
//             // Se não existe, inicializa a contagem como 1
//             servicesCount[service] = 1;
//         }
//     }
// });

// // Exibe os services e a quantidade no console
// console.log("Quantidade de cada service:");
// for (const service in servicesCount) {
//     console.log(`${service}: ${servicesCount[service]}`);
// }



// const add = ref(true)
// function addClient() {
//     add.value = !add.value
// }

// const swit = ref(true)
// function switchButton() {
//     swit.value = !swit.value
// }

// // talvez não precise do código abaixo
// const logOff = () => {
//     logon.value = null
// }

// const tag = useCookie('tag')
// tag.value = tag.value


// const bodyOne = ref(true)
// function menu() {
//     bodyOne.value = !bodyOne.value

// }
// const colorMode = useColorMode()

// function theme() {
//     colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
// }

// const colorCookie = useCookie('colorCookie')
// if (colorMode.value === "dark") {
//     colorCookie.value = "darkCookie"
// } else {
//     colorCookie.value = "lightCookie"
// }
// colorCookie.value === "darkCookie" ? colorMode.value = "dark" : colorMode.value = "light"

// const state = useCookie('state')
// state.value = state.value

// // Doughnut Chart ínicio
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
// import { Doughnut } from 'vue-chartjs'

// ChartJS.register(ArcElement, Tooltip, Legend, Title)

// const data = {
//     labels: [
//         `Personal (${servicesCount.Personal})`,
//         `Consultoria (${servicesCount.Consultoria})`,
//         `Avaliação Física (${servicesCount.Avaliação})`],
//     datasets: [
//         {
//             backgroundColor: ['#09df00', '#00dc82', '#095d62'],
//             data: [servicesCount.Personal, servicesCount.Consultoria, servicesCount.Avaliação],
//             borderRadius: 8,
//             rotation: 260,
//         }
//     ]
// }

// const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//         title: {
//             display: true,
//             text: `Quantidade de Clientes: ${Users.data.value.length}`,
//             font: {
//                 size: 17,
//             }
//         },
//         legend: {
//             labels: {
//                 // This more specific font property overrides the global property
//                 font: {
//                     size: 13
//                 }
//             }
//         }
//     }
// }
// // Doughnut Chart fim
// const dataTarget = {
//     labels: [
//         `Personal (${servicesCount.Personal})`,
//         `Consultoria (${servicesCount.Consultoria})`,
//         `Avaliação Física (${servicesCount.Avaliação})`],
//     datasets: [
//         {
//             backgroundColor: ['#09df00', '#00dc82', '#095d62'],
//             data: [servicesCount.Personal, servicesCount.Consultoria, servicesCount.Avaliação],
//             borderRadius: 8,
//             rotation: 260,
//         }
//     ]
// }

// const optionsTarget = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//         title: {
//             display: true,
//             text: `Quantidade de Clientes: ${Users.data.value.length}`,
//             font: {
//                 size: 17,
//             }
//         },
//         legend: {
//             labels: {
//                 // This more specific font property overrides the global property
//                 font: {
//                     size: 13
//                 }
//             }
//         }
//     }
// }
// Doughnut Chart fim



export default {
  name: 'App',
  components: {
      Doughnut
  },
  data() {
    return {
      data: {
            labels: [
                `Personal `,
                `Consultoria `,
                `Avaliação Física   `],
            datasets: [
                {
                    backgroundColor: ['#09df00', '#00dc82', '#095d62'],
                    data: [3,3,3],
                    borderRadius: 8,
                    rotation: 260,
                }
            ]
      },
      options: {
        responsive: true
      }
    }
  }
}
</script>