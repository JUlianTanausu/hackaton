<template>
<div id="tuPelicula">
<div id="1">
        <pelicula></pelicula>
        </div>
        <div id="2">
            
   <contenido></contenido>
        
        </div>
        <div id="3">
        <tusintereses></tusIntereses>
        </div> 
</div>
</template>

<script>

 import pelicula from './pelicula.vue';
 import tusintereses from './tusIntereses.vue';
import contenido from './contenidoPelicula.vue'
  export default {
    name: 'recomendadas',
    components: {
    'pelicula':pelicula,
    'tusintereses':tusintereses,
'contenido':contenido
     
    },}
</script>