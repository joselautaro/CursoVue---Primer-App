<template>
    <button @click="accion">Hacer Click</button>
</template>

<script setup>
    defineProps({
        accion: Function
    })
</script>