import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'

export function fetchAPI(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            callback(data);

        })
        .catch(error => {
            console.error(error);
        });
}

createApp(App).mount('#app')
