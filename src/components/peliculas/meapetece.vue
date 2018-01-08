<template>
<div id="meapetece">
        <generos class="GenerosBottom container"></generos>
        <filtrosgeneros></filtrosgeneros>
</div>     
   
</template>


<script>

</script>

<script>


import generos from './generos.vue';
import filtrosgeneros from './filtrosGeneros.vue';
  export default {
    name: 'meapetece',
    components: {
   
'generos':generos,
'filtrosgeneros':filtrosgeneros
     
    },}
</script>