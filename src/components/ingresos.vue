<template>
<div class="container">
    <div class="row empujar-cajas">
                <div class="col-md-3 offset-md-2 mover-logo">
                  <img src="src/assets/FINBOT_logo.gif">
                </div>
                <div class="col-md-5">
                  <div class="arrow_box">
                    <p>Introduce la cantidad que quieres ingresar</p> 
      </div>
    </div>
    </div>

    <div class="row empujar-cajas">
        <div class="col-md-3 offset-md-3">
            <div class="aclaracion2">
           <p>Ingreso</p>
            </div>
          <div class="row campo-cantidad">
              <div class="col-md-3 valor">
                <img src="src/assets/img/iconos/money.png" class="icon-money">
              </div>
              <input id="ingreso_input" class="col-md-8 offset-md-1">
          </div>
          </div>
          
    </div>
    <div class="col-md-2 offset-md-1 btn-ingresos">
               <a v-on:click="ingresar();cambiarPagina(4)">Añadir Ingreso</a>
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
       ingresar:function(){
            var cantidad = parseInt(document.getElementById("ingreso_input").value);
            if (isNaN(cantidad)){return 0;}
            console.log(cantidad);
            this.ingresarCantidad(cantidad);
       },
    
    

      ...mapActions([
          'cambiarPagina', 'ingresarCantidad'
      ]),

           
    }
}
</script>
