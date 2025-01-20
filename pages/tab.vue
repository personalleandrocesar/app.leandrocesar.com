<template>
  <div class="table-container">
    <table class="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Location</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.location }}</td>
          <td :class="['status', user.status.toLowerCase()]">{{ user.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const users = [
  { name: 'Alex Smith', email: 'alex.smith@example.com', location: 'New York, USA', status: 'Subscribed' },
  { name: 'Jordan Brown', email: 'jordan.brown@example.com', location: 'London, UK', status: 'Unsubscribed' },
  { name: 'Taylor Green', email: 'taylor.green@example.com', location: 'Paris, France', status: 'Bounced' },
  { name: 'Morgan White', email: 'morgan.white@example.com', location: 'Berlin, Germany', status: 'Subscribed' },
  { name: 'Casey Gray', email: 'casey.gray@example.com', location: 'Tokyo, Japan', status: 'Subscribed' },
  { name: 'Jamie Johnson', email: 'jamie.johnson@example.com', location: 'Sydney, Australia', status: 'Subscribed' },
  { name: 'Riley Davis', email: 'riley.davis@example.com', location: 'New York, USA', status: 'Subscribed' },
  { name: 'Kelly Wilson', email: 'kelly.wilson@example.com', location: 'London, UK', status: 'Subscribed' },
];
</script>

<style scoped>
/* Container da tabela */
.table-container {
  margin: 20px auto;
  padding: 10px;
  background-color: #1c1e26;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #ffffff;
  max-width: 800px;
  overflow-x: auto;
}

/* Estilo da tabela */
.styled-table {
  width: 100%;
  border-collapse: collapse;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  text-align: left;
}

.styled-table thead tr {
  background-color: #2a2e38;
  border-bottom: 2px solid #444;
}

.styled-table tbody tr:nth-child(even) {
  background-color: #2f3440;
}

.styled-table tbody tr:hover {
  background-color: #383d47;
}

.styled-table th {
  font-weight: bold;
  color: #d1d5db;
}

/* Estilo de status */
.status {
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
}

.status.subscribed {
  background-color: #28a745;
  color: #ffffff;
}

.status.unsubscribed {
  background-color: #dc3545;
  color: #ffffff;
}

.status.bounced {
  background-color: #fd7e14;
  color: #ffffff;
}
</style>
