<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    logs: Array
})

// Function to determine the CSS class based on the log type
const logTypeClass = (type) => {
  switch (type) {
    case 'info':
      return 'info';
    case 'warning':
      return 'warning';
    case 'error':
      return 'error';
    default:
      return ''; 
  }
};

</script>

<template>
    <div class="log-rectangle">
        <div class="title-row">
            <h1 class="title">Logs</h1>
        </div>
        <!-- Iterate over logs and display each log in a row -->
        <div class="row" v-for="(log, index) in logs" :key="index" :class="logTypeClass(log.type)" >
            <div class="col-1"><h6 class="log-date">{{ log.date }}</h6> </div>
            <span class="line">|</span>
            <div class="col-2"><h4 class="log-text">{{ log.text }}</h4></div>
        </div>
    </div>
</template>

<style scoped>
.log-rectangle {
    height: 45%;
    width: 100%;
    background-color: #df816cd3;
    color: rgb(0, 0, 0);
    padding: 5px;
    border-radius: 5px;
    border: 2px solid rgb(149, 2, 2);
    -webkit-box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.6);
    box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.6);
}

.log-rectangle{
    cursor: default;
}

.title-row {
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-style: italic;
    color: rgb(0, 0, 0);
}

.row {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 37px;
}

.col-1 {
    text-align: center;
    width: 20%;
    font-size: 15px;
}

.col-2 {
    width: 80%;
    font-size: 13px;
    margin-left: 5px;
}

.info{
    color: greenyellow;
}

.error{
    color: rgb(255, 0, 0)
}

.warning{
    color: yellow;
}

.log-date{
    font-size: 11px;
}

.log-text{
    font-size: 14px;
}

.log-date, .line, .log-text{
    text-shadow: #000000 1px 1px 0;
}

@media only screen and (max-width: 950px){
    .log-rectangle{
        font-size: 10px;
    }
}
</style>