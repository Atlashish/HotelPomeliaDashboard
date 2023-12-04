<script setup>

import { ref, onMounted } from 'vue';

// Import the components that will be used in the main component
import Weather from './components/Weather.vue';
import Energy from './components/Energy.vue';
import Logs from './components/Logs.vue';

const powerProduction = ref(0);
const monthEnergy = ref(0);
const todayEnergy = ref(0);
const leftTimeEnergy = ref(0);
const logs = ref([]);

// Function to fetch data from the API
function fetchAPI() {
        fetch('https://ott-fogliata.github.io/vuejs-s2i-repository/solar-panels.json#')
            .then(response => response.json())
            .then(data => {

                // Updating reactive variables with the fetched data
                powerProduction.value = data['power-production'];
                monthEnergy.value = data['month-energy'];
                todayEnergy.value = data['today-energy'];
                leftTimeEnergy.value = data['left-time-energy'];
                logs.value = data.logs;

            })
    .catch (error => {
        console.error(error);
    });
  }

  onMounted(() => {
    fetchAPI();
})

</script>

<template>
 <body>
    <!-- Define the header of the page -->
    <header>
      <div class="logo-container">
        <img id="logo" src="./assets/img/Logo.png" alt="logo" />
        <h1 id="logo-text"> <span id="pomelia">Hotel Pomelia</span> <span id="dashboard"> | DASHBOARD</span> </h1>
      </div>
    </header>

    <!-- Define the main content of the page -->
    <main>
      <div class="main-content">
        <div class="left-side">
          <Energy :powerProduction="powerProduction" :monthEnergy="monthEnergy" :todayEnergy="todayEnergy" :leftTimeEnergy="leftTimeEnergy"/>
        </div>

        <div class="right-side">
          <Weather />
          <Logs :logs="logs"/>
        </div>
      </div>
    </main>

 </body>
</template>

<style scoped>
/* Set the background image of the body and size it to cover the entire page */
body {
 background-image: url('./assets/img/pexels-ákos-szabó-440731.jpg');
 background-size: cover;
}

/* Set the height, background color, and display properties of the header */
header {
 height: 7vh;
 background-color: rgba(18, 185, 0, 0.523);
}

/* Style the logo and the hotel name */
#pomelia{
 font-family: 'Ephesis', cursive;
}

.logo-container {
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
}

#logo {
 width: 45px;
 margin-right: 5px;
}

#logo-text {
 color: white;
 font-size: 25px;
}

#logo-text span {
 font-size: 18px;
}

/* Set the display properties of the main content and style the left and right sides */
.main-content {
 height: 93vh;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 padding: 20px;
}

.left-side {
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-gap: 10px;
 height: 83vh;
 width: 850px;
 padding: 10px;
}

.right-side {
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
 align-items :center;
 height: 83vh;
 width: 560px;
}

/* Define the media query for screens with a maximum width of 950px */
@media only screen and (max-width: 950px){
 body{
    background-image: none;
    background-color: #638fdc;
    height: 100%;
 }
 .main-content{
    flex-direction: column;
    height: 100%;
 }

 .left-side{
    width: 80%;
    height: 50vh;
 }

 .right-side{
    width: 80%;
 }
}

</style>
