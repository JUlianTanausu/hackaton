<template>
<div id="contenido" class="row">
<div class="col-md-10">

<h1>{{pelicula}}</h1>



      <div id="product-list-one">
 <ul>
            <li v-for="genero in saleGeneros">
                <span class="name">{{genero.seleccionado}}</span>
               
            </li>
        </ul>
       
</div>
        <trailers></trailers>
        <fotogramas></fotogramas>
       
    </div>    
      
</div>
</template>

<script>

import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

import trailers from './trailers.vue';
import fotogramas from './fotogramas.vue';
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
   
'trailers':trailers,
'fotogramas':fotogramas
     
    },}
</script>


<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
