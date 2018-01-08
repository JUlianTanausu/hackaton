<template>
<div id="programas">
        <generos class="GenerosBottom container"></generos>
        <filtroDuracion></filtroDuracion>
        <a class="botonAura col-md-3 offset-md-5 GenerosBottom" href="#">SUGIÉREME</a>
</div>     
   
</template>


<script>

</script>

<script>


import generos from './generos.vue';
import filtroDuracion from './filtroDuracion.vue';
  export default {
    name: 'programas',
    components: {
        'generos':generos,
        'filtroDuracion':filtroDuracion
     
    },}
</script>