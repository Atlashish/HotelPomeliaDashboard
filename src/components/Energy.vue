<script setup>

import { fetchAPI } from '../main';
import Singlequad from './Singlequad.vue';

import { ref } from 'vue';

const urlAPI = 'https://ott-fogliata.github.io/vuejs-s2i-repository/solar-panels.json#'
const powerProduction = ref(0);
const monthEnergy = ref(0);
const todayEnergy = ref(0);
const leftTimeEnergy = ref(0);

function energyData(data) {
    powerProduction.value = data['power-production'];
    monthEnergy.value = data['month-energy'];
    todayEnergy.value = data['today-energy'];
    leftTimeEnergy.value = data['left-time-energy'];
}

fetchAPI(urlAPI, energyData);


</script>

<template>
    <Singlequad :value="powerProduction"/>
    <Singlequad :value="monthEnergy"/>
    <Singlequad :value="todayEnergy"/>
    <Singlequad :value="leftTimeEnergy"/>
</template>

<style scoped></style>