<script setup>

import { ref, onMounted } from 'vue';

const powerProduction = ref('');
const monthEnergy = ref('');
const todayEnergy = ref('');
const leftTimeEnergy = ref('');

function fetchAPI() {
    try {
        fetch('https://ott-fogliata.github.io/vuejs-s2i-repository/solar-panels.json#')
        .then(response => response.json())
        .then(data => {
            powerProduction.value = data['power-production'];
            monthEnergy.value = data['month-energy'];
            todayEnergy.value = data['today-energy'];
            leftTimeEnergy.value = data['left-time-energy'];


        })
    } catch (error) {
        console.error(error);
    }
    
}

onMounted(() => {
    fetchAPI();      
})

</script>

<template>
    <div class="rectangle-1">
        <div class="container">
            <div class="title-container">
                <h2 class="title">Power Production</h2>
            </div>
            <div class="api-container">
                <h1 class="api">{{ powerProduction }} kW</h1>
            </div>
        </div>
    </div>
    <div class="rectangle-1">
        <div class="container">
            <div class="title-container">
                <h2 class="title">This Month's Energy</h2>
            </div>
            <div class="api-container">
                <h1 class="api">{{ monthEnergy }} kWh</h1>
            </div>
        </div>
    </div>
    <div class="rectangle-2">
        <div class="container">
            <div class="title-container">
                <h2 class="title">Today's Energy</h2>
            </div>
            <div class="api-container">
                <h1 class="api">{{ todayEnergy }} kWh</h1>
            </div>
        </div>
    </div>
    <div class="rectangle-2">
        <div class="container">
            <div class="title-container">
                <h2 class="title">Left Time Energy</h2>
            </div>
            <div class="api-container">
                <h1 class="api">{{ leftTimeEnergy }} kWh</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
.rectangle-1 {
    display: flex;
    justify-content: center; 
    align-items: last baseline;
    width: 100%;
    height: 100%;
    /* background-color: green; */
}

.rectangle-2 {
    display: flex;
    justify-content: center; 
    width: 100%;
    height: 100%;
    /* background-color: green; */
}

.container {
    display: flex;
    flex-direction: column;
    background-color: wheat;
    width: 100%;
    height: 80%;
    padding: 8px;
    border-radius: 5px;
    outline: 2px solid rgb(119, 62, 1);
}

.title-container {
    display: flex;
    justify-content: baseline;
    width: 100%;
    height: 20%;
}

.title {
    color: rgb(0, 0, 0);
    font-size: 18px;
}

.api-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
    font-size: 35px;
}
</style>