<template>
    <div>
        <Hijo6 :accion="miFuncion" />
    </div>
</template>
<script setup>
import Hijo6 from './Hijo6.vue';

const miFuncion = () => {
    alert('Botón clickeado');
}

</script>