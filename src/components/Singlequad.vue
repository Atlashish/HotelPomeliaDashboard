<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    value: Number
});

</script>

<template>

<div class="rectangle">
        <div class="container">
            <div class="title-container">
                <h2 class="title">{{ title }}</h2>
            </div>
            <div class="api-container">
                <h1 class="api">{{ value }} kW</h1>
            </div>
        </div>
    </div>

</template>

<style scoped>

.rectangle {
    display: flex;
    justify-content: center;
    align-items: center;
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
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
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
        width: 100%;
        height: 150px;
    }

    .rectangle-2 {
        align-items: last baseline;
        width: 100%;
        height: 150px;
    }
    

    .title{
        font-size: 14px;
    }

    .container {
        height: 100%;
    }

    .api-container {
        font-size: 20px;
    }
}

</style>