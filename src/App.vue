<template>
    <div class="app">
        <header class="cabecera">
          <h1>Ecommerce</h1>
        </header>
        <main class="principal">
        <ListaProductos @agregar-al-carrito="handleAgregarAlCarrito"/>
        <Carrito/>
        </main>
    </div>
</template>
<script setup>

import Carrito from './components/Carrito.vue';
import ListaProductos from './components/ListaProductos.vue';
import { useCarrito } from './composables/useCarrito';

const {agregar} = useCarrito();

const handleAgregarAlCarrito = (producto) =>{
  agregar(producto)
}
// import Contador from './components/Contador.vue';

// export default{
//   components: {ListaProductos, Carrito},
//   methods:{
//     agregarAlCarrito(producto){
//       const {agregar} = useCarrito();
//       agregar(producto)
//     }
//   }

// }


</script>

<style scoped>
.app{
  width: 90%;
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
}
.cabecera{
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}
.principal{
  display: grid;
  grid-template-columns: repeat(2, 1fr) ;
  gap: 16px;
  margin-top: 20px;
}
</style>