<script setup>
import Weather from './components/Weather.vue';
import Energy from './components/Energy.vue';
import Logs from './components/Logs.vue';

</script>

<template>
  <body>

    <header>
      <div class="logo-container">
        <img id="logo" src="./assets/img/Logo.png" alt="logo" />
        <h1 id="logo-text"> <span>Hotel Pomelia</span> | DASHBOARD</h1>
      </div>
    </header>

    <main>
      <div class="main-content">
        <div class="left-side">
          <Energy />
        </div>

        <div class="right-side">
          <Weather />
          <Logs />
        </div>
      </div>
    </main>


  </body>
</template>

<style scoped>
body {
  background-image: url('./assets/img/pexels-ákos-szabó-440731.jpg');
  background-size: cover;
}

header {
  height: 7vh;
  background-color: rgba(18, 185, 0, 0.523);
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

.main-content {
  height: 93vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.left-side {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  height: 83vh;
  width: 58%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.567);
}


.right-side {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 83vh;
  width: 38%;
  background-color: rgba(165, 165, 169, 0.488);
}




</style>
