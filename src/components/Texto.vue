<script setup>

const number = defineProps(['value'])

</script>

<template>
    <h1>Hello Word {{ number.value }}</h1>
</template>