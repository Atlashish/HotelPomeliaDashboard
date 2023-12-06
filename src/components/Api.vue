<script setup>

import { defineProps, onMounted } from 'vue';

const props = defineProps({
    url: String,
    callback: Function,
});



function fetchAPI(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            callback(data);

        })
        .catch(error => {
            console.error(error);
        });
}

onMounted(() => {
    fetchAPI(props.url, props.callback);
})
</script>

<template></template>

<style scoped></style>