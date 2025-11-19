<template>
    <div class="carrito">
        <h2>Carrito</h2>
        <p v-if="estado.items.length === 0">El carrito está vacio</p>
        <div v-else>
            <strong v-for="(item, idx) in estado.items" :key="item.id">

                {{ item.nombre }} - ${{ item.precio }} x {{ item.cantidad }} =
                ${{ item.precio * item.cantidad }}

                <button @click="reducirCantidad(idx)">-1</button>
                <button @click="quitar(idx)">❌</button>
            </strong>
        </div>
        <hr>
        <div v-if="estado.items.length > 0" class="resumen">
            <p>Total: ${{ total }}</p>
            <p>Cantidad total de productos: {{ cantidad }}</p>
        </div>
    </div>
</template>

<script setup>

import { useCarrito } from '@/composables/useCarrito';

const {estado, quitar, reducirCantidad, cantidad, total} = useCarrito();

// export default {
//     name: 'Carrito',

//     setup() {
//         const { estado, quitar, reducirCantidad, cantidad, total } = useCarrito();

//         return { estado, quitar, reducirCantidad, cantidad, total };
//     }
// }

</script>

<style scoped>
.carrito {
    padding: 12px;
    border-radius: 8px;
    background-color: black;
}

button {
    margin-left: 8px;
}

.resumen {
    margin-top: 12px;
    font-weight: bold;
}
</style>
