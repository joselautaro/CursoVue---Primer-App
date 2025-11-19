<template>
        
        <p v-if="productosFiltrados.length === 0">No se encontrados productos</p>
        <div class="grid">
            <ProductoCard v-for="p in productosFiltrados" :key="p.id" :producto="p" @agregar="onAgregar" />
        </div>
    
</template>
<script setup>
import { computed } from 'vue';
import ProductoCard from './ProductoCard.vue';

const emit = defineEmits(['agregar-al-carrito']);

const productos = [
    { id: 1, nombre: 'Zapatillas Urbanas', precio: 35000 },
    { id: 2, nombre: 'Remera Oversize', precio: 12000 },
    { id: 3, nombre: 'Gorra Negra', precio: 8000 },
    { id: 4, nombre: 'Jean Tiro Alto', precio: 22000 },
]

const props = defineProps({
    filtro: {type: String, default: ''}
})

const productosFiltrados = computed(() =>{
    if(!props.filtro) return productos;
    const termino = props.filtro.toLowerCase();
    return productos.filter(p => p.nombre.toLowerCase().includes(termino));
})

const onAgregar = (producto) => {
    emit('agregar-al-carrito', producto)
}

// export default{
//     name: 'ListaProductos',
//     components: {ProductoCard},
//     props:{filtro: {type: String, default: ''}},
//     data(){
//         return{
//             productos: [
//                 {id: 1, nombre: 'Zapatillas Urbanas', precio: 35000},
//                 {id: 2, nombre: 'Remera Oversize', precio: 12000},
//                 {id: 3, nombre: 'Gorra Negra', precio: 8000},
//                 {id: 4, nombre: 'Jean Tiro Alto', precio: 22000},
//             ]
//         };
//     },
//     computed:{
//         productosFiltrados(){
//             if(!this.filtro) return this.productos;
//             const termino = this.filtro.toLowerCase();
//             return this.productos.filter(p => p.nombre.toLowerCase().includes(termino));
//         }
//     },
//     methods:{
//         empaquetarYEmitir(producto){
//             this.$emit('agregar-al-carrito', {...producto});
//         }
//     }
// };
</script>
<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}
</style>