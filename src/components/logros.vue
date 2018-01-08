<template>
 <div class="container">
       <div class="row empujar-cajas">
                        <div class="col-md-3 offset-md-2 mover-logo">
                          <img src="src/assets/FINBOT_logo.gif">
                        </div>
                        <div class="col-md-5">
                          <div class="arrow_box">
                            <p>Hola, <strong class="nombre-usuario">Pepe</strong> bienvenido a tu salón de trofeos, según vayas consiguiendo tus metas se irán acumulando como trofeos conseguidos, aquí puedes ver también el porcentaje que llevas completado para tu objetivo actual</p> 
                          </div>
                        </div>
                </div>

                <div class="row empujar-cajas">
                    <div class="col-md-3 empujar-iconos">
                      <div class="row campo-cantidad-s">
                          <div class="col-md-8 valor">
                            <img src="src/assets/hucha.gif" class="icon-hucha">
                          </div>
                          <input id="input_hucha" :value=saldo class="col-md-7" readonly>
                      </div>
                      </div>
                      
                </div>

                <div class="container">
                    <div class="timeline">
                        <div class="contenedor left">
                          <div class="content">
                            <img src="src/assets/img/iconos/bronce.png" class="icon-logro">
                            <p>Coneguiste ahorrar a final de mes 50€</p>
                          </div>
                        </div>
                        <div class="contenedor right">
                          <div class="content">
                              <img src="src/assets/img/iconos/bronce.png" class="icon-logro2">
                            <p>Coneguiste ahorrar a final de mes 50€</p>
                          </div>
                        </div>
                        <div class="contenedor left">
                          <div class="content">
                            <img src="src/assets/img/iconos/bronce.png" class="icon-logro">
                            <p>Coneguiste ahorrar a final de mes 50€</p>
                          </div>
                        </div>
                        <div class="contenedor right">
                          <div class="content">
                             <img src="src/assets/img/iconos/bronce.png" class="icon-logro2">
                            <p>Coneguiste ahorrar a final de mes 50€</p>
                          </div>
                        </div>
                        <div class="contenedor left">
                          <div class="content">
                              <img src="src/assets/img/iconos/bronce.png" class="icon-logro">
                            <p>Coneguiste ahorrar a final de mes 50€</p>
                          </div>
                        </div>
                        <div class="contenedor right">
                          <div class="content">
                              <img src="src/assets/img/iconos/bronce.png" class="icon-logro2">
                            <p>Coneguiste ahorrar a final de mes 50€</p>
                          </div>
                        </div>
                      </div>
                      

                </div>
                <!-- <div class="col-md-3 offset-md-1">
                          <div class="aclaracion2">
                         <p>Tu meta</p>
                          </div>
                        <div class="row campo-cantidad">
                            <div class="col-md-3 valor">
                              <img src="src/assets/img/iconos/meta.png" class="icon-meta2">
                            </div>
                            <input id="input_meta" :value=meta class="col-md-8 offset-md-1" readonly></input>
                        </div>
                        </div> -->

                         <div class="row empujar-cajas">
                    <div class="col-md-3 empujar-iconos2">
                      <div class="row campo-cantidad-s">
                          <div class="col-md-8 valor">
                            <img src="src/assets/img/iconos/meta.png" class="icon-meta3">
                          </div>
                          <input id="input_hucha" :value=meta class="col-md-7" readonly>
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
      
       
       msg      : 'correo',

   
   
       
    }
  },
  
    computed: {
        saldo(){
            return this.$store.state.generos[0].saldo_actual;
        },
        meta(){
            return this.$store.state.generos[0].meta;
        },

        ...mapGetters([
            'getpagina'
        ])
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
