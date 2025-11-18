<template>
    <div>
        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">
        <p>Nombre completo: {{ fullName }}</p>
    </div>
</template>

<script setup>
import {ref, computed} from 'vue';

const firstName = ref('');
const lastName = ref('');

const fullName = computed(() =>{
    return `${firstName.value} ${lastName.value}`.trim();
})
</script>