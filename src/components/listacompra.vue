<template>
 
    <form id="panel" v-cloak>
        <div><output>Compra</output></div>
        <li v-for="producto in productos">
            <a>{{producto.nombre}}</a>
            <a>{{producto.coste}}</a>
            <button type='button' id="eliminar" v-on:click='eliminar(producto)'> Eliminar </button>
        </li>
        <div><output>{{getSuma()}}</output></div>
        <div>
            <button type='button' id="anadir" v-on:click='cambiarVisibilidad'> Meter productos </button>
        </div>
        <div v-if="visible">
            <input  id="producto"></input>
            <input  id="coste"></input>
            <button type='button' id="ingreso" v-on:click='meter'> Anade </button>
        </div>
        <button type='button' id="ingreso" v-on:click='terminado'> Terminada compra </button>
    </form>
  
</template>
<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
    
export default {
  name: 'compra',
  data () {
    
    
    return {
        visible:false,
        productos:[]
   
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
        eliminar:function(producto){
            console.log(this.productos.indexOf(producto));
            console.log(producto);
            var index = this.productos.indexOf(producto);
            if (index > -1){
                this.productos.splice(index, 1);
            }
            
        },
        meter:function(producto){
            var name = document.getElementById('producto').value;
            var cos = parseInt(document.getElementById('coste').value);
            if (name == '' || isNaN(cos)){return 0;}
            this.productos.push({nombre:name, coste:cos});
            document.getElementById('producto').value = "";
            document.getElementById('coste').value = "";
        },
        getSuma(){
            var sum = 0;
            this.productos.forEach(function(producto){sum = sum + producto.coste;});
 
            return sum;
        },
        cambiarVisibilidad(){
            this.visible = !this.visible;
        },
        terminado(){
            this.cambiarPagina(3);
        }
    },
    mounted(){
    }
}
</script>
<style>
</style>