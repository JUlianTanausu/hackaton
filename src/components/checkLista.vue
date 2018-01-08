<template>
 
    <form id="panel" v-cloak>
        <div><output>Compra</output></div>
        
        <li v-for="producto in productos" v-bind="productos">
            <input type="checkbox" :id="producto.nombre" :value="producto.num" v-model="checkedProducts"></input>
            <a>{{producto.nombre}}</a>
            <button type='button' id="eliminar" v-on:click='eliminar(producto)'> Eliminar </button>
        </li>
        
        <div>
            <button type='button' id="anadir" v-on:click='cambiarVisibilidad'> Meter productos </button>
        </div>
        <div v-if="visible">
            <input  id="nom"></input>
            <button type='button' id="ingreso" v-on:click='meter'> Anade </button>
        </div>
        <input  id="costeTotal">Coste final</input>
        <button type='button' id="ingreso" v-on:click='terminado'> Terminada compra </button>
    </form>
  
</template>
<script src="src/js/artyom/artyom.js"></script>
<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
    
export default {
  name: 'compra',
  data () {
    
    
    return {
        numproducts:0,
        visible:false,
        productos:[],
        checkedProducts:[]
   
    }
  },
    computed: {
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
        eliminar:function(producto){
            console.log(this.productos.indexOf(producto));
            console.log(producto);
            var index = this.productos.indexOf(producto);
            if (index > -1){
                this.productos.splice(index, 1);
            }
            
        },
        meter:function(producto){
            var name = document.getElementById('nom').value;
            if (name == ''){return 0;}
            this.productos.push({nombre:name, num:this.numproducts});    
            this.numproducts++;       
            document.getElementById('nom').value = "";
        },
        getSuma(){
            var sum = 0;
            this.checkedProducts.forEach(function(coste){sum = sum + coste;});
 
            return sum;
        },
        cambiarVisibilidad(){
            this.visible = !this.visible;
        },
        terminado(){
            console.log("hola");
            artyom.say("hola buenas");
            var total = document.getElementById('costeTotal').value;
            //Meter gasto nuevo.
            this.cambiarPagina(3);
        },
        getId(name){console.log(name);}
    },
    mounted(){
    }
}
</script>
<style>
</style>