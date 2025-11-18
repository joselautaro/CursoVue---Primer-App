<template>
    <div>
        <p :style="{color: textoColor, fontSize: fontSize + 'px'}">
            Texto con estilo dinámico
        </p>
        <button @click="changeColor">Cambiar color</button>
        <button @click="changeFontSize">Cambiar tamaño</button>

    </div>
</template>
<script setup>
    import { ref } from 'vue';


    const textoColor =ref('black');

    const fontSize = ref(16);

    const changeColor = () =>{
        textoColor.value = textoColor.value === 'black' ? 'red' : 'black'
    }

    const changeFontSize = () =>{
        fontSize.value += 2
        if(fontSize.value > 24) fontSize.value = 16;
    }
</script>