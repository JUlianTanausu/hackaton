<template>
 <div class="container">
        <div class="col-md-12 espacio-logo2">
              <img src="src/assets/FINBOT_logo.gif" class="col-md-2 offset-md-5" alt="FinBot_logo">
            <h1 class="col-md-2 offset-md-5 titular-app">FINBOT</h1>
            <h3 class="col-md-5 second-app">Tu asistente financiero</h3>
        </div>
        
        <form class="col-md-12">
            <div class="form-group">
                <input type="email" class="form-control col-md-6 offset-md-3 espacio-campos" id="name" placeholder="Escribe tu email">
                <input type="password" class="form-control col-md-6 offset-md-3 espacio-campos" id="pass" placeholder="Contraseña">
                <input type="password" class="form-control col-md-6 offset-md-3" id="pass" placeholder="Repite contraseña">
            </div>
            <div class="row">
                <input type="button" value="CREAR CUENTA" v-on:click="crearUsuario(juan, juan),cambiarPagina(2)" class="col-md-4 offset-md-4 btn-log-sign">
            </div>  
        </form>

        <div class="row">
            <div class="col-md-3 caja-registro2">
                <a v-on:click="cambiarPagina(0)">LOGIN</a>
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
      
       
       msg      : 'correo',

   
   
       
    }
  },
  

 
 

 
  
  methods: {

    
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
