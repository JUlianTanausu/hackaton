<template>
 <div class="container">
       
        <div class="row empujar-cajas">
                        <div class="col-md-2 offset-md-2">
                          <img src="src/assets/FINBOT_logo.gif">
                        </div>
                        <div class="col-md-5">
                          <div class="arrow_box">
                            <p>Hola, <strong class="nombre-usuario">Pepe</strong> soy FINBOT tu gestor financiero.</p>
                            <p>Para comenzar indica tus <strong>ahorros</strong>, tu <strong>nómina de trabajo</strong> y <strong>la meta</strong> que quieres proponerte.</p> 
                          </div>
                        </div>
         </div>


        <div class="container">



 <div class="cajitas" v-if="seleccionado==0">
             <div class="row empujar-cajas" >




                                <div class="col-md-2 offset-md-2 categoria1" v-on:click="selecion()">
                                   
                                    <img src="src/assets/img/iconos/hogar.png" class="col-md-6 paddingicono4">
                                    <h3>Gastos del hogar</h3>
                                  
                                </div>
                                <div class="col-md-2 offset-md-1 categoria2" v-on:click="selecion()">
                                    <img src="src/assets/img/iconos/transporte.png" class="col-md-8 paddingicono5">
                                    <h3>Transporte</h3></div>
                                <div class="col-md-2 offset-md-1 categoria3" v-on:click="selecion()">
                                    <img src="src/assets/img/iconos/restaurante.png" class="col-md-5 paddingicono6">
                                    <h3>Restauración</h3></div>
                            </div>


             <div class="row">
                            <div class="col-md-2 offset-md-2 categoria4" v-on:click="selecion()">
                                <img src="src/assets/img/iconos/salud.png" class="col-md-6 paddingicono4">
                                <h3>Salud</h3>
                            </div>
                            <div class="col-md-2 offset-md-1 categoria5" v-on:click="selecion()">
                                <img src="src/assets/img/iconos/ocio.png" class="col-md-6 paddingicono5">
                                <h3>Compras y ocio</h3></div>
                            <div class="col-md-2 offset-md-1 categoria6" v-on:click="selecion()">
                                <img src="src/assets/img/iconos/supermercado.png" class="col-md-6 paddingicono6">
                                <h3>Supermercado</h3></div>
                        </div>


 </div>


    <div class="cajitas" v-if="seleccionado==1">

        
            <div class="col-md-2 offset-md-2 categoria1"v-on:click="cambiarPagina(9)" >
            <h3>Crear Lista</h3>
            </div>

                            <div class="col-md-2 offset-md-1 categoria3" v-on:click="cambiarPagina(8)">
                                
                                <h3>Añadir varios</h3></div>





                 <div class="col-6 offset-md-3 empujar-cajas">
                              <div class="row campo-cantidad">
                                  <div class="col-md-2 valor">
                                    <img src="src/assets/img/iconos/money.png" class="icon-dinero">
                                  </div>
                                  <input class="col-md-9 offset-md-1" id="salario" ></input>
                              </div>
                        </div>

    </div>



                       


<div class="row">
                                    <div class="col-md-4 offset-md-4 btn-gastos">
                                    <a v-on:click="cambiar()">Añadir Gasto</a>
                                    </div>
                                  </div>



        </div>        




    </div>
 
  

</template>
<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {

  name: 'formulario',
  
  data () {
    return {
      
       seleccionado: 0,
       msg      : 'correo',

   
   
       
    }
  },
  

 
 

 
  
  methods: {



      selecion: function(){
          this.seleccionado=1;
      },

    
    crear: function(){
      var user = document.getElementById("name").value
      var pass = document.getElementById("pass").value
      var pass2 = document.getElementById("repitPass").value

       if (pass == pass2){
         this.cambiarPagina(1);

       }
     },


      ...mapActions([
          'cambiarPagina','crearUsuario'
      ]),

 

  




      
           
    }
}
</script>
