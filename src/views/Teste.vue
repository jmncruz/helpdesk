<script setup>
import Texto from '../components/Texto.vue'

let newArray = Array.from({ length: 90 }, (value, index) => index);

</script>

<template>
    <Texto :value="item" v-for="item in newArray"></Texto>
</template>
