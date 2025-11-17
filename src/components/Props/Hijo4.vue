<template>
    <ul>
        <li v-for="(dato, index) in lista" :key="index">
            {{ dato }}
        </li>
    </ul>
</template>
<script setup>
    defineProps({
        lista: Array
    })
</script>