<template>
    <div>
        <button v-if="!showModal" @click="showModal = true">Abrir modal</button>
        <Teleport to="body">
            <div v-if="showModal" class="modal">
                <h3>Modal</h3>
                <p>Contenido del modal</p>
                <button @click="showModal = false">Cerrar</button>
            </div>

        </Teleport>
    </div>
</template>
<script setup>

import { ref } from 'vue';
const showModal = ref(false);
</script>

<style scoped>
.modal{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(66, 59, 59);
    padding: 20px;
    border: 1px solid white;
    border-radius: 10px;
}
</style>