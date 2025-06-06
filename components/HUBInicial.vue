<template>
  <div class="main-container">
    <div class="rank-panel">
      <h2>Rank C</h2>
      <div class="xp-info">
        <label>XP</label>
        <div class="xp-bar">
          <div class="xp-progress" :style="{ width: '45%' }"></div>
        </div>
        <span>450 / 1000</span>
      </div>
    </div>

    <div class="missions-panel">
      <h3>Missions Today</h3>
      <span>1 / 3</span>
      <h4>Recent Progress</h4>
      <p><span class="check">✔</span> Increased weight</p>
    </div>

    <button class="hud-button">ENTER HUD</button>

    <div class="menu-buttons">
      <button>My Workouts</button>
      <button>Rankings</button>
      <button>Mission Log</button>
      <button>Progress Tracker</button>
    </div>
  </div>
</template>

<script setup>
// Lógica futura aqui
</script>

<style scoped>
.main-container {
  background: #020024;
  min-height: 100vh;
  padding: 2rem;
  color: #ffffff;
  font-family: 'Orbitron-Regular', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.rank-panel {
  border: 2px solid #b800ff;
  padding: 1rem;
  border-radius: 12px;
  width: 100%;
  max-width: 350px;
  text-align: center;
  box-shadow: 0 0 10px #8d00ab;
}

.xp-info {
  margin-top: 1rem;
}

.xp-bar {
  background: #ffffff33;
  border-radius: 8px;
  height: 12px;
  margin: 0.25rem 0;
  overflow: hidden;
}

.xp-progress {
  height: 100%;
  background: #b800ff;
  width: 0;
  transition: width 0.3s;
}

.missions-panel {
  text-align: center;
  color: #b800ff;
}

.check {
  color: #8d00ab;
  margin-right: 5px;
}

.hud-button {
  background: #00d0ff;
  border: 2px solid #00d0ff;
  color: #ffffff;
  padding: 0.75rem 2rem;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 0 15px #00d0ff;
  cursor: pointer;
  transition: 0.3s;
}

.hud-button:hover {
  background: transparent;
  color: #00d0ff;
}

.menu-buttons button {
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 0.5rem auto;
  background: transparent;
  border: 2px solid #b800ff;
  color: #b800ff;
  padding: 0.75rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.menu-buttons button:hover {
  background: #8d00ab;
  color: #ffffff;
  border-color: #8d00ab;
}
</style>
