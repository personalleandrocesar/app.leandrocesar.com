<script setup>
import { ref } from 'vue'
const layout = "duo"
const route = useRoute()

const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
}



const coachIdCookie = useCookie('coachId')
console.log(coachIdCookie.value)


const Series = await useFetch(`https://api.leandrocesar.com/usersnw/${coachIdCookie.value}/team/${route.params.id}`);
const people = Series.data.value
const treinos = people.treinos
console.log(treinos.value)

const dataConf = await useFetch(`https://api.leandrocesar.com/usersnw/${route.params.id}`)
const Treinos = await useFetch(`https://api.leandrocesar.com/usersnw/${route.params.id}/treinos`);
const qtTreinos = Treinos.data.value;

console.log(qtTreinos);


const state = useCookie('state')

const useA = () => {
  return state.value = 1
}
const useB = () => {
  return state.value = 2
}
const useC = () => {
  return state.value = 3
}
const useD = () => {
  return state.value = 4
}

const navA = ref(state.value == 1)
const navB = ref(state.value == 2)
const navC = ref(state.value == 3)
const navD = ref(state.value == 4)


</script>

<template>
  <NuxtLayout>
    <div class="main-div-one">


      <div class="conf">
        <Icon name="fluent:target-arrow-16-filled" />
        <h3>
          {{ people?.target }}
        </h3>

      </div>
      <div class="conf">
        <Icon name='mdi:calendar-weekend' />
        <h3>
          {{ people?.day }} dias
        </h3>

      </div>
      <div class="conf">
        <Icon name="material-symbols:timer-rounded" />
        <h3>
          {{ people?.time }} min.
        </h3>

      </div>
    </div>
    <!-- <div class="story" v-if="navA">Último treino: <b>TREINO</b>
      <Icon name='mdi:alpha-a' />
    </div>
    <div class="story" v-else-if="navB">Último treino: <b>TREINO</b>
      <Icon name='mdi:alpha-b' />
    </div>
    <div class="story" v-else-if="navC">Último treino: <b>TREINO</b>
      <Icon name='mdi:alpha-c' />
    </div>
    <div class="story" v-else-if="navD">Último treino: <b>TREINO</b>
      <Icon name='mdi:alpha-d' />
    </div>
    <div v-else></div> -->



    <br>
    <div class="main-div-two">
      <h3>
        <Icon name='material-symbols:exercise' /> TREINO
      </h3>
    </div>
    <br>
    <div class="main-div-two">


      <span v-for="(qtTreinos, index) in treinos" :key="index">
        <NuxtLink class="square" :to="`/users/${route.params.id}/treino/${qtTreinos.name}`">
          <div>
            <h4>
              TREINO
            </h4>
          </div>

          <div>
            <h3>
            </h3>

            <h5>
              {{ qtTreinos.set }}
            </h5>

          </div>
        </NuxtLink>
      </span>

    </div>
    <br>
    <br>
    <br>
    <br>

  </NuxtLayout>
</template>





<style scoped>
body {
  background: #fff;
  color: #616161;

}

b {
  margin-left: 7px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
}

.conf {
  height: 80px;
  width: 32.5%;
  margin: 25px 2px 10px 2px;
  color: #555;
  backdrop-filter: blur(15px);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #00dc8210;
  border: .1px solid #00dc8210;
  margin-top: 1rem;
}

.main-div-one {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.main-div-two {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px 0 0 0;
  align-items: left;
  flex-wrap: wrap;
}

.main-div-two span {
  overflow-x: auto;
  width: 49.9%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 0 0 0;
  align-items: left;
}

.main-div-two .icon {
  color: #00dc82;
}

.square {
  background-color: #00dc8210;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin: 2px 4px 4px 0px;
  border-radius: 8px;
  border: .1px solid #00dc8220;
  line-height: 1.4;
  transition: all .4s;
  border: 2px solid #00dc8210;
}

.square:nth-child(2n+1) {
  margin: 2px 0px 0px 4px;
}

.square:nth-child(2n) {
  margin: 2px 4px 0px 0px;
}

.square div h4 .icon {
  margin-top: -1px;
}

.square:nth-child(2) {
  margin-top: 10px;
}

.square:hover {
  background-color: #00dc8230;

  border-top: 2px solid #00dc8240;
  border-bottom: 2px solid #00dc8240;

}

.square div:nth-child(2),
.square div:nth-child(3) {
  margin: auto;
  border: none;
}

.story {
  background-color: #00dc8210;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 65%;
  margin: 8px auto;
  padding-top: 3px;
  border-radius: 8px;
  border: .1px solid #00dc8210;
  line-height: 1.4;
  transition: all .4s;
  font-weight: 700;
}

.story .icon {
  color: #00dc82;
  margin-top: -2px;
}

.main-div-one {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

.main-div-one .icon {
  zoom: 1.4;
  color: #00dc82;
  margin-top: -2.5px;
}

.main-div-two H3 {
  margin-left: 20px;

}

.main-div-two h4 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #00dc82;
}

.main-div-two h5 {
  font-size: .9rem;
}

.main-div-two a div {
  border-bottom: 2px solid #00dc8220;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-div-two h4 .icon {
  margin-left: -3px;
}

.main-div-two div .icon {
  margin-top: -1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.icon {
  zoom: 1.4;
  color: #fadb41;
  margin-top: -2.5px;
}
</style>
