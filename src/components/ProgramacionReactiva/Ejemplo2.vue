<template>

    <input type="text" v-model="nuevaTarea" @keyup.enter="agregarTarea" placeholder="agregar tarea">

    <div>
        <ul>
            <li v-for="tarea in tareas" :key="tarea.id">
                {{ tarea.texto }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const tareas = ref([]);

    const nuevaTarea = ref('');

    const agregarTarea = () =>{
        if(nuevaTarea.value.trim()){
            tareas.value.push({
                id: tareas.value.length + 1,
                texto: nuevaTarea.value
            })
            nuevaTarea.value = '';
        }
    }
</script>