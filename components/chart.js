// import Vue from 'vue'

// import { defineNuxtPlugin } from '#app'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


// export default defineNuxtPlugin(() => {   
//         Vue.component('BarChart', {
//         extends: Bar,
//         props: {
//             data: {
//                 type: Object,
//                 required: true,
//             },
//             options: {
//                 type: Object,
//                 required: false,
//                 default: () => ({
//                     responsive: true,
//                     maintainAspectRatio: false,
//                     legend: {
//                         display: false,
//                     },
//                 }),
//             },
//         },
//         watch: {
//             data() {
//                 this.renderChart(this.data, this.options)
//             },
//         },
//         mounted() {
//             this.renderChart(this.data, this.options)
//         },
//     })
// })