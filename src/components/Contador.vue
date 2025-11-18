<template>
    <div class="contador">
        <button>-</button>
        <span></span>
        <button>+</button>
    </div>
</template>

<script>

import { ref, computed, watch } from 'vue';

export default {

    props: {
        minimo: { type: Number, default: 0 },
        maximo: { type: Number, default: 10 }
    },

        setup(props) {
        const cuenta = ref(0);
        
        
        function incrementar() {
            if (cuenta.value < props.maximo) {
                cuenta.value += 1;
            }
        }
        
        function decrementar() {
            if (cuenta.value > props.minimo) {
                cuenta.value -= 1;
            }
        }

        const descripcion = computed(() => `Cuenta actual: ${cuenta.value}`);

        watch(
            cuenta,
            (nuevo, viejo) => {
                console.log('contador cambio de', viejo, 'a', nuevo);
            }
        )

        return {
            cuenta,
            incrementar,
            decrementar,
            descripcion
        };
    }
    
};
</script>