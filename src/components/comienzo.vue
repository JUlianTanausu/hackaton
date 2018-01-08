<template>
  <div class="container">
  
      <div class="row">
        <div class="col-md-2 offset-md-3">
          <img src="src/assets/FINBOT_logo.gif" class="size-bot">
        </div>
        <div class="col-md-5">
          <div class="arrow_box">
            <p>Para ayudarte a gestionar tus cuentas necesito que me cuentes un poco de tí, selecciona además una meta a la que quieras llegar, yo te ayudaré a ahorrar ese dinero</p> 
          </div>
        </div>
      </div>

      <div class="col-6 offset-md-4 empujar">
        <div class="aclaracion">
       <p>Tus ahorros</p>
        </div>
      <div class="row campo-cantidad">
          <div class="col-md-2 valor">
            <img src="src/assets/img/iconos/hucha.png">
          </div>
          <input class="col-md-9 offset-md-1" id="saldoActual" v-bind:value="this.generos[0].saldo_actual"> </input>
           
      </div>
      </div>
      <div class="col-6 offset-md-4">
        <div class="aclaracion">
       <p>Tu nómina</p>
        </div>
      <div class="row campo-cantidad">
          <div class="col-md-2 valor">
            <img src="src/assets/img/iconos/salario.png" class="icon-nomina">
          </div>
          <input class="col-md-9 offset-md-1" id="salario" v-bind:value="this.generos[0].salario_mensual"></input>
      </div>
      </div>
      <div class="col-6 offset-md-4">
        <div class="aclaracion">
       <p>Tu meta</p>
        </div>
      <div class="row campo-cantidad">
          <div class="col-md-2 valor">
            <img src="src/assets/img/iconos/meta.png" class="icon-meta">
          </div>
          <input class="col-md-9 offset-md-1" id="meta" v-bind:value="this.generos[0].meta"></input>
      </div>
      </div>
      <div class="row">
        <div class="col-md-6 offset-md-4 btn-empezar">
        <a v-on:click="enviar(); cambiarPagina(4)">EMPEZAR</a>
        </div>
      </div>
      




  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {


  computed: {
        paginas(){
            return this.$store.state.prueba;
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
      
       
       msg      : 'correo',

   
    }
       
    },

  

 
 

 
  
  methods: {



      cambiar: function(){
        var hola = document.getElementById("saldoActual").value;
        this.cambiaSaldoActual(hola);

        var salario = document.getElementById("salario").value;
        this.cambiaSalarioMensual(salario);

         var meta = document.getElementById("meta").value;
        this.cambiaMeta(meta);
      },

      ...mapActions([
          'cambiarPagina','cambiaSaldoActual','cambiaSalarioMensual','cambiaMeta', 'setSalario', 'setSaldo', 'setMeta'
      ]),

    enviar:function(){

        var saldo = document.getElementById("saldoActual").value;

        var salario = document.getElementById("salario").value;


        var meta = document.getElementById("meta").value;

        this.cambiaMeta(meta);
            this.setSalario(salario);
            this.setSaldo(saldo);
            this.setMeta(meta);

            this.cambiarPagina(9);

       },
    crear: function(){
      var user = document.getElementById("name").value
      var pass = document.getElementById("pass").value
      var pass2 = document.getElementById("repitPass").value

       if (pass == pass2){
         this.cambiarPagina(1);

       }
     },
 

  




      
           
    }
}
</script>
