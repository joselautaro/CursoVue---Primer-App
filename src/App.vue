<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import Hijo5 from './components/Props/Hijo5.vue';
// import Hijo6 from './components/Props/Hijo6.vue';
// import Padre6 from './components/Props/Padre6.vue';
// import Ejemplo1 from './components/ProgramacionReactiva/Ejemplo1.vue';
// import Ejemplo2 from './components/ProgramacionReactiva/Ejemplo2.vue';
// import Ejemplo3 from './components/ProgramacionReactiva/Ejemplo3.vue';
// import Ejemplo4 from './components/ProgramacionReactiva/Ejemplo4.vue';
import Ejemplo5 from './components/ProgramacionReactiva/Ejemplo5.vue';
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Tu puedes hacerlo!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
  <h1>Hola Mundo</h1>
  <!-- <Hijo5/>
  <Padre6/>
  <Ejemplo1/> -->
  <!-- <Ejemplo2/> -->
   <!-- <Ejemplo3/> -->
    <!-- <Ejemplo4/> -->
     <Ejemplo5/>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
