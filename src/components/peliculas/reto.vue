<template>
  <div class="form" id="sorprendeme" v-cloak> 
   

    <div class="juego container">
        <section class="row justify-content-between pregunta">
            <article class="col-md-10">
           
           
                <h1>{{preguntas[this.cont]}}</h1>
            </article>
            <article class="col-md-2">
                <cronometro  v-on:timeOut="next" ></cronometro>
            </article>
        </section>
    </div>
 <div class="container">
    <div class="row img-preguntas"> 
        <div class=" col-md-4">
             <div class="nombre-pelis">{{services[aux].name}}</div> 
            <a v-on:click="toggleActive(services[aux])" v-bind:class="{ 'active': services[aux].active}"><img class="image" v-bind:src="services[aux].image"/>
            <div class="overlay"></div>
            </a>  
        </div>
        <div class=" col-md-4">
             <div class="nombre-pelis">{{services[aux+1].name}}</div> 
            <a v-on:click="toggleActive(services[aux+1])" v-bind:class="{ 'active': services[aux+1].active}"><img class="image" v-bind:src="services[aux+1].image"/>
            <div class="overlay"></div>
            </a>  
        </div>
        <div class=" col-md-4">
            <div class="nombre-pelis">{{services[aux+2].name}}</div>
            <a v-on:click="toggleActive(services[aux+2])" v-bind:class="{ 'active': services[aux+2].active}"><img class="image" v-bind:src="services[aux+2].image"/>
            <div class="overlay"></div>
            </a>
        </div>
    </div>

    <div class="row img-preguntas">
        <div class=" col-md-4">
            <div class="nombre-pelis">{{services[aux+3].name}}</div>
            <a v-on:click="toggleActive(services[aux+3])" v-bind:class="{ 'active': services[aux+3].active}"><img class="image" v-bind:src="services[aux+3].image"/>
            <div class="overlay"></div>
            </a>
        </div>
        <div class=" col-md-4">
            <div class="nombre-pelis">{{services[aux+4].name}}</div>
            <a v-on:click="toggleActive(services[aux+4])" v-bind:class="{ 'active': services[aux+4].active}"><img class="image" v-bind:src="services[aux+4].image"/>
            <div class="overlay"></div>
            </a>
        </div>
        <div class=" col-md-4">
            <div class="nombre-pelis">{{services[aux+5].name}}</div>
            <a v-on:click="toggleActive(services[aux+5])" v-bind:class="{ 'active': services[aux+5].active}"><img class="image" v-bind:src="services[aux+5].image"/>
            <div class="overlay"></div>
            </a>
        </div>
    </div>
 </div>

    <div class="container-fluid juego">
    <section class="row">
            <article class="col-md-4 flechaIzq" v-on:click="cambiarPagina(11)">
                <i class="fa fa-angle-left fa-3x" aria-hidden="true"></i><span>Salir</span>
            </article>
            <nav class="col-md-4 circles" v-bind:class="active" v-on:click.prevent>
                <a href="#" class="home" ></a>
                <a href="#" class="projects" ></a>
                <a href="#" class="services" ></a>
                <a href="#" class="contact" ></a>
                <a href="#" class="p5" ></a>
            </nav>
            <article class="col-md-4 flechaDer" v-on:click="next()">
                <a v-on:click="enviar()"><span>Siguiente</span><i class="fa fa-angle-right fa-3x" aria-hidden="true"></i> </a>
            </article> 
    </section>
    </div>



     <div class="resultadoObtenido">
        
      <!--  Las preguntas contestadas son: <span>{{respuestaMarcada()}}</span>
        Las respuestas correctas son: <span>{{respuestaCorrecta()}}</span>
        <br>-->
        Las ponderaciones son: <span>{{ponderacion()}}</span>

    </div> 
    


    </div>

</template>
<script src="/Applications/MAMP/htdocs/auratelefonica/src/car.js"></script>
<script>

import axios from 'axios';
import cronometro from '../animacion/cronometro.vue';
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  name: 'app',
  components: {
     'cronometro': cronometro,

     
   },
 
  data () {
    return {

         computed: {
        peliculas(){
            return this.$store.state.pelicula;
        },

        ...mapGetters([
            'getpeliculas'
        ])
    },
   
      active: 'home',
      hoy : new Date(),
      ponderacionObtenida: [], 
     albumes: [],
    arrayEnvio:[],

      cont: 0,
      response: ' ' ,
      msg: 'Pregunta 1',
      aux: 0,
      preguntas: ['¿Cuál de estos personajes es huérfano?',
      '¿Qiénes de estos personajes son ricos',
      '¿Cuáles de estas peliculas transcurre en New York?',
      '¿Qiénes de estos personajes son escritores?',
      '¿Qiénes de estos personajes se enamoran?'],
     services: [
            {
                name: 'Frozen',
                solucion:1,
                image: "src/assets/img/pregunta1/Frozen.jpg",
                active:false
            },{
                name: 'El sexto sentido',
                solucion:1,
                image: "src/assets/img/pregunta1/el_sexto_sentido.jpg",
                active:false
            },{
                name: 'Los otros',
                solucion:0,
                image: "src/assets/img/pregunta1/Losotros.jpg",
                active:false
            },{
                name: 'Oliver Twist',
                solucion:1,
                image: "src/assets/img/pregunta1/Olivertwist.jpg",
                active:false
            },{
                name: 'Spiderman',
                solucion:1,
                image: "src/assets/img/pregunta1/Spiderman.jpg",
                active:false
            },{
                name: 'Un canguro superduro',
                solucion:0,
                image: "src/assets/img/pregunta1/uncangurosuperduro.jpg",
                active:false
            },

            //----------------------------

            {
                name: 'John Wick',
                solucion:1,
                image: "src/assets/img/pregunta2/Johnwick.jpg",
                active:false
            },{
                name: 'Mullholl and Drive',
                solucion:0,
                image: "src/assets/img/pregunta2/MulhollandDrive.jpg",
                active:false
            },{
                name: 'Pancho',
                solucion:1,
                image: "src/assets/img/pregunta2/Pancho.jpg",
                active:false
            },{
                name: 'Pretty woman',
                solucion:1,
                image: "src/assets/img/pregunta2/Prettywoman.jpg",
                active:false
            },{
                name: 'The ring',
                solucion:0,
                image: "src/assets/img/pregunta2/Thering.jpg",
                active:false
            },{
                name: 'Titanic',
                solucion:0,
                image: "src/assets/img/pregunta2/Titanic.jpg",
                active:false
            },


             //----------------------------


             {
                name: 'Alien',
                solucion:0,
                image: "src/assets/img/pregunta3/alien.jpg",
                active:false
            },{
                name: 'Annie Hall',
                solucion:1,
                image: "src/assets/img/pregunta3/AnnieHall.jpg",
                active:false
            },{
                name: 'Cowboy',
                solucion:1,
                image: "src/assets/img/pregunta3/Cowboy.jpg",
                active:false
            },{
                name: 'Encantada',
                solucion:1,
                image: "src/assets/img/pregunta3/Encantada.jpg",
                active:false
            },{
                name: 'No es pais para viejos',
                solucion:0,
                image: "src/assets/img/pregunta3/Noviejos.jpg",
                active:false
            },{
                name: 'Soy leyenda',
                solucion:1,
                image: "src/assets/img/pregunta3/soy-leyenda.jpg",
                active:false
            },


            //-----------------------------------

             {
                name: 'Película18',
                solucion:1,
                image: "src/assets/img/pregunta4/Animales.jpg",
                active:false
            },{
                name: 'El resplandor',
                solucion:0,
                image: "src/assets/img/pregunta4/Elresplandor.jpg",
                active:false
            },{
                name: 'Fuga de cerebros',
                solucion:1,
                image: "src/assets/img/pregunta4/Fugacerebros.jpg",
                active:false
            },{
                name: 'La invención de Hugo',
                solucion:0,
                image: "src/assets/img/pregunta4/Hugo.jpg",
                active:false
            },{
                name: 'La joven Jane Austen',
                solucion:0,
                image: "src/assets/img/pregunta4/JaneAusten.jpg",
                active:false
            },{
                name: 'El libro de Eli',
                solucion:1,
                image: "src/assets/img/pregunta4/libroEli.jpg",
                active:false
            },

            //-----------------------------------
            {
                name: 'La vida de Adèle',
                solucion:1,
                image: "src/assets/img/pregunta5/Adele.jpg",
                active:false
            },{
                name: 'Blade runner',
                solucion:0,
                image: "src/assets/img/pregunta5/bladerunner.jpg",
                active:false
            },{
                name: 'El bracario',
                solucion:1,
                image: "src/assets/img/pregunta5/elbecario.jpg",
                active:false
            },{
                name: 'Desde el Infierno',
                solucion:1,
                image: "src/assets/img/pregunta5/infierno.jpg",
                active:false
            },{
                name: 'Regresión',
                solucion:0,
                image: "src/assets/img/pregunta5/Regresion.jpg",
                active:false
            },{
                name: 'Toy Story',
                solucion:0,
                image: "src/assets/img/pregunta5/ToyStory.jpg",
                active:false
            }
        ]
    }
  },

  methods: {


      ...mapActions([
          'cambiarPagina','reducePrice','guardaPeli'
      ]),
        makeActive: function(item){
              this.active = item;
            
            if(item=='home'){
              this.msg = 'Pregunta 1';
            }else if(item=='projects'){
              this.msg = 'Pregunta 2';
            }else if(item=='services'){
              this.msg = 'Pregunta 3';
            }else if(item=='contact'){
              this.msg = 'Pregunta 4';
            }else if(item=='p5'){
              this.msg = 'Pregunta 5';
            }
            
        },


//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
// ZIPPI---> mi getter
        getActive: function(){
            return this.active
        },


    UserAction:function() {
    var url = 'http://127.0.0.1:5000/post';

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);

    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader('Authorization', '123');
    //xhttp.setRequestHeader('Origin', 'kikebot');
    xhttp.setRequestHeader('Access-Control-Allow-Origin', 'talentum');
    //xhttp.setRequestHeader('Authorization', 'Bearer '+api_key);

    var data = this.loadData();
    data = JSON.stringify(data);
    //document.getElementById("texto1").value=data;
    
    xhttp.onreadystatechange = function(resp){
        console.log('State changed');
        console.log(xhttp.status);
        if(xhttp.readyState == 4 && xhttp.status == 200){
            console.log(xhttp.responseText);
            //Aquí tienes la respuesta.
            var response2 = JSON.parse(xhttp.responseText);
            //document.getElementById("texto2").value=response;
            //Aquí hay que ir a recomendación con estas pelis.
            this.response = response2;
        }
    };
    xhttp.send(data);
},


/*
ORDEN DE ENVIO
-------------
[1] Accion
[2] Comedia
[3] Drama
[4] Infantil
[5] Suspense
[6] Terror




*/

    loadData:function(){
        var data = {
                "Respuestas":
                    [this.arrayEnvio[12].toString(),// 4 Accion
                    this.arrayEnvio[18].toString(),// 6 Accion
                    this.arrayEnvio[51].toString(),// 17 Accion
                    this.arrayEnvio[69].toString(),// 23 Accion
                    this.arrayEnvio[75].toString(),// 25 Accion

                    this.arrayEnvio[15].toString(),// 5 Comedia
                    this.arrayEnvio[27].toString(),// 9 Comedia
                    this.arrayEnvio[39].toString(),// 13 Comedia
                    this.arrayEnvio[60].toString(),// 20 Comedia
                    this.arrayEnvio[78].toString(),// 26 Comedia

                    this.arrayEnvio[9].toString(), // 3 Drama
                    this.arrayEnvio[33].toString(),// 11 Drama
                    this.arrayEnvio[42].toString(),// 14 Drama
                    this.arrayEnvio[66].toString(),// 22 Drama
                    this.arrayEnvio[72].toString(),// 24 Drama
                    
                    this.arrayEnvio[0].toString(),// 0 Infantil
                    this.arrayEnvio[24].toString(),// 8 Infantil
                    this.arrayEnvio[63].toString(),// 21 Infantil
                    this.arrayEnvio[87].toString(),// 29 Infantil

                    this.arrayEnvio[6].toString(), // 2 Suspense
                    this.arrayEnvio[21].toString(),// 7 Suspense
                    this.arrayEnvio[48].toString(),// 16 Suspense
                    this.arrayEnvio[54].toString(),// 18 Suspense
                    this.arrayEnvio[84].toString(),// 28 Suspense

                    this.arrayEnvio[3].toString(), // 1 Terror
                    this.arrayEnvio[30].toString(),// 10 Terror
                    this.arrayEnvio[36].toString(),// 12 Terror
                    this.arrayEnvio[45].toString(),// 15 Terror
                    this.arrayEnvio[57].toString(),// 19 Terror
                    this.arrayEnvio[81].toString()// 27 Terror
                    
                     ],

        
  
       }


    //var fso  = new ActiveXObject("Scripting.FileSystemObject"); 
   //var fh = fso.CreateTextFile("c:\\Test.txt", true); 
   //fh.WriteLine("Some text goes here..."); 
   //fh.Close(); 
           // FilePointer.Close();

            console.log(data);
           return JSON.stringify(data);
       },




        next: function(){
            var cont = this.cont;
            cont++;
            this.cont = cont;
            if(cont == 1){
                this.aux=6;
                this.active = 'projects';
            }else if(cont == 2){
                this.aux=12;
                this.active = 'services';
            }else if(cont == 3){
                this.aux=18;
                this.active = 'contact';
            }else if(cont == 4){
                this.aux=24;
                this.active = 'p5';
            }

         if(this.active=='p5'){   
             var vue=this;
           // this.$emit("cronoreload");

                 setTimeout(function(){
                    vue.enviar()
                 }, 10400);

           
         }else{
            this.$emit("cronoreload");
         }

        },

        toggleActive: function(s){
            s.active = !s.active;
            
        },
        respuestaMarcada: function(){

            var respuestaMarcada = [];

            this.services.forEach(function(s){
                if (s.active){
                    respuestaMarcada+= 1+"  ";
                    
                }
                else {
                     respuestaMarcada+= 0+"  ";
                }
            });

           return respuestaMarcada;
        },

                ponderacion: function(){

            var ponderacion = [];

            this.services.forEach(function(s){
                if (s.active){
                    if((s.solucion==1)){
                        ponderacion+=3+"  ";  //Marca y es correcto
                    }
                    else{
                        ponderacion+=0+"  ";  //Marca y es incorrecto
                    }
                }
                else {
                     if(s.solucion==0){
                         ponderacion+=2+"  "; //No marca y es correcto
                     }
                     else{
                         ponderacion+=1+"  "; //No marca, y debería haber marcado
                     }
                }
            });
 



        this.ponderacionObtenida = ponderacion;
        this.arrayEnvio = ponderacion;
           return ponderacion;
           
         
        },

        enviar: function(){

            if(this.active == 'p5'){
               axios({	
                method: 'post',
                url: "http://auraweb.uksouth.cloudapp.azure.com:5000/reto", 
                headers: {
                'Access-Control-Allow-Origin': 'talentum',
                'Content-Type': 'application/json',
                'Authorization': 'putaso'
                },
                data: this.loadData(),
                json: true

               }).then((response) => { this.guardaPeli(response.data) })
            
                this.cambiarPagina(9);
            }


        this.$forceUpdate();
        },
        
        respuestaCorrecta: function(){

            var respuestaCorrecta = [];

            this.services.forEach(function(s){
                if (s.active){
                    respuestaCorrecta+= s.solucion+"  ";

                }
                else {
                    respuestaCorrecta+= s.solucion+"  ";
                }
            });

           return respuestaCorrecta;
        }
    }



}
</script>
<style>





</style>



