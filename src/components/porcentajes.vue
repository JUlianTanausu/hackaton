<template>


 
    <form id="panel" v-cloak>
        <div class="row">
        <div class="col-md-2 offset-md-3">
          <img src="src/assets/FINBOT_logo.gif" class="size-bot">
        </div>
        <div class="col-md-5">
          <div class="arrow_box">
            <p>Este es tu balance actual, tu saldo ahora mismo es de {{generos[0].saldo_actual}}  euros, puedes consultar todos tus movimientos o introducir un gasto o ingreso</p> 
          </div>
        </div>
      </div>

      

                <div class="row empujar-cajas">
                    <div class="col-md-3 caja-gastos-empuja">
                        <div class="aclaracion2">
                       <p>Tu Saldo</p>
                        </div>
                      <div class="row campo-cantidad">
                          <div class="col-md-3 valor">
                            <img src="src/assets/img/iconos/hucha.png" class="icon-saldo">
                          </div>
                          <input id="input_saldo" :value=saldo class="col-md-8 offset-md-1" readonly>
                      </div>
                      </div>
                      <div class="col-md-3 offset-md-1">
                          <div class="aclaracion2">
                         <p>Tu meta</p>
                          </div>
                        <div class="row campo-cantidad">
                            <div class="col-md-3 valor">
                              <img src="src/assets/img/iconos/meta.png" class="icon-meta2">
                            </div>
                            <input id="input_meta" :value=meta class="col-md-8 offset-md-1" readonly></input>
                        </div>
                        </div>

                        <div class="col-md-3 caja-gastos-empuja2">
                          <div class="aclaracion2">
                         <p>Tu Salario</p>
                          </div>
                        <div class="row campo-cantidad">
                            <div class="col-md-3 valor">
                              <img src="src/assets/img/iconos/salario.png" class="icon-salario">
                            </div>
                            <input id="input_salario" :value=salario class="col-md-8 offset-md-1" readonly></input>
                        </div>
                        </div>
                </div>


        </div>

       <div class="container">
           <div class="row">
               <div class="col-md-4 color-barra1">
                   <img src="src/assets/img/iconos/hogar.png" class="col-md-3">
                    <h3>Gastos del hogar</h3>
                    <p class="dinero">{{generos[0].hogar}} €</p>
                    <!-- <p class="porcentaje">25%</p> -->
               </div>
               <div class="col-md-4 color-barra2">
                   <img src="src/assets/img/iconos/transporte.png" class="col-md-4">
                    <h3>Transporte</h3>
                    <p class="dinero">{{generos[0].transporte}} €</p>
                    <!-- <p class="porcentaje">15%</p> -->
               </div>
               <div class="col-md-4 color-barra3">
                   <img src="src/assets/img/iconos/restaurante.png" class="col-md-2">
                    <h3>Restauracion</h3>
                    <p class="dinero">{{generos[0].restauracion}} €</p>
                    <!-- <p class="porcentaje">15%</p> -->
               </div>
           </div>
           <div class="row">
               <div class="col-md-4 color-barra4">
                   <img src="src/assets/img/iconos/salud.png" class="col-md-3">
                    <h3>Salud</h3>
                    <p class="dinero">{{generos[0].salud}} €</p>
                    <!-- <p class="porcentaje">5%</p> -->
               </div>
               <div class="col-md-4 color-barra5">
                   <img src="src/assets/img/iconos/ocio.png" class="col-md-3">
                    <h3>Compras y ocio</h3>
                    <p class="dinero">{{generos[0].ocio}} €</p>
                    <!-- <p class="porcentaje">15%</p> -->
               </div>
               <div class="col-md-4 color-barra6">
                   <img src="src/assets/img/iconos/supermercado.png" class="col-md-3">
                    <h3>Supermercado</h3>
                    <p class="dinero">{{generos[0].supermercado}} €</p>
                    <!-- <p class="porcentaje">25%</p> -->
               </div>
           </div>
       </div>
    <!-- We have two layouts. We choose which one to show depending on the "layout" binding -->
        <!-- <div class="container">
            <div class="container1">
                <div class="hogar" v-bind:style="{ width: ancho[0] + '%' }">
                    <img src="src/assets/img/iconos/hogar.png" class="col-md-3">
                    <h3>Gastos del hogar</h3>
                    <p class="dinero">400€</p>
                    <p class="porcentaje">15%</p>
                </div>
                <div class="transporte" v-bind:style="{ background:'yellow', width: ancho[1] + '%' }">
                    <img src="src/assets/img/iconos/hogar.png" class="col-md-3">
                    <h3>Gastos del hogar</h3>
                    <p class="dinero">400€</p>
                    <p class="porcentaje">15%</p>
                </div>
                <div class="restauracion" v-bind:style="{ background:'green', width: ancho[2] + '%' }">
                    <img src="src/assets/img/iconos/hogar.png" class="col-md-3">
                    <h3>Gastos del hogar</h3>
                    <p class="dinero">400€</p>
                    <p class="porcentaje">15%</p>
                </div>
            </div>
            <div class="container2">
                <div class="salud" v-bind:style="{background:'green', width: ancho2[0] + '%' }">
                    <a >sadr</a>
                </div>
                <div class="compras" v-bind:style="{ background:'yellow',width: ancho2[1] + '%' }">
                    <a >asdg</a>
                </div>
                <div class="supermercado" v-bind:style="{background:'blue', width: ancho2[2] + '%' }">
                    <a >asdf</a>
                </div>
            </div>
            <div>
                <button type='button' id="gasto" v-on:click='cambiarPagina(3)'> Gasto </button>
                <button type='button' id="ingreso" v-on:click='cambiarPagina(3)'> Ingreso</button>
            </div>
        </div> -->

        <div class="row empujar-cajas">
            <div class="col-md-2 offset-md-3 btn-gastos">
                <a v-on:click="cambiarPagina(7)">Añadir Gasto</a>
            </div>
            <div class="col-md-2 offset-md-1 btn-ingresos">
                <a v-on:click="cambiarPagina(11)">Añadir Ingreso</a>
            </div>
        </div>

        
    </form>

    
  
</template>
<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
    
export default {
  name: 'formulario',
  data () {
    
    
    return {
        ancho: [50, 10, 40],
        ancho2: [40,40,20],
     
        msg: 'correo',
   
    }
  },
    computed: {
         generos(){
            return this.$store.state.generos;
        },

        saldo(){
            return this.$store.state.generos[0].saldo_actual;
        },
        meta(){
            return this.$store.state.generos[0].meta;
        },
        salario(){
            return this.$store.state.generos[0].salario_mensual;
        },
        paginas(){
            return this.$store.state.pagina;
        },
        ...mapGetters([
            'getpagina'
        ])
    },
    methods: {
        ...mapActions([
          'cambiarPagina'
        ]),   
        setSaldo:function(saldo){
            this.saldo = saldo;
        },
    },
    mounted(){
    }
}
</script>
