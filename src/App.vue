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
        <h1 id="logo-text"> <span id="pomelia">Hotel Pomelia</span> <span id="dashboard"> | DASHBOARD</span> </h1>
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

#pomelia{
  font-family: 'Ephesis', cursive;
}

#dashboard{
  font-family: 'Noto Sans Tangsa', sans-serif;
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
  /* background-color: rgba(255, 255, 255, 0.567); */
}


.right-side {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items :center;

  height: 83vh;
  width: 560px;
  /* background-color: rgba(165, 165, 169, 0.488); */
}

@media only screen and (max-width: 950px){

  body{
    background-image: none;
    background-color: skyblue;
    height: 100%;
  }
  .main-content{
    flex-direction: column;
    height: 100%;
  }

  .left-side{
    width: 80%;
    height: 60vh;
  }

  .right-side{
    width: 80%;
  }
   }


</style>
