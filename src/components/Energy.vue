<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    powerProduction: Number,
    monthEnergy: Number,
    todayEnergy: Number,
    leftTimeEnergy: Number
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

}

.rectangle-2 {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.container {
    display: flex;
    flex-direction: column;
    background-color: rgba(245, 222, 179, 0.719);
    width: 100%;
    height: 80%;
    padding: 8px;
    border-radius: 5px;
    outline: 2px solid rgb(119, 62, 1);
    -webkit-box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.6);
    box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.6);
}

.container:hover{
    cursor: default;
}

.title-container {
    display: flex;
    justify-content: baseline;
    width: 100%;
    height: 20%;
}

.title {
    color: rgb(85, 85, 85);
    font-size: 18px;
    font-style: italic;
}

.api-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
    font-size: 35px;
}





@media only screen and (max-width: 950px) {
    .rectangle-1 {
        align-items: last baseline;
    }

    .container {
        height: 100%;
    }

    .api-container {
        font-size: 20px;
    }
}
</style>