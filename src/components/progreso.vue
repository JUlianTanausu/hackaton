<template>
<div>
<h1>Para tu nueva meta llevas un {{(this.generos[0].saldo_actual*100)/(this.generos[0].meta)}} % completado, ánimo.</h1>

<div id="myProgress" style="width: 100%;
  background-color: #ddd;
  border-radius: 20%;">
 <div id="myBar" style=" width: 1%;
  height: 30px;
  background-color: #4CAF50;
  border-radius: 10%;"></div>
</div>
</div>


</template>
<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {

computed: {
       paginas(){
           return this.$store.state.pagina;
       },
       generos(){
           return this.$store.state.generos;
       },

       ...mapGetters([
           'getpagina','getGeneros'
       ])
   },
 name: 'formulario',
 
 data () {
   return {
     aux: 60,
   
     
   }
 },
 





 
 methods: {

    ...mapActions([
         'cambiarPagina'
     ]),

   
   crear: function(){
     var user = document.getElementById("name").value
     var pass = document.getElementById("pass").value
     var pass2 = document.getElementById("repitPass").value

      if (pass == pass2){
        this.cambiarPagina(1);

      }
    },


   login: function(){
     var user = document.getElementById("name").value
     var pass = document.getElementById("pass").value

      if (user=='Pepe' && pass=='pepe'){
        this.cambiarPagina(1);

      }
    },
   



 






     
         
   }
}
</script>