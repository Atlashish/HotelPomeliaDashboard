<script setup>
import { ref, onMounted, computed } from 'vue';

// API URL for weather data
const urlAPI = "https://api.open-meteo.com/v1/forecast?latitude=41.8919&longitude=12.5113&current=temperature_2m,relative_humidity_2m,is_day,rain,cloud_cover,wind_speed_10m&hourly=temperature_2m&timezone=auto";

const temperature = ref('');
const day = ref('');
const rain = ref('');
const clouds = ref('');
const humidity = ref('');
const wind = ref('');
const counter = ref(getSecondsInDay());

// Function to fetch weather data from the API
function fetchApi(API) {
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
        .catch(error => {
            console.error(error);
        });
};

// Function to get the total seconds in the current day
function getSecondsInDay() {
    const now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

// Computed property to get individual digits for the counter
const counterDigits = computed(() => {
    const counterString = counter.value.toString().padStart(9, '0');
    return counterString.split('');
});

// Fetch API data on component mount and update the counter every second
onMounted(() => {
    fetchApi(urlAPI);
    setInterval(() => {
        counter.value++;
        if (counter.value >= 86400) {
            counter.value = 0;
        }
    }, 1000);
})

</script>

<template>
    <!-- Weather component template -->
    <div class="weather-rectangle">
        <div class="weather-rome">
            <div class="col-1">
                <!-- Weather icons based on current weather conditions -->
                <img class="weather-icon" src="../assets/img/sun.png" alt="sun"
                    v-if="day === 1 && rain === 0 && clouds < 20" />
                <img class="weather-icon" src="../assets/img/moon.png" alt="moon"
                    v-else-if="day === 0 && rain === 0 && clouds < 20" />
                <img class="weather-icon" src="../assets/img/moon-cloudy.png" alt="moon-cloudy"
                    v-else-if="day === 0 && rain === 0 && clouds >= 20 && clouds < 60" />
                <img class="weather-icon" src="../assets/img/raining.png" alt="rain" v-else-if="rain === 1" />
                <img class="weather-icon" src="../assets/img/sun-cloudy.png" alt="sun-cloudy"
                    v-else-if="day === 1 && rain === 0 && clouds >= 20 && clouds < 60" />
                <img class="weather-icon" src="../assets/img/clouds.png" alt="clouds" v-else-if="clouds >= 60" />
                <!-- Display temperature and city -->
                <h4 id="humidity"> 💧Humidity: {{ humidity }}%</h4>
                <h4 id="wind"> 🍃Wind Speed: {{ wind }}km/h</h4>

            </div>
            <div class="col-2">
                <h1 class="weather-temperature">{{ temperature }}°C</h1>
                <h1 class="weather-city">Rome</h1>
            </div>
        </div>
        <!-- Display counter digits -->
        <div class="weather-tick">
            <div v-for="(digit, index) in counterDigits" :key="index" class="digit">
                <h1>{{ digit }}</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
.weather-rectangle {
    height: 45%;
    width: 90%;
    background-color: rgba(158, 158, 158, 0.701);
    padding: 10px;
    border-radius: 50px;
    border: 2px solid rgb(53, 53, 53);
    -webkit-box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.6);
    box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.6);
}

.weather-rectangle:hover {
    cursor: default;
}

.weather-rome {
    display: flex;
    height: 70%;
    width: 100%;
}

.col-1 {
    width: 35%;
    height: 100%;
    font-size: 13px;

}

.col-2 {
    width: 35%;
    height: 100px;
}

.weather-icon {
    width: 100px;
    margin-bottom: 10px;
}

#humidity {
    color: rgb(0, 0, 0);
    font-style: italic;
}

#wind {
    color: rgb(0, 0, 0);
    font-style: italic;
}

.col-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.weather-temperature {
    font-size: 60px;
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

.digit {
    padding: 10px;
    border: 1px solid #ccc;
    margin-right: 3px;
    font-size: 12px;
}

@media only screen and (max-width: 950px) {
    .weather-rectangle {
        padding: 10px;
    }

    .weather-icon {
    width: 70px;
    margin-bottom: 20px;
}

.col-1{
    width: 40%;
}

.weather-temperature {
    font-size: 30px;
}

.weather-city {
    font-size: 15px;
}

#humidity {
    font-size: 10px;
}

#wind {
    font-size: 10px;
}

    .digit {
        font-size: 8px;
        padding: 5px;
    }
}
</style>