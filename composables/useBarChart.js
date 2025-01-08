import { ref, watch } from 'vue';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';

// Registrar os componentes necessários para o gráfico de barras
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

export function useBarChart() {
  const Users = useFetch(
      `https://api.leandrocesar.com/users`,
  );
  // Contagem dos serviços
  const servicesCount = {};
  const item = Users.data.value;
  const user = item || [];
    user.forEach(r => {
      const service = r.service;
      if (service) {
        servicesCount[service] = (servicesCount[service] || 0) + 1;
      }
    });

// watch(Users, () => {
//   processUsers();
// });

  const data = ref({
    labels: ['Ativos', 'Inativos'],
    datasets: [
      {
        backgroundColor: ['#8d00ab', '#b800aa'],
        data: [
          18,
           13,
        ],
        borderRadius: 6, // Bordas arredondadas nas barras
      },
    ],
  });

  const options = ref({
    indexAxis: 'y', // Torna o gráfico de barras horizontal
    responsive: true,
    scales: {
      x: {
              beginAtZero: true,
              ticks: {
                        stepSize: 2, // Define a escala para mostrar de 2 em 2
                      },
            },
       },
       plugins: {
         title: {
           display: true,
           text: `Atletas Ativos vs Inativos`,
           color: '#8d00ab',
           font: {
             size: 17,
           },
         },
         legend: {
           display: false,
           labels: {
           color: '#8d00ab',
             font: {
               size: 11,
             },
           },
         },
       },
     });  

  return { data, options };
}
  