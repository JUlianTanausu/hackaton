<template>
 <div class="container">

     



       
        <div class="cajitas" v-if="seleccionado==1">
           <a v-on:click="atras()"> <h4>ATRAS</h4></a>
             <div class="row empujar-cajas" >




                                <div class="col-md-2 offset-md-2 categoria1" v-on:click="cambiarCategoria(0);selec(2)">
                                   
                                    <img src="src/assets/img/iconos/hogar.png" class="col-md-6 paddingicono4">
                                    <h3>Gastos del hogar</h3>
                                  
                                </div>
                                <div class="col-md-2 offset-md-1 categoria2" v-on:click="cambiarCategoria(1);selec(2)">
                                    <img src="src/assets/img/iconos/transporte.png" class="col-md-8 paddingicono5">
                                    <h3>Transporte</h3></div>
                                <div class="col-md-2 offset-md-1 categoria3" v-on:click="cambiarCategoria(2);selec(2)">
                                    <img src="src/assets/img/iconos/restaurante.png" class="col-md-5 paddingicono6">
                                    <h3>Restauración</h3></div>
                            </div>


             <div class="row">
                            <div class="col-md-2 offset-md-2 categoria4" v-on:click="cambiarCategoria(3);selec(2)">
                                <img src="src/assets/img/iconos/salud.png" class="col-md-6 paddingicono4">
                                <h3>Salud</h3>
                            </div>
                            <div class="col-md-2 offset-md-1 categoria5" v-on:click="cambiarCategoria(4);selec(2)">
                                <img src="src/assets/img/iconos/ocio.png" class="col-md-6 paddingicono5">
                                <h3>Compras y ocio</h3></div>
                            <div class="col-md-2 offset-md-1 categoria6" v-on:click="cambiarCategoria(5);selec(2)">
                                <img src="src/assets/img/iconos/supermercado.png" class="col-md-6 paddingicono6">
                                <h3>Supermercado</h3></div>
                        </div>





            


        </div>
 <div class="col-6 offset-md-3 empujar-cajas" v-if="seleccionado==2">
     <a v-on:click="atras()"> <h4>ATRAS</h4></a>
                              <div class="row campo-cantidad">
                                  <div class="col-md-2 valor">
                                    <img src="src/assets/img/iconos/money.png" class="icon-dinero">
                                  </div>
                                  <input class="col-md-9 offset-md-1" id="input_gasto" ></input>
                              </div>

                              <div class="row">
                                    <div class="col-md-4 offset-md-4 btn-gastos">
                                    <a v-on:click="meterGasto()">Añadir Gasto</a>
                                    </div>
                                  </div>

                        </div>


    </div>
 
  

</template>
<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

//import gastos from './components/gastos.vue';

export default {

    computed: {
        paginas(){
            return this.$store.state.pagina;
        },
        generos(){
            return this.$store.state.generos;
        },

        categorias(){
            return this.$store.state.categorias;
        },

        ...mapGetters([
            'getpagina','getCategorias'
        ])
    },

  name: 'formulario',

  
  data () {
    return {
      
       seleccionado: 1,
       msg      : 'correo',

   
   
       
    }
  },
  

 
 

 
  
  methods: {


      selec: function(num){
          this.seleccionado=num;
      },

      atras: function(){          
          this.seleccionado--;
          this.reseteaCategoria(0);    
           this.reseteaCategoria(1);     
            this.reseteaCategoria(2);     
             this.reseteaCategoria(3);     
              this.reseteaCategoria(4);     
               this.reseteaCategoria(0);  
          
      },

      reset:function(){
          this.reseteaCategoria(0);    
           this.reseteaCategoria(1);     
            this.reseteaCategoria(2);     
             this.reseteaCategoria(3);     
              this.reseteaCategoria(4);     
               this.reseteaCategoria(0);             
      },


    
    crear: function(){
      var user = document.getElementById("name").value
      var pass = document.getElementById("pass").value
      var pass2 = document.getElementById("repitPass").value

       if (pass == pass2){
         this.cambiarPagina(1);

       }
     },
      meterGasto:function(){
            var cantidad = parseInt(document.getElementById("input_gasto").value);
            if (isNaN(cantidad)){return 0;}
            console.log(cantidad);
            console.log(this.seleccionado);
            this.addGasto(cantidad);
            this.reset();
            this.cambiarPagina(4);
      },

      ...mapActions([
          'cambiarPagina','crearUsuario','cambiarCategoria','reseteaCategoria','addGasto'
      ]),

 

  




      
           
    }
}
</script>
