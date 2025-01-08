<template>
    
    <NuxtPage/>

</template>
<style scoped>
#grid {
    display: grid;
    grid-template-columns: 12rem 1fr;
    width: 100%;
    height: 100vh;
    font-size: .8rem;
}

#areaA {
    border-right: solid 1px #00DC8240;
    font-weight: bolder;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

#grid-two {
    display: none;
}

@media (max-width: 650px) {
    #grid {
        display: none;
    }

    #grid-two {
        display: inherit ;
    }

}

.logOut {
    border-top: solid 1px #00DC8240;
}

#areaA a {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    border-bottom: solid 1px #00DC8240;
    border-end-end-radius: 5px;
    border-start-end-radius: 5px;
}

#areaA a:hover {
    background-color: transparent;
    background: linear-gradient(to right, transparent 0%, transparent  50%, #00DC82 100%);
    color: #00DC82;
}

#areaA a.router-link-exact-active {
    background: linear-gradient(to bottom right, #00DC82 0%, #00DC82 50%, #00DC82 100%);
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

#areaA a.router-link-exact-active:hover {
    background: linear-gradient(to bottom right, #00DC82 0%, #00DC82 50%, #00DC82 100%);
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

#areaA a.router-link-exact-active:hover::after {
    background-color: var(--color-background);
    color: #00DC82;
    text-decoration: none;
    cursor: pointer;
}

#areaB {
    margin: 10px;
    border-radius: 5px;
    border: solid 1px #00DC8240;
    overflow-x: hidden; 
    overflow-y: auto; 
}

#areaB-A {
    border: solid 1px #00DC8240;
    margin: 10px;
    border-radius: 5px;
}

#areaB-B {
    border: solid 1px #00DC8240;
    margin: 10px;
    border-radius: 5px;
}

.nav-top {
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    z-index: 1;
    font-weight: bolder;
    border-bottom: .10px solid #00DC8240;
    backdrop-filter: blur(45px);
}

.clients span {
    border: 1px solid #00DC8290;
    padding: 3px 6px;
    border-radius: 5px;
    color: #00DC82;
    background-color: #00DC8230;
    margin-left: 3px;
}

.clientss {
    margin: 11px;
    display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
}

.clientss p {
    margin-top: 3px;
    margin-left: 3px;
}

.clientss span {
    border: 1px solid #00DC8290;
    padding: 1px 4px;
    border-radius: 5px;
    color: #00DC82;
    background-color: #00DC8230;
    margin-top: 1px;
    margin-left: 3px;
}

.link-menu {
    margin-top: 1px;
    margin-left: 8px;
    font-size: .9rem;
}

.notifications {
    border: solid 1px transparent;
    padding: 4px 5px;
    margin: 6px;
    border-radius: 5px;
    transition: all .5s linear;
    cursor: pointer;
}

.notifications:hover {
    padding: 4px 5px;
    border-radius: 5px;
    color: #00DC82;
}

.nav-users {
    position: sticky;
    top: 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    z-index: 1;
    height: 35px;
    font-weight: bolder;
    margin-bottom: 1rem;
    border-bottom: .10px solid #00DC8240;
    backdrop-filter: blur(45px);
}

.users-conf {
    margin: 16px;
}

.users-conf span {
    border: 1px solid #00DC8290;
    padding: 8px;
    border-radius: 5px;
    color: #00DC82;
    background-color: #00DC8230;
    margin-left: 3px;
}

.filter {
    border: solid 1px #00DC8290;
    background-color: #00DC8230;
    padding: 6px 7px;
    margin: 9px 35px;
    border-radius: 5px;
    transition: all .5s linear;
    cursor: pointer;
}

.filter:hover {
    border: solid 1px #fff;
    padding: 6px 7px;
    border-radius: 5px;
    color: #00DC82;
    background-color: #fff;
}

.users-list {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    z-index: 1;
    margin-bottom: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
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
    bottom: 6rem;
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #00DC8210;
    box-shadow: 0 0px 5px #00DC8240;
    backdrop-filter: blur(100px)
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
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #00DC8210;
    box-shadow: 0 0px 5px #00DC8240;
    backdrop-filter: blur(100px)
}

.whats .icon,
.color .icon {
    color: #00DC8290;
    zoom: 1;
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
    bottom: 6rem;
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #00DC8210;
    box-shadow: 0 0px 5px #00DC8240;
    backdrop-filter: blur(100px)
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
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #00DC8210;
    box-shadow: 0 0px 5px #00DC8240;
    backdrop-filter: blur(100px)
}

.whats .icon,
.color .icon {
    color: #00DC8290;
    zoom: 1;
}

.head-logo {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: flex-start;
    z-index: 1;
    flex-wrap: wrap;

}

.icon {
    zoom: 1;
}

.logo {
    display: flex;
    justify-content: center;
    flex-direction: flex-start;
    align-items: center;
    flex-wrap: wrap;
    height: 55px;
    width: 55px;
    background: linear-gradient(to bottom right, #34d399 0%, #34d39970 50%, #00f2ff90 100%);
    margin: 1.5rem;
    border-radius: 7px;
    z-index: 10;
}

.logo img {
    height: 49px;
    width: 49px;
    margin: -1px 0 0 -1px;
    border-radius: 7px;
    z-index: 100;
    opacity: 1;

}

.nav-bar {
    z-index: 200;
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
    transform: translateX(0%);
    position: fixed;
    bottom: 0px;
    height: calc(100% - 0px);
    width: calc(100% - 100px);
    background: linear-gradient(to bottom right, #34d399 0%, #34d39980 50%, #00f2ff90 100%);
    backdrop-filter: blur(5px);
    z-index: 1004;

}

.logo-nav-bar img {
    height: 300px;
    width: 300px;
    border-radius: 7px;
    border: #34d399 1px solid;
    opacity: 1;
    z-index: 100;

}

.button-client {
    margin: 1.2rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    zoom: 1.3;
}

.button-client .icon {
    zoom: .9;
    margin-right: -3px;
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
    color: #34d399;

}

.email {
    font-size: .8rem;
    line-height: 1.5rem;
    margin: .2rem 1.6rem;
    font-weight: 700;
    letter-spacing: 1.1px;

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
    height: 100px;
    width: 100px;
    box-shadow: 1px 7px 20px #34d399;
    margin: 1.5rem;
    border-radius: 7px;
}

.main-logo img {
    height: 100px;
    width: 100px;
    border-radius: 7px;
    border: #34d399 2px solid;
    opacity: 1;

}

.body-timeline p {
    text-align: left;
    margin: 0 10px 20px 20px;
}

.link {
    text-decoration: underline;
}

.link:hover {
    color: #34d399;
}

.section-title {
    text-align: left;
    margin: 10px 1.5rem;
    font-weight: 800;
}

.section-subtitle {
    text-align: left;
    margin: -10px 1.5rem 15px;
    font-weight: 800;
    font-size: .9em;
}

.section-subtitle-two {
    text-align: left;
    margin: -16px 1.5rem 15px;
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
    margin-bottom: 20px;
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
    border: solid .1px #34d39950;
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
    padding: 6px 2px 2px 2px;
    margin: 5px auto;
    border: solid 1px #34d39910;
    border-bottom: solid .1px #34d39940;
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
    margin: -2px 0px 0px 26px;
    transition: transform .3s linear;
    transform: translateX(-15px);
}

.menu-button .icon:nth-child(2) {
    margin: 5px 0px 0px 26px;
    transition: transform .3s linear;
    transform: translateX(-25px);
}

.menu-button:hover {
    cursor: pointer;
    border-bottom: solid .2px #34d399;
    background-color: #34d39910;
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
    border: solid .1px #34d39970;
    box-shadow: 0 0px 5px #34d39910;
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
    background-color: #34d39910;
    color: #34d39980;
    cursor: pointer;
}

.logout:hover .icon {
    margin: 1px 0px 0px 6px;
    transform: translateX(0px);
}

.nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    transition: all .4s linear;
    position: sticky;
    top: 20px;
    margin: 16px auto;
    box-shadow: 0 0px 5px #00f2ff10;
    border: solid 1px #34d39940;
    width: 90%;
    height: 50px;
    border-radius: 10px;
    z-index: 101;
    padding: 12.2px 8px 12px 12px;
    backdrop-filter: blur(100px)
}

.nav a {
    margin: 2px 2px;
    padding: 9px 12px 10px 9px;
    text-decoration: none;
    cursor: pointer;
}

.nav a.router-link-exact-active {
    background: linear-gradient(to bottom right, #34d39910 0%, #34d39910 50%, #34d39910 100%);
    margin: 1px 2px 0 2px;
    color: #34d399;
    padding: 9px 12px 10px 9px;
    border-radius: 9px;
    text-decoration: none;
    cursor: pointer;
}
a.router-link-exact-active .clients span {
    border: 1px solid #fff;
        padding: 3px 6px;
        border-radius: 5px;
        color: #00DC82;
        background-color: #fff;
        margin-left: 3px;
}

.nav a.router-link-exact-active:hover {
    margin: 1px 2px 0 2px;
    padding: 9px 12px 10px 9px;
    color: #34d399;
    background: linear-gradient(to bottom right, #34d39910 0%, #34d39910 50%, #34d39910 100%);
    color: #34d399;
    border-radius: 9px;
    text-decoration: none;
    cursor: pointer;
}

.nav a.router-link-exact-active:hover::after {
    position: absolute;
    top: 60px;
    left: 20px;
    background-color: var(--color-background);
    color: #34d399;
    border-radius: 9px;
    text-decoration: none;
    cursor: pointer;
    
}

.nav a:hover {
    background-color: transparent;
    color: #34d399;
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
    bottom: 6rem;
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #34d39910;
    box-shadow: 0 0px 5px #34d39940;
    backdrop-filter: blur(100px);
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
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #34d39910;
    box-shadow: 0 0px 5px #34d39940;
    backdrop-filter: blur(100px)
}

.whats .icon,
.color .icon {
    color: #34d39990;
    zoom: 1;
}

.theme {
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
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 1005;
    border: solid 1px #34d39910;
    box-shadow: 0 0px 5px #34d39940;
    backdrop-filter: blur(100px)
}

.theme .icon,
.color .icon {
    color: #34d39990;
    zoom: 1;
}
</style>
