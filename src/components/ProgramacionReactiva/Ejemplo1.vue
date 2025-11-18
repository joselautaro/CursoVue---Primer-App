<template>

    <p>Contador: {{ count }}</p>
    
    <button @click="increment">Incrementar</button>
    <button @click="decrementar">decrementar</button>

</template>

<script setup>

        import {ref} from 'vue';

        const count = ref(0);

        const increment = () =>{
            count.value++
        }

        function decrementar(){
            count.value--;
            if(count.value <0){
                count.value = 0;
            }
        }

        // const decrementar = () =>{
        //     if(count.value > 0){
        //         count.value--
        //     }
        // }

</script>