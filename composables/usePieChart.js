// composables/usePieChart.js

import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';

// Registrar os componentes necessários para o gráfico de barras
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

export async function usePieChart() {
  const route = useRoute();

  // Carregar os dados da API de forma assíncrona
  const { data: atletasData, pending, error } = await useFetch(
    `https://api.leandrocesar.com/usersnw/${route.params.id}/team`
  );

  const allUsers = atletasData.value || [];

  // Contagem dos filteredUsers
  const servicesCount = {};
  allUsers.forEach((r) => {
    const service = r.service;
    if (service) {
      servicesCount[service] = (servicesCount[service] || 0) + 1;
    }
  });

  // Definindo os dados do gráfico após os dados serem carregados
  const data = ref({
    labels: ['Presencial', 'On-line'],
    datasets: [
      {
        backgroundColor: ['#04be7a', '#00dc8290'],
        data: [
          servicesCount.Personal || 0,
          servicesCount.Consultoria || 0,
        ],
        borderRadius: 6,
        rotation: 170,
      },
    ],
  });

  // Configuração das opções do gráfico
  const options = ref({
    indexAxis: 'y', // Torna o gráfico de barras horizontal
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Presencial vs Online`,
        color: '#00dc82',
        font: {
          size: 17,
        },
      },
      legend: {
        display: true,
        labels: {
          color: '#00dc82',
          font: {
            size: 11,
          },
        },
      },
    },
  });

  return { data, options, pending, error };
}
