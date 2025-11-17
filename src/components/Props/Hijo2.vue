<template>
    <div>
        <p>El número es: {{ numero }}</p>
    </div>
</template>

<script setup>
    defineProps({
        numero: number
    })
</script>