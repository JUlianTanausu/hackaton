<template>
<div id="peliculasRecomendadas">

<!--<h1>{{pelicula.Peliculas}}</h1>-->
 <div id="1" class="col secundarias">
        <turecomendacion></tuRecomendacion>
        </div>
        <div class="container-fluid">
       <div id="2" class="col">
        <tusintereses class="sin-flechas"></tusIntereses>
        </div>
        <div id="3" class="col sin-flechas">
        <tusintereses2></tusIntereses2>
        </div> 
        </div>
        
</div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
 import turecomendacion from './tuRecomendacion.vue';
 import tusintereses from './tusIntereses.vue';
  import tusintereses2 from './tusIntereses2.vue';


  export default {
     computed: {
        generos(){
            return this.$store.state.generos;
        },

         cont(){
            return this.$store.state.cont;
        },
        pelicula(){
            return this.$store.state.pelicula;
        },

        ...mapGetters([
            'saleGeneros',
            'getcont',
            'getPeliculas'
        ])
    },


    name: 'recomendadas',
    components: {
    'turecomendacion':turecomendacion,
    'tusintereses':tusintereses,
    'tusintereses2':tusintereses2,

     
    },}
</script>