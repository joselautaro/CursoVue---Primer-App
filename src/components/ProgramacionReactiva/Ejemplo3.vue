<template>
    <form @submit.prevent="submitForm">
        <input type="text" v-model="formData.name" placeholder="nombre">
        <input type="text" v-model="formData.email" placeholder="email">
        <button type="submit">enviar</button>
    </form>
</template>

<script setup>
    import { reactive } from 'vue';

    const formData = reactive({
        name: '',
        email: ''
    })

    const submitForm = () =>{
        console.table('Formulario enviado', formData);
    }
</script> 