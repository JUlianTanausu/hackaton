<template>
 
    <form id="panel" v-cloak>


        <div>
            <output  id="saldo">{{this.saldo}} </output>
            <output  id="meta">{{this.meta}} </output>
            <output  id="salario">{{this.salario}}</output>
            <output  id="ingresos">{{this.ingresos}} </output>
            <output  id="gastos">{{this.gastos}}</output>
        </div>

    <!-- We have two layouts. We choose which one to show depending on the "layout" binding -->
        <div class="container1">
            <div class="hogar" v-bind:style="{ background:'blue', width: ancho[0] + '%' }">

                <a >hola</a>
            </div>
            <div class="transporte" v-bind:style="{ background:'yellow', width: ancho[1] + '%' }">
                <a >sdf</a>
            </div>
            <div class="restauracion" v-bind:style="{ background:'green', width: ancho[2] + '%' }">
                <a >df</a>
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





    </form>

  

</template>
<script>

import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';


	
export default {
  name: 'formulario',
  data () {
    
    
    return {

        ancho: [10, 55, 35],
        ancho2: [80,10,10],
     
        msg: 'correo',
   
    }
  },

    computed: {
        saldo(){
            return this.$store.state.saldo;
        },
        meta(){
            return this.$store.state.meta;
        },
        salario(){
            return this.$store.state.salario;
        },
        ingresos(){
            return this.$store.state.ingresos;
        },
        gastos(){
            return this.$store.state.gastos;
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

<style>

/* Hide un-compiled mustache bindings
until the Vue instance is ready */

[v-cloak] {
  display: none;
}

*{
    margin:0;
    padding:0;
}

body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align:center;
}

a, a:visited {
    outline:none;
    color:#389dc1;
}

a:hover{
    text-decoration:none;
}

section, footer, header, aside, nav{
    display: block;
}


.hogar{    height:240px;float:left}
.restauracion{    height:240px;float:left}
.transporte{    height:240px;float:left}

.salud{height:240px;float:left}
.compras{height:240px;float:left}
.supermercado{height:240px;float:left}

.container1{



    width: 800px;
    height:32px;
    padding: 10px;
    margin: 45px auto 25px;
    position:relative;
    text-align:right;
    line-height: 1;
}

.container2{
    width: 800px;
    height:32px;
    padding: 10px;
    margin: 45px auto 25px;
    position:relative;
    text-align:right;
    line-height: 1;
}
</style>
