<template>
<div id="generos" v-cloak class="container"> 
    <section class="juego col-md-12">
        <article class="col-md-12 pregunta">
           <h2 class="titularGenero">Selecciona uno o dos géneros</h2>
           <!-- <h3>{{seleccionado[0]}} {{seleccionado[1]}} {{seleccionado[2]}} {{seleccionado[3]}} {{seleccionado[4]}} {{seleccionado[5]}}</h3>
           <h3>{{seleccionado[6]}} {{seleccionado[7]}} {{seleccionado[8]}} {{seleccionado[9]}} {{seleccionado[10]}} {{seleccionado[11]}}</h3>
           <h2>{{pos}}</h2>
           <h2>contador: {{contador}}</h2> -->
        </article>
    </section>
<span class="name">{{cont}}</span>
   <div id="product-list-one">
 <ul>
            <li v-for="genero in saleGeneros">
                <span class="name">{{genero.seleccionado}}</span>
               
            </li>
        </ul>
       
</div>

    <div class="select-gen col-md-12">


        <div class="row"> 
            <div class="container col-md-2 col-sm-12">
                <a v-on:click="reducePrice(0), cambio(0)"><img class="icon" v-bind:src="services[aux].image[seleccionado[0]]"/>
                <div class="letras col-md-1" v-bind:style="services[aux].textoColor[seleccionado[0]]">{{generos[0].name}}</div></a>
            </div>

            <div class="col-md-2 col-sm-12">
                <a v-on:click="reducePrice(1),cambio(1)"><img class="icon" v-bind:src="services[aux+1].image[seleccionado[1]]">
                <div class="letras col-md-1" v-bind:style="services[aux+1].textoColor[seleccionado[1]]">{{generos[1].name}}</div></a>
            </div>
           
            <div class="col-md-2 col-sm-12">
                <a v-on:click="reducePrice(2),cambio(2)"><img class="icon" v-bind:src="services[aux+2].image[seleccionado[2]]">
                <div class="letras col-md-1" v-bind:style="services[aux+2].textoColor[seleccionado[2]]">{{generos[2].name}}</div></a>
            </div>

             <div class="col-md-2 col-sm-12">
                <a v-on:click="cambio(3), reducePrice(3)"><img class="icon" v-bind:src="services[aux+3].image[seleccionado[3]]">
                <div class="letras col-md-1" v-bind:style="services[aux+3].textoColor[seleccionado[3]]">{{generos[3].name}}</div></a>
            </div>

             <div class="col-md-2 col-sm-12">
                <a v-on:click="cambio(4), reducePrice(4)"><img class="icon" v-bind:src="services[aux+4].image[seleccionado[4]]">
                <div class="letras col-md-1" v-bind:style="services[aux+4].textoColor[seleccionado[4]]">{{generos[4].name}}</div></a>
            </div>

             <div class="col-md-2 col-sm-12">
                <a v-on:click="cambio(5), reducePrice(5)"><img class="icon" v-bind:src="services[aux+5].image[seleccionado[5]]">
                <div class="letras col-md-1" v-bind:style="services[aux+5].textoColor[seleccionado[5]]">{{generos[5].name}}</div></a>
            </div>
            
        </div>

        <div class=space></div>

         <div class="row fila-iconos "> 
            <div class="container col-md-2 col-sm-12">
                <a v-on:click="cambio(6), reducePrice(6)"><img class="icon" v-bind:src="services[aux+6].image[seleccionado[6]]">
                <div class="letras col-md-1" v-bind:style="services[aux+6].textoColor[seleccionado[6]]">Clasica</div></a>
            </div>

            <div class="col-md-2 col-sm-12">
                <a v-on:click="cambio(7), reducePrice(7)"><img class="icon" v-bind:src="services[aux+7].image[seleccionado[7]]">
                <div class="letras col-md-12" v-bind:style="services[aux+7].textoColor[seleccionado[7]]">Ciencia Ficcion</div></a>
            </div>
           
            <div class="col-md-2 col-sm-12">
                <a v-on:click="cambio(8), reducePrice(8)"><img class="icon" v-bind:src="services[aux+8].image[seleccionado[8]]">
                <div class="letras col-md-1" v-bind:style="services[aux+8].textoColor[seleccionado[8]]">Accion</div></a>
            </div>

             <div class="col-md-2 col-sm-12">
                <a v-on:click="cambio(9), reducePrice(9)"><img class="icon" v-bind:src="services[aux+9].image[seleccionado[9]]">
                <div class="letras col-md-1" v-bind:style="services[aux+9].textoColor[seleccionado[9]]">Terror</div></a>
            </div>

             <div class="col-md-2 col-sm-12">
                <a v-on:click="cambio(10), reducePrice(10)"><img class="icon" v-bind:src="services[aux+10].image[seleccionado[10]]">
                <div class="letras col-md-1" v-bind:style="services[aux+10].textoColor[seleccionado[10]]">Crimen</div></a>
            </div>

             <div class="col-md-2 col-sm-12">
                <a v-on:click="cambio(11), reducePrice(11)"><img class="icon" v-bind:src="services[aux+11].image[seleccionado[11]]">
                <div class="letras col-md-1" v-bind:style="services[aux+11].textoColor[seleccionado[11]]">Musical</div></a>
            </div>
            

        </div>
    </div>
</div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    computed: {
        generos(){
            return this.$store.state.generos;
        },

         cont(){
            return this.$store.state.cont;
        },

        ...mapGetters([
            'saleGeneros',
            'getcont'
        ])
    },




  name: 'generos',
  data () {
    return {
      seleccionado: [0,0,0,0,0,0,0,0,0,0,0,0],
      pos: 0,
      aux: 0,
      contador:0,
        services: [
            {
                textoColor: ["color:#FFFFFF","color:#00FF98;font-weight:bold;text-align:center;"],
                image:[ "src/assets/img/iconos/Comedia_B.png",
                        "src/assets/img/iconos/Comedia_V.png"]    
            },{
                textoColor: ["color:#FFFFFF","color:#00FF98;font-weight:bold;text-align:center;"],
                image:[ "src/assets/img/iconos/Romantico_B.png",
                        "src/assets/img/iconos/Romantico_V.png"]  
            },{
                textoColor: ["color:#FFFFFF","color:#00FF98;font-weight:bold;text-align:center;"],
                image:[ "src/assets/img/iconos/Drama_B.png",
                        "src/assets/img/iconos/Drama_V.png"]  
            },{
                textoColor: ["color:#FFFFFF","color:#00FF98;font-weight:bold;text-align:center;"],
                image:[ "src/assets/img/iconos/Aventuras_B.png",
                        "src/assets/img/iconos/Aventuras_V.png"]  
            },{
                textoColor: ["color:#FFFFFF","color:#00FF98;font-weight:bold;text-align:center;"],
                image:[ "src/assets/img/iconos/Familiar_B.png",
                        "src/assets/img/iconos/Familiar_V.png"]  
            },{
                textoColor: ["color:#FFFFFF","color:#00FF98;font-weight:bold;text-align:center;"],
                image:[ "src/assets/img/iconos/Suspense_B.png",
                        "src/assets/img/iconos/Suspense_V.png"]  
            },

            //---------------------------------------------

            {
                textoColor: ["color:#FFFFFF","color:#00FF98;font-weight:bold;text-align:center;"],
                image:[ "src/assets/img/iconos/Clasico_B.png",
                        "src/assets/img/iconos/Clasico_V.png"]
            },{
                textoColor: ["color:#FFFFFF","color:#00FF98;font-weight:bold;text-align:center;"],
                image:[ "src/assets/img/iconos/Ciencia_B.png",
                        "src/assets/img/iconos/Ciencia_V.png"]
            },{
                textoColor: ["color:#FFFFFF","color:#00FF98;font-weight:bold;text-align:center;"],
                image:[ "src/assets/img/iconos/Accion_B.png",
                        "src/assets/img/iconos/Accion_V.png"]
            },{
                textoColor: ["color:#FFFFFF","color:#00FF98;font-weight:bold;text-align:center;"],
                image:[ "src/assets/img/iconos/Terror_B.png",
                        "src/assets/img/iconos/Terror_V.png"]
            },{
                textoColor: ["color:#FFFFFF","color:#00FF98;font-weight:bold;text-align:center;"],
                image:[ "src/assets/img/iconos/Crimen_B.png",
                        "src/assets/img/iconos/Crimen_V.png"]
            },{
                textoColor: ["color:#FFFFFF","color:#00FF98;font-weight:bold;text-align:center;"],
                image:[ "src/assets/img/iconos/Musical_B.png",
                        "src/assets/img/iconos/Musical_V.png"]
            },


           
            
        ]
    }
  },

  methods: {


      ...mapActions([
          'reducePrice'
      ]),
        cambio: function(i){
            this.pos=i;
            var posicion= this.pos;
            var selec = this.seleccionado[i];
        
            if (this.contador<2){

                if(selec== 0){
                    this.seleccionado[posicion] = 1;
                    this.contador = this.contador+1;
                  
                    
                }
            }
            if(selec== 1){
               this.seleccionado[posicion] = 0;
               this.contador = this.contador-1;
               
            }
            this.$forceUpdate();
        }     
    }
}
</script>


<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>

