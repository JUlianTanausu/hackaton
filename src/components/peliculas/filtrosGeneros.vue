<template>
<div id="filtros">
  <filtroAnho></filtroAnho>


     
        <!--  <a class="botonAura col-md-3 offset-md-5 GenerosBottom" href="#">SUGIÉREME</a> -->
    </div>
</template>

<script>

import filtroAnho from './filtroAnho.vue';

export default {
    name: 'filtrosgeneros',
    components:{
      'filtroAnho':filtroAnho,
     
    }
 }


</script>