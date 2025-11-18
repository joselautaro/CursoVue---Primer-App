<template>
    <button @click="toggleVisibility">
        Mostrar u ocultar
    </button>

    <p v-if="isVisible">Este texto es visible</p>
    <p v-else>El texto está oculto</p>
</template>

<script setup>
    import { ref } from 'vue';
    const isVisible = ref(true);

    const toggleVisibility = () =>{
        isVisible.value = !isVisible.value;
    }
</script> 