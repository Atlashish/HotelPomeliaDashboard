<script setup>
import { ref, onMounted, computed } from 'vue';

const urlAPI = "https://api.open-meteo.com/v1/forecast?latitude=41.8919&longitude=12.5113&current=temperature_2m,relative_humidity_2m,is_day,rain,cloud_cover,wind_speed_10m&hourly=temperature_2m&timezone=auto";
const temperature = ref('');
const day = ref('');
const rain = ref('');
const clouds = ref('');
const humidity = ref('');
const wind = ref('');

const fetchApi = (API) => {
    try {
        fetch(API)
            .then(response => response.json())
            .then(data => {

                humidity.value = data.current.relative_humidity_2m
                wind.value = data.current.wind_speed_10m   
                temperature.value = data.current.temperature_2m

                day.value = data.current.is_day
                clouds.value = data.current.cloud_cover
                rain.value = data.current.rain

        

            })
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    fetchApi(urlAPI);
})

</script>

<template>
    <div class="weather-rectangle">
        <div class="weather-rome">
            <div class="col-1">
                <img class="weather-icon" src="../assets/img/sun.png" alt="sun" v-if="day === 1 && rain === 0 & clouds <20" />
                <img class="weather-icon" src="../assets/img/moon.png" alt="moon" v-else-if="day === 0 && rain === 0 && clouds <20" />
                <img class="weather-icon" src="../assets/img/moon-cloudy.png" alt="moon-cloudy" v-else-if="day === 0 && rain === 0 && clouds >= 20 && clouds < 60" />
                <img class="weather-icon" src="../assets/img/raining.png" alt="rain" v-else-if="rain === 1" />
                <img class="weather-icon" src="../assets/img/sun-cloudy.png" alt="sun-cloudy" v-else-if="day === 1 && rain === 0 && clouds >= 20 && clouds < 60" />
                <img class="weather-icon" src="../assets/img/clouds.png" alt="clouds" v-else-if="clouds >= 60" />
                <h4> Humidity: {{ humidity }} %</h4>
                <h4> Wind Speed: {{ wind }} km/h</h4>

            </div>
            <div class="col-2">
                <h1 class="weather-temperature">{{ temperature }}°C</h1>
                <h1 class="weather-city">Rome</h1>
            </div>
        </div>
        <div class="weather-tick">
            <h1 class="counter">
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
            </h1>
        </div>
    </div>
</template>

<style scoped>
.weather-rectangle {
    height: 45%;
    width: 90%;
    background-color: rgba(158, 158, 158, 0.701);
    padding: 10px;
    border-radius: 10px;
}

.weather-rome {
    display: flex;
    height: 70%;
    width: 100%;
}

.col-1{
    width: 35%;
    height: 100%;
}

.col-2 {
    width: 35%;
    height: 100px;
}

.weather-icon {
    width: 100px;
    margin-bottom: 10px;
}

.col-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.weather-temperature {
    font-size: 50px;
}

.weather-city {
    font-size: 20px;
}

.weather-tick {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    width: 100%;
}



</style>