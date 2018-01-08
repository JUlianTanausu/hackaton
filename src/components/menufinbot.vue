<template>
        <div>
            <ul class="row barra-menu">
                <li class="col-md-3">
                    <a v-on:click="cambiarPagina(3)">
                    <p>Calendario</p>
                    <img src="src/assets/img/iconos/calendario.png" class="col-md-3 iconos-menu">
                    </a>
                </li>
                <li class="col-md-3">
                        <a v-on:click="cambiarPagina(4)">
                        <p>FinBot</p>
                        <img src="src/assets/img/iconos/logo.png" class="col-md-3">
                        </a>
                    </li>
                    <li class="col-md-3">
                            <a v-on:click="cambiarPagina(6)">
                            <p>Mi Perfil</p>
                            <img src="src/assets/img/iconos/user.png" class="col-md-3 iconos-menu">
                            </a>
                        </li>
                        <li class="col-md-3 no-border">
                                <a v-on:click="cambiarPagina(5)">
                                <p>Mis logros</p>
                                <img src="src/assets/img/iconos/logro.png" class="col-md-3 iconos-menu">
                                </a>
                            </li>
            </ul>
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
            'getpagina'
        ])
    },
  name: 'formulario',
  
  data () {
    return {
      
       
       msg      : 'correo',

   
   
       
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
         this.cambiarPagina(2);

       }



     },
    

 

  




      
           
    }
}
</script>
