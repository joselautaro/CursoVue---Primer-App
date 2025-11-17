<template>
    <p>{{ mensaje }}</p>
</template>
<script setup>

    defineProps({
        mensaje:{
            type: String,
            default: 'Este es un mensaje por defecto'
        }
    })
</script>