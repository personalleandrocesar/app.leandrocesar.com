<script setup>
import { computed, ref } from 'vue'

const route = useRoute()
const layout = "duo"
const { data: dataRes } = await useFetch(`https://api.leandrocesar.com/users/${route.params.id}/avaliacoes`)
const aval = dataRes.value




// Logar os índices e os valores
if (aval) {
  aval.forEach((item, index) => {
    // console.log(`Index: ${index}, Value:`, item);

    // Convertendo strings para números
    const sexo = item.sexo
    const idade = parseFloat(item.idade)
    const dTorax = parseFloat(item.dtorax)
    const abdominal = parseFloat(item.abdominal)
    const coxa = parseFloat(item.coxa)
    const triceps = parseFloat(item.tricipital)
    const supraespinhal = parseFloat(item.supraEspinhal)

    const homens = dTorax + abdominal + coxa
    const mulheres = triceps + supraespinhal + coxa

    const dcHomens = 1.109380 - (0.0008267 * (homens)) + (0.0000016 * (homens * homens)) - (0.0002574 * (idade))
    const dcMulheres = 1.0994921 - (0.0009929 * (mulheres)) + (0.0000023 * (mulheres * mulheres)) - (0.0001392 * (idade))

    const percGHomens = (((4.95 / dcHomens) - 4.50) * 100).toFixed(1)
    const percGMulheres = (((4.95 / dcMulheres) - 4.50) * 100).toFixed(1)

    const percentualFat = sexo === "feminino" ? percGMulheres : percGHomens

    // Adicionando o percentual de gordura ao item
    item.percentualFat = percentualFat

    // console.log(`Percentual de Gordura: ${item.percentualFat} %`);

    // Convertendo a data para o formato yyyy-mm-dd
    const dateParts = item.date.split('-')  // Dividindo a data em partes
    const reversedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`  // Reorganizando as partes
    item.reversedDate = reversedDate  // Salvando a data invertida no item

    // console.log(`Data Original: ${item.date}, Data Invertida: ${item.reversedDate}`);

  });
}

const reg = route.params.id
const logon = useCookie('logon')
logon.value = reg
console.log(logon.value);

console.log(reg);

const navbarOpen = ref(false);
function openNavbar() {
  navbarOpen.value = !navbarOpen.value;
}

const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
}

const logOff = () => {
  logon.value = null
}

const tag = useCookie('tag')
tag.value = tag.value

const plusYes = ref(false)
const buttonPlus = ref(true)
function plusButton() {
  buttonPlus.value = !buttonPlus.value,
    plusYes.value = !plusYes.value
}

const bodyOne = ref(true)
function menu() {
  bodyOne.value = !bodyOne.value
}
</script>
<template>

    <NuxtLayout>

      <div v-if="aval">
        
        <div class="main-div-two">
            <h3>
            <Icon name='solar:clipboard-heart-bold' /> AVALIAÇÕES
            </h3>
        </div>
        
        <div class="main-div-two" v-for='(item, index) in aval' :key='index'>
            
            <nuxt-link class="main-square" :to="`/users/${route.params.id}/avaliacao/${item.date}`">
                <div>
                <h4>
                    <Icon name='material-symbols:event' />
                </h4>
                <h4>
                    {{ item.reversedDate }}
                </h4>
                </div>
                
                <div>
                    <h4>
                        <Icon name="fa6-solid:weight-scale" />
                    </h4>
                    <h4>
                    {{ item.massa }} kg
                    </h4>                                  
                </div>
                <div>
                                    
                    <h4 style="font-weight: 900;color: #00dc82; zoom: 1.6; margin-bottom: -5px;">
                        %G
                    </h4>
                    <h4>
                        {{ item.percentualFat }} %
                    </h4>
    
                </div>
            </nuxt-link>
    </div>
    </div>

    <div v-else>
        <div class="main-div-tree">
            <h3>
                <Icon name='solar:clipboard-heart-bold' /> AVALIAÇÕES
                </h3>
                
                <a href="https://cal.com/leandrocesar/personal" target="_blank" class="main-square">
                
                
                
                <div>
                    <h4>
                    <Icon name='material-symbols:event' />
                    </h4>
                    <h4>
                    Clique aqui e agende sua Avaliação!!
                    </h4>
                </div>
                </a>
            </div>
            </div>
            <br>
            <!-- <div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline"></div> -->
    <br>
    <br>
    
    
    
    
              </NuxtLayout>
              </template>

<style scoped>
.head-logo {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: flex-start;
  z-index: 1;
  flex-wrap: wrap;
  
}

.logo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: #edf2f7;
  height: 60px;
  width: 60px;
  color: #718096;
  box-shadow: 1px 7px 20px #00dc82;
  margin: 1.5rem;
  border-radius: 7px;
  z-index: 10;
}

.logo img {
  height: 60px;
  width: 60px;
  border-radius: 7px;
  border: #00dc82 2px solid;
  z-index: 100;
  opacity: 1;

}

.nav-bar {
  z-index: 1004;
  transform: translateX(0%);
  position: fixed;
  height: calc(100% - 0px);
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

.logo-nav-bar {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1004;
  transform: translateX(0%);
  position: fixed;
  height: calc(100% - 0px);
  bottom: 0px;
  width: 100%;
  backdrop-filter: blur(5px);
  background-color: #ffffff50;

}

.logo-nav-bar img {
  box-shadow: 1px 7px 20px #00dc82;
  height: 300px;
  width: 300px;
  border-radius: 7px;
  border: #00dc82 2px solid;
  z-index: 100;
  opacity: 1;

}

.button-client {
  margin: 1.2rem 1.5rem;
  transition: all .4s linear;
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-text);
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  zoom: 1.3;
}

.button-client:hover {
  color: #00dc8280;
}

.button-client .icon {
  margin-top: -5px;
  margin-right: 5px;
  color: var(--color-text);
  transition: all 0.2s ease-in-out 0s;
}

.button-client:hover .icon {
  color: #00dc8280;
}

.head-name {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
}


.name {
  font-size: 1.6rem;
  line-height: 1.5rem;
  margin: .2rem 1.5rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #00dc82;

}

.email {
  font-size: .8rem;
  line-height: 1.5rem;
  margin: .2rem 1.6rem;
  font-weight: 700;
  letter-spacing: 1.1px;
  color: var(--color-text);

}

.whats {
  position: fixed;
  bottom: 4.5rem;
  right: .1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: #edf2f7;
  height: 40px;
  width: 40px;
  color: #718096;
  box-shadow: 1px 1px 15px #00dc8250;
  transition: all 0.2s ease-in-out 0s;
  margin: 0rem 1.5rem;
  border-radius: 50%;
  cursor: pointer;
}

.whats:hover {
  background-color: #00dc8210;
  color: #00dc8280;
  box-shadow: 1px 1px 15px #00dc8280;
}

.body-timeline {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
  margin: 2rem 10px 120px 10px;
}

.main-logo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: #edf2f7;
  height: 100px;
  width: 100px;
  color: #718096;
  box-shadow: 1px 7px 20px #00dc82;
  margin: 1.5rem;
  border-radius: 7px;
}

.main-logo img {
  height: 100px;
  width: 100px;
  border-radius: 7px;
  border: #00dc82 2px solid;
  opacity: 1;

}

.body-timeline p {
  text-align: left;
  margin: 0 10px 20px 20px;
  color: var(--color-text);
}

.link {
  text-decoration: underline;
}

.link:hover {
  color: #00dc82;
}

.section-title {
  color: var(--color-text);
  text-align: left;
  margin: 10px 1.5rem;
  font-weight: 800;
}

.section-subtitle {
  color: #00dc82;
  text-align: left;
  margin: -10px 1.5rem 15px;
  font-weight: 800;
  font-size: .9em;
}

.section-option {
  text-align: left;
  margin: -10px 1.5rem 15px;
  font-size: .8em;
  font-weight: 800;
}

.section-option .icon {
  zoom: .8;
  margin-top: -3px;
}

.verified {
  color: green;
}

.pending {
  color: #e1a918;
}

.bloqued {
  color: #b30000;
}


.conf {
  display: flex;
  flex-direction: row;
  justify-content: center;

}

.menu-square {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 800;
  width: 49.6%;
  padding: 5px;
  border-radius: 8px;
  margin: 1px auto;
  color: #00dc82;
  background-color: #00dc8210;
  border: solid .2px #00dc8210;
}

.menu-square div .icon {
  margin: 3px 0px;
  transition: transform .3s linear;
  transform: translateX(-10px);
}

.menu-square div {
  display: flex;
  flex-direction: column;
  font-size: 1em;
  justify-content: center;
  margin: 2px auto;
}

.menu-square div:nth-child(2) {
  display: flex;
  flex-direction: column;
  font-size: .7em;
  justify-content: center;
  margin: 2px auto;
  color: var(--color-text);
}

.menu-square div:nth-child(3) {
  display: flex;
  flex-direction: column;
  font-size: .7em;
  justify-content: center;
  margin: 2px auto;
  color: #002aff;
}

.menu-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 800;
  width: 100%;
  padding: 5px;
  margin: 1px auto;
  border: solid 1px #00dc8210;
  color: var(--color-text);
  background-color: #fff;
  border-bottom: solid .2px #00dc8230;
  border-top: solid .2px transparent;
}

.menu-button div {
  display: flex;
  flex-direction: row;
  font-size: .8em;
  justify-content: space-between;
  margin-top: 2px;
}

.menu-button .icon {
  margin: 2px 0px 0px 26px;
  transition: transform .3s linear;
  transform: translateX(-15px);
}

.menu-button .icon:nth-child(2) {
  margin: 5px 0px 0px 26px;
  transition: transform .3s linear;
  transform: translateX(-25px);
}

.menu-button:hover {
  background-color: #00dc8210;
  color: #00dc8280;
  cursor: pointer;
  border-bottom: solid .2px #00dc8250;
}


.menu-button:hover .icon:nth-child(2) {
  transform: translateX(-15px);
}

.logout {
  position: fixed;
  bottom: 15px;
  left: 50%;
  width: 250px;
  margin-left: -125px;
  transition: all .4s linear;
  border: solid 1px #00dc8210;
  color: var(--color-text);
  box-shadow: 0 0px 5px #00dc8210;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  line-height: 18px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  height: 34px;
  font-size: 14px;
  padding-inline: 16px;
  padding-top: 6px;
  padding-bottom: 8px;
}

.logout .icon {
  margin: 1px 0px 0px 6px;
  transition: transform .3s linear;
  transform: translateX(8px);
}

.logout:hover {
  background-color: #00dc8210;
  color: #00dc8280;
  cursor: pointer;
}

.logout:hover .icon {
  margin: 1px 0px 0px 6px;
  transform: translateX(0px);
}



.main-div-two {
  margin-top: 1rem;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}

.main-div-two .icon {
  color: #00dc82;
  zoom: 1.3;
  margin-top: -4px;
}

.main-square {
  color: var(--color-text);
  background-color: #00dc8210;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0rem 1.5rem;
  border-radius: 10px;
  border: .1px solid #00dc8210;
  line-height: 1.4;
  transition: all .4s;
  border: 2px solid #00dc8210;
}

.main-square:hover {
  background-color: #00dc8230;
  border-right: 1px solid #00dc8230;
  
    border: 2px solid #00dc8220;
    border-top: 2px solid #00dc8240;
    border-bottom: 2px solid #00dc8240;
}

.main-square div:nth-child(1) {
  padding-right: 20px;

}

.main-square div:nth-child(2),
.main-square div:nth-child(3) {
  margin: auto;
  border: none;
}

.main-div-two h3 {
  margin-left: 20px;
  margin-top:10px;
}

.main-div-two h4 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.main-div-two a div {
  border-right: 2px solid #00dc8210;
  margin-left: 15px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-div-two h4 .icon {
  margin-left: 1px;
}

.main-div-two div .icon {
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  zoom:1.2;
}

.main-div-one {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 90px;
  width: 100%;
}

.main-div-one .icon {
  zoom: 1.3;
  color: #00dc82;
  margin-top: -2.5px;
}


.main-div-tree {
  margin-top: .5rem;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}

.main-div-tree H3 {
  margin: 1rem;
  margin-left: 20px;
}

.main-div-tree .icon {
  color: #00dc82;
  margin-top: -4px;
}

.main-div-tree h4 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.main-div-tree a div {
  margin: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-div-tree h3 .icon {
  margin-left: 1px;
  zoom: 1.3;
}

.main-div-tree div .icon {
  zoom: 1.3;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}


@media only screen and (max-width: 370px) {
  .head-logo {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: center;
    flex-wrap: wrap;
  }

  .logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .logo img {
    height: 100px;
    width: 100px;
    border-radius: 7px;
    border: #00dc82 2px solid;

  }

  .button-client {
    margin: 2rem 1.5rem 1rem 1.5rem;
  }

  .head-name {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }


  .name {
    font-size: 1.6rem;
    line-height: 1.5rem;
    margin: .2rem 1.5rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-align: center;
  }

  .whats {
    margin: 1rem 1.5rem;
  }

  .category {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }

  .category-plus {
    display: flex;
    flex-direction: column-reverse;
  }

  .button-plus a {
    margin: 1.5rem auto;
    cursor: pointer;
    transition: all .4s linear;
    border: solid 1px #00dc8210;
    box-shadow: 0 0px 5px #00dc8210;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    color: var(--color-text);
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    font-size: 14px;
    padding: 8px 20px;
    text-align: center;
  }

  .button-plus a .icon {
    margin: 0 -8px 0 -5px;
  }

  .button-plus a:hover {
    margin: 0rem auto;
    transition: all .4s linear;
    border: solid 1px #00dc8210;
    box-shadow: 0 0px 5px #00dc8210;
    background-color: #edf2f7;
    cursor: pointer;
    width: 100px;
    text-align: center;
    color: #00dc8280;
    line-height: 18px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

}
</style>
    
