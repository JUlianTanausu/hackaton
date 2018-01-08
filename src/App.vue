<template>


  <div id="app" >
   

  

    <div id="menufinbot">
     
  </div>




     <div id="calendario" style="display:none">
       <menufinbot></menufinbot>
      <calendario></calendario>
  </div>



       
       <div v-if="paginas==0"> 
         <!-- <animacion id="animacion"></animacion>-->
       <login></login>
       

      </div> 
   
      
 
    

            <div id="Preferencia" v-if="paginas==1">
             
            <!-- <formulario></formulario>-->
             <formulario></formulario>
            </div>


          <div id="Preferencia" v-if="paginas==2">
             
            
             <comienzo></comienzo>
            </div>

            <div id="Preferencia" v-if="paginas==8">
             
            <!-- <formulario></formulario>-->
             <listacompra></listacompra>
            </div>
    

    <div id="Preferencia" v-if="paginas==4">
             
            <!-- <formulario></formulario>-->
                        <menufinbot></menufinbot>

             <porcentajes></porcentajes>
            </div>

            



              <div id="Preferencia" v-if="paginas==5">
             
            <menufinbot></menufinbot>
             <logros></logros>
            </div>
    
    
    <div id="Perfil" v-if="paginas==6">
             
            <menufinbot></menufinbot>
             <comienzo></comienzo>
    </div>


     <div id="gastos" v-if="paginas==7">
             
            <menufinbot></menufinbot>
             <opciones></opciones>
    </div>

      <div id="gastos" v-if="paginas==9">
             
            <menufinbot></menufinbot>
             <checkLista></checkLista>
    </div>

    <div id="gastos" v-if="paginas==11">
             
            <menufinbot></menufinbot>
             <ingresos></ingresos>
    </div>



         
  <div id="progreso" style="display:none;">
      <progreso></progreso>
  </div>
  




 







        </div>





  </div>
  
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';



import animacion from './components/animacion/animacion.vue';



import preferencia from './components/peliculas/preferencia.vue';
import reto from './components/peliculas/reto.vue';
import generos from './components/peliculas/meapetece.vue';
import miniaura from './components/animacion/miniaura.vue';

import despliegue from './components/menuAura.vue'
import formulario from './components/formulario.vue'
import login from './components/login.vue'
import calendario from './components/calendario.vue'
import comienzo from './components/comienzo.vue'
import progreso from './components/progreso.vue'
import menufinbot from './components/menufinbot.vue'
import checkLista from './components/checkLista.vue'
import opciones from './components/opciones.vue'



import listacompra from './components/listacompra.vue'
import porcentajes from './components/porcentajes.vue'
import logros from './components/logros.vue'
import gastos from './components/gastos.vue'
import ingresos from './components/ingresos.vue'









import peliculasGustos from './components/peliculas/peliculasGustos.vue';
import peliculasRecomendadas from './components/peliculas/peliculasRecomendadas.vue';
import perfil from './components/perfil.vue';
import recomiendaTarifas from './components/tarifas/recomiendaTarifas.vue';
import filtrosGeneros from './components/peliculas/filtrosGeneros.vue';

export default {

     computed: {
        paginas(){
            return this.$store.state.pagina;
        },
        generos(){
            return this.$store.state.generos;
        },

        ...mapGetters([
            'getpagina'
        ])
    },


  name: 'app',
  
  components: {
    animacion, formulario, login, calendario, comienzo,progreso,listacompra,porcentajes, logros,menufinbot,gastos,checkLista,opciones,ingresos
  },

  data () {
    return {
      cont: 0,
      activo:' ',
      aux: 0,
    }
  },
  mounted(){

 


  },

 
   methods: {

     

      ...mapActions([
          'cambiarPagina'
      ]),


     /*
        CONT
    -----------
    [0] login
    [1] registrarse
    [2] Comienzo
    [3] Calendario
    [4] Porcentajes
    [5] logros
    [7] opciones



     */
     login: function(){
      var user = document.getElementById("name").value
      var pass = document.getElementById("pass").value

       if (user=='Pepe' && pass=='pepe'){
         this.cambiarPagina(2);

       }
     },

    
     

   }
}
</script>