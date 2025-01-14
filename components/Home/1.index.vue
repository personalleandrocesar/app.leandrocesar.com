<script setup>
import { ref } from 'vue';
const pop = useCookie('pop', { maxAge: 7889400 })
pop.value = pop.value

const popOk = () => {
  return pop.value = "ok"
}

const popView = () => {
  if (pop.value === 'ok') {
    return false
  } return true
}

const divLogin = ref(false)
const divAtleta = ref(false)
const divCoach = ref(false)

function atleta () {
  divAtleta.value = true
  divLogin.value = false
}
function coach () {
  divCoach.value = true
  divLogin.value = false
}

function close () {
  divAtleta.value = false
  divCoach.value = false
  
}

</script>
<template>
      <div>
      
      
            <div v-if='divAtleta'>
            
                <div class='nav'>
                    <div>
                        <a @click="close">
                            <Icon name="ic:baseline-keyboard-arrow-left" /> Voltar
                        </a>
                    </div>
                </div>
                <Atleta1Index />
            </div>
            <div v-else-if='divCoach'>
                
                <div class='nav'>
                    <div>
                        <a @click="close">
                            <Icon name="ic:baseline-keyboard-arrow-left" /> Voltar
                        </a>
                    </div>
                </div>
                <Coach1Index />
            
            </div>
            <div v-else='divLogin'>
      <div>
          </div>
                <div class="link">
                <Atleta1Index />
            </div>
                <div class="lost">
                  <a>
                    <h5>
                    <NuxtLink @click='coach' class='it'>Personal, clique aqui !!</NuxtLink>
                    </h5>
                  </a>
                </div>
            
                    
            
      
          
          
      </div>
  

</div>
              <div v-if="popView()" class="pop-up">
              <p>
                  Neste app, usamos cookies e outras tecnologias semelhantes para melhorar sua
                  experiência e facilitar certos tipos de vantagens de navegação.
                  Ao clicar no botão abaixo, você está ciente e concordando com estas funcionalidades.
              </p>
              <div class="button-pop" @click="popOk()">PROSSEGUIR!</div>
              </div>
  </template>

<style scoped>
@media (max-width: 1000px) {
    .head-logo {
      margin-top: -15rem;
    }
}
.nav {
    position: fixed;
    top: 1.5rem;
    margin: 0rem 0 0 1.5rem;
}

.nav a {
    transition: all .4s linear;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-weight: 600;
    height: 34px;
    font-size: 16px;
    padding: 8px;
    
}

.nav a .icon {
    margin-top: -3px;
    margin-left: -5px;
}

.nav:hover a {
    color: #00dc82;
}

.nav div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
a {
  text-decoration: none;
  transition: all .3s linear;
  border: solid 2px transparent ;
}

.it {
    color: #04be7a;
    text-decoration: underline;
    cursor: pointer;
}

.button-close .icon{
    position: fixed;
    top: 2rem;
    right: 2rem;
    zoom: 1.2;
}

.form-personal {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    transform: translateX(0%);
    height: calc(100% - 0px);
    width: 100%;
    backdrop-filter: blur(55px);
    z-index: 1004;
}

.link {
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   margin-top: -3rem;
   font-size: 1.2rem;
}

.link a {
    letter-spacing: 3px;
    margin: 10px 15px;
    text-align: center;
    cursor: pointer;
    font-family: 'Gagalin';
    letter-spacing: 3px;
    padding: 10px 100px;
    border-radius: 200px;
    color: #04be7a;
}

.link a:nth-child(1){
    background: #04be7a;
    color: #fff;
}
.link a:nth-child(2){
    background: #00dc82;
    color: #fff;
}

.link  a:hover {
    opacity: .8;
    cursor: pointer;
}

.head-logo {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  z-index: 1;
  flex-wrap: wrap;
}
.senha {
  position: relative;
}

#password-icon {
  position: absolute;
  top: 19px;
  right: 12px;
  z-index: 100;
}

.swt {
display: flex;
justify-content: center;
flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}

h3 {
  margin: 30px 10px 0 10px;

}

.logo {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  height: 100px;
  width: 100px;
  box-shadow: 0px 7px 20px #00dc82;
  margin: 9rem 0 1.5rem 0;
  border-radius: 200px;
  z-index: 10;
}

.logo img {
  height: 100px;
  width: 100px;
  border-radius: 200px;
  border: #00dc82 2px solid;
  z-index: 100;
  opacity: 1;

}


.button-client {
  margin: 2rem 1.5rem;
  transition: all .4s linear;
  border: solid 1px #00dc8210;
  box-shadow: 0 0px 5px #00dc8210;
  border-radius: 8px;
  cursor: pointer;
  width: 160px;
  text-align: center;
  line-height: 18px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  height: 34px;
  font-size: 14px;
  padding-inline: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: #00dc82;
}

.button-client:hover {
  background-color: #00dc8210;
  color: #00dc8280;
}

.button-client .icon {
  margin-top: -5px;
  margin-right: 5px;
  transition: all 0.2s ease-in-out 0s;
}

.button-client:hover .icon {
  color: #00dc8280;
}

.head-name {
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
.name {
  font-family: 'Gagalin';
  src: url('~/assets/Gagalin.otf') format('opentype');
  letter-spacing: 3px;
  font-size: 2.2rem;
  line-height: 1.5rem;
  margin: .2rem 1.5rem;
  color: #00dc82;
}


.color {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  position: fixed;
  height: 35px;
  width: 35px;
  transition: all 0.2s ease-in-out 0s;
  bottom: 1.5rem;
  /* bottom: 6rem; */
  right:1.5rem;
  border-radius: 9px;
  cursor: pointer;
  z-index: 1;
}
.whats {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    height: 35px;
    width: 35px;
    transition: all 0.2s ease-in-out 0s;
    bottom: 3.5rem;
    right:1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #00dc8210;
    box-shadow: 0 0px 5px #00dc8240;
    backdrop-filter: blur(100px)
}
.whats .icon, .color .icon {
  color: #00dc8290;
  zoom: 1;
}

.inputs {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.inputs div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
}

.dont-user {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 200px;
  background-color: #ff1900;
  color: #fff;
  text-shadow: 2px 2px 2px #111;
  z-index: 20;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 5px;
  font-weight: bolder;
  padding: 8px 0px;
}

input {
  margin: .5rem auto;
  transition: all .4s linear;
  text-align: left;
  line-height: 18px;
  font-weight: 600;
  border-radius: 200px;
  transition: all 0.2s ease-in-out 0s;
  height: 36px;
  font-size: 14px;
  padding-inline: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.inputs div h4 {
  text-align: left;
}

input:focus-visible {
  border: solid 1px #00dc82;
  background-color: #00dc8210;
}

input:active {
  border-color: #00dc8280;
}

input:hover {
  background-color: #00dc8210;
}


input:focus {
  border: 0 none;
  border: solid 2px #00dc82;
  outline: 0;
}

h4 {
  transition: all .3s linear;
  margin: 0 0 0 10px;
  text-align: left;
}

h4:nth-child(1) {
  transition: all .3s linear;
  margin: 20px 0 0 10px;
}


.login {
  transition: all .4s linear;
  border: solid 2px #00dc82;
  cursor: pointer;
  width: 140px;
  text-align: center;
  line-height: 18px;
  border-radius: 200px;
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  height: 30px;
  font-size: 14px;
  padding-inline: 16px;
  padding-top: 6px;
  padding-bottom: 8px;
  margin: 1rem 1.5rem;
  background: #00dc82;
  color: #eee;
}

.lost h5{
  font-size: .6rem;
}

.login .icon {
  margin: -2px 0px 2px 4px;
  transition: transform .3s linear;
}

.login:hover {
  cursor: pointer;
  background-color: #00dc82;
  color: #fff;
}

.login:hover .icon {
  margin: -2px 0px 2px 4px;
  transform: translateX(6px);
}

.pop-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 20px 20px 20px;
  padding: 15px;
  border-radius: 8px;
  position: fixed;
  bottom: 10px;
  width: 80%;
  left: 50%;
  background-color: #00dc82 ;
  color: #fff;
  margin-left: -40%;
  font-weight: 900;
  border: solid 1px #00dc8210;
  z-index: 10000;
}

.pop-up p {
  font-weight: 700;
  font-weight: 900;
  font-size: 13px;
  color: #fff;
}

.button-pop {
  margin: 7px auto 0 auto;
  transition: all .4s linear;
  border: solid 1px #00dc82;
  box-shadow: 0 0px 5px #00dc8210;
  border-radius: 8px;
  cursor: pointer;
  width: 50%;
  text-align: center;
  border: solid 1px #dadada;
}

.button-pop:hover {
  border: solid 1px #fff;
}
</style>
