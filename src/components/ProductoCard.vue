<template>
    <div class="producto-card">
        <h3>Nombre: {{ producto.nombre }}</h3>
        <p>Precio unitario:${{ producto.precio }}</p>
        <div class="cantidad-control">
            <button @click="decrementar">-</button>
            <span>{{ cantidadLocal }}</span>
            <button @click="incrementar">+</button>
            <button @click="emitirAgregar">Agregar (x {{ cantidadLocal }})</button>
        </div>
    </div>
</template>
<script setup>

    import { ref } from 'vue';

    const props = defineProps({
        producto: {type: Object, required: true}
    });

    const emit = defineEmits(['agregar']);

    const cantidadLocal = ref(1);

    const incrementar = () =>{
        cantidadLocal.value++
    }

    const decrementar = () =>{
        if(cantidadLocal.value > 1) cantidadLocal.value--;
    }

    const emitirAgregar = () =>{
        emit('agregar', {...props.producto, cantidad: cantidadLocal.value});
        cantidadLocal.value = 1;
    }

    // export default{
    //     name: 'ProductoCard',

    //     props:{
    //         producto:{
    //             type:Object,
    //             required: true
    //         }
    //     },

    //     data(){
    //         return{
    //             cantidadLocal:1
    //         };
    //     },

    //     methods:{
    //         incrementar(){
    //             this.cantidadLocal +=1;
    //         },

    //         decrementar(){
    //             if(this.cantidadLocal > 1) this.cantidadLocal -= 1
    //         },

    //         agregarCantidad(){
    //             this.$emit('agregar',{
    //                 ...this.producto,
    //                 cantidad: this.cantidadLocal
    //             });
    //             this.cantidadLocal = 1;
    //         }
    //     }

    // };


</script>

<style scoped>
.producto-card{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
}
.cantidad-control{
    display: inline-flex;
    gap: 8px;
    align-items: center;
    margin: 8px 0;
}
.cantidad-control > button{
    padding: 4px 8px;
}
</style>