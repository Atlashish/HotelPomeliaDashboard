<script setup>
import { ref, onMounted } from 'vue';

const logs = ref('');


function fetchAPI() {
    try {
        fetch('https://ott-fogliata.github.io/vuejs-s2i-repository/solar-panels.json#')
            .then(response => response.json())
            .then(data => {
                logs.value = data.logs
            })
    } catch (error) {
        console.error(error);
    }

}

onMounted(() =>{
    fetchAPI();
});
</script>

<template>
    <div class="log-rectangle">
        <div class="title-row">
            <h1 class="title">Logs</h1>
        </div>
        <div class="row" v-for="(log, index) in logs" :key="index" >
            <div class="col-1"> {{ log.date }}</div>
            <div class="col-2">{{ log.text }}</div>
        </div>
    </div>
</template>

<style scoped>
.log-rectangle {
    height: 45%;
    width: 100%;
    background-color: rgb(255, 0, 64);
    padding: 5px;
}

.title-row {
    display: flex;
    justify-content: center;
    align-items: center;
}

.row {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 37px;
}

.col-1 {
    text-align: center;
    width: 30%;
    padding: 3px;
    border: 1px solid black;
    font-size: 15px;
}

.col-2 {
    width: 70%;
    padding: 3px;
    border: 1px solid black;
    font-size: 15px;
}
</style>