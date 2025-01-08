import { Doughnut, Bar, Pie, Line } from 'vue-chartjs';

const datsa = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    },
    {
      label: 'Data One',
      backgroundColor: '#444',
      data: [12,20,50,90,60,45,65]
    }
  ]
}

const options = {
  responsive: false,
  maintainAspectRatio: false
} 

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
// <Line :data="datsa" :options="options" class='c-line' />
