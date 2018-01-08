<template>
  <div class="form container-fluid" id="appGenero1"> 

    <div class="row img-preguntas"> 
        <article class="col-md-1 caja-flechas">
            <a v-on:click="back()"><i class="fa fa-chevron-left fa-2x flechas" aria-hidden="true"></i></a>
        </article>
        <article class="col-md-1 caja-flechas2 order-12">
            <a v-on:click="next()"><i class="fa fa-chevron-right fa-2x flechas" aria-hidden="true"></i></a>
        </article>
        <div class="col-md-10">
            <section class="row">
                <article class=" col-md-2">
                    <article class="col-md-12">
                        <div class="row">
                            <a v-on:click="peliculaSeleccionada()" v-bind:class="{ 'active': services[0].active}"><img class="image" v-bind:src="'src/assets/img/carteles/'+pelicula.Peliculas[3].Imagen"/></a>
                        </div>
                        <div class="row">
                            <div class="container">
                                    <h3 class="titulo-pelicula2">{{pelicula.Peliculas[3].Titulo}}</h3>
                            </div>
                            <div class="container">
                                   <h4 class="genero-pelicula2">{{pelicula.Peliculas[3].Genero}}</h4>
                            </div>
                            <div class="row">
                                <article class="col-md-4 caja-fecha2">
                                    <h3 class="fecha-pelicula2">({{pelicula.Peliculas[3].Año}})</h3>
                                </article>
                                <article class="col-md-4 puntuacion-mini">
                                    <div class="caja-puntuacion-mini"> 
                                    <h3 class="">{{pelicula.Peliculas[3].Valoracion}} <i class="fa fa-star estrella" aria-hidden="true"></i></h3> 
                                    </div>
                                </article>
                                <article v-bind:class="edad(pelicula.Peliculas[3].Publico)">
                                    <div class="caja-edad-mini"> 
                                    <h3 class="">{{pelicula.Peliculas[3].Publico}}</h3> 
                                    </div>
                                </article>
                            </div>
                        </div>
                    </article>
                </article>

                 <article class=" col-md-2">
                    <article class="col-md-12">
                        <div class="row">
                            <a v-on:click="peliculaSeleccionada()" v-bind:class="{ 'active': services[0].active}"><img class="image" v-bind:src="'src/assets/img/carteles/'+pelicula.Peliculas[4].Imagen"/></a>
                        </div>
                        <div class="row">
                            <div class="container">
                                    <h3 class="titulo-pelicula2">{{pelicula.Peliculas[4].Titulo}}</h3>
                            </div>
                            <div class="container">
                                   <h4 class="genero-pelicula2">{{pelicula.Peliculas[4].Genero}}</h4>
                            </div>
                            <div class="row">
                                <article class="col-md-4 caja-fecha2">
                                    <h3 class="fecha-pelicula2">({{pelicula.Peliculas[4].Año}})</h3>
                                </article>
                                <article class="col-md-4 puntuacion-mini">
                                    <div class="caja-puntuacion-mini"> 
                                    <h3 class="">{{pelicula.Peliculas[4].Valoracion}} <i class="fa fa-star estrella" aria-hidden="true"></i></h3> 
                                    </div>
                                </article>
                                <article v-bind:class="edad(pelicula.Peliculas[4].Publico)">
                                    <div class="caja-edad-mini"> 
                                    <h3 class="">{{pelicula.Peliculas[4].Publico}}</h3> 
                                    </div>
                                </article>
                            </div>
                        </div>
                    </article>
                </article>

                 <article class=" col-md-2">
                    <article class="col-md-12">
                        <div class="row">
                            <a v-on:click="peliculaSeleccionada()" v-bind:class="{ 'active': services[0].active}"><img class="image" v-bind:src="'src/assets/img/carteles/'+pelicula.Peliculas[5].Imagen"/></a>
                        </div>
                        <div class="row">
                            <div class="container">
                                    <h3 class="titulo-pelicula2">{{pelicula.Peliculas[5].Titulo}}</h3>
                            </div>
                            <div class="container">
                                   <h4 class="genero-pelicula2">{{pelicula.Peliculas[5].Genero}}</h4>
                            </div>
                            <div class="row">
                                <article class="col-md-4 caja-fecha2">
                                    <h3 class="fecha-pelicula2">({{pelicula.Peliculas[5].Año}})</h3>
                                </article>
                                <article class="col-md-4 puntuacion-mini">
                                    <div class="caja-puntuacion-mini"> 
                                    <h3 class="">{{pelicula.Peliculas[5].Valoracion}} <i class="fa fa-star estrella" aria-hidden="true"></i></h3> 
                                    </div>
                                </article>
                                <article v-bind:class="edad(pelicula.Peliculas[5].Publico)">
                                    <div class="caja-edad-mini"> 
                                    <h3 class="">{{pelicula.Peliculas[5].Publico}}</h3> 
                                    </div>
                                </article>
                            </div>
                        </div>
                    </article>
                </article>

                 <article class=" col-md-2">
                    <article class="col-md-12">
                        <div class="row">
                            <a v-on:click="peliculaSeleccionada()" v-bind:class="{ 'active': services[0].active}"><img class="image" v-bind:src="'src/assets/img/carteles/'+pelicula.Peliculas[6].Imagen"/></a>
                        </div>
                        <div class="row">
                            <div class="container">
                                    <h3 class="titulo-pelicula2">{{pelicula.Peliculas[6].Titulo}}</h3>
                            </div>
                            <div class="container">
                                   <h4 class="genero-pelicula2">{{pelicula.Peliculas[6].Genero}}</h4>
                            </div>
                            <div class="row">
                                <article class="col-md-4 caja-fecha2">
                                    <h3 class="fecha-pelicula2">({{pelicula.Peliculas[6].Año}})</h3>
                                </article>
                                <article class="col-md-4 puntuacion-mini">
                                    <div class="caja-puntuacion-mini"> 
                                    <h3 class="">{{pelicula.Peliculas[6].Valoracion}} <i class="fa fa-star estrella" aria-hidden="true"></i></h3> 
                                    </div>
                                </article>
                                <article v-bind:class="edad(pelicula.Peliculas[6].Publico)">
                                    <div class="caja-edad-mini"> 
                                    <h3 class="">{{pelicula.Peliculas[6].Publico}}</h3> 
                                    </div>
                                </article>
                            </div>
                        </div>
                    </article>
                </article>

                 <article class=" col-md-2">
                    <article class="col-md-12">
                        <div class="row">
                            <a v-on:click="peliculaSeleccionada()" v-bind:class="{ 'active': services[0].active}"><img class="image" v-bind:src="'src/assets/img/carteles/'+pelicula.Peliculas[7].Imagen"/></a>
                        </div>
                        <div class="row">
                            <div class="container">
                                    <h3 class="titulo-pelicula2">{{pelicula.Peliculas[7].Titulo}}</h3>
                            </div>
                            <div class="container">
                                   <h4 class="genero-pelicula2">{{pelicula.Peliculas[7].Genero}}</h4>
                            </div>
                            <div class="row">
                                <article class="col-md-4 caja-fecha2">
                                    <h3 class="fecha-pelicula2">({{pelicula.Peliculas[7].Año}})</h3>
                                </article>
                                <article class="col-md-4 puntuacion-mini">
                                    <div class="caja-puntuacion-mini"> 
                                    <h3 class="">{{pelicula.Peliculas[7].Valoracion}} <i class="fa fa-star estrella" aria-hidden="true"></i></h3> 
                                    </div>
                                </article>
                                <article v-bind:class="edad(pelicula.Peliculas[7].Publico)">
                                    <div class="caja-edad-mini"> 
                                    <h3 class="">{{pelicula.Peliculas[7].Publico}}</h3> 
                                    </div>
                                </article>
                            </div>
                        </div>
                    </article>
                </article>

                 <article class=" col-md-2">
                    <article class="col-md-12">
                        <div class="row">
                            <a v-on:click="peliculaSeleccionada()" v-bind:class="{ 'active': services[0].active}"><img class="image" v-bind:src="'src/assets/img/carteles/'+pelicula.Peliculas[8].Imagen"/></a>
                        </div>
                        <div class="row">
                            <div class="container">
                                    <h3 class="titulo-pelicula2">{{pelicula.Peliculas[8].Titulo}}</h3>
                            </div>
                            <div class="container">
                                   <h4 class="genero-pelicula2">{{pelicula.Peliculas[8].Genero}}</h4>
                            </div>
                            <div class="row">
                                <article class="col-md-4 caja-fecha2">
                                    <h3 class="fecha-pelicula2">({{pelicula.Peliculas[8].Año}})</h3>
                                </article>
                                <article class="col-md-4 puntuacion-mini">
                                    <div class="caja-puntuacion-mini"> 
                                    <h3 class="">{{pelicula.Peliculas[8].Valoracion}} <i class="fa fa-star estrella" aria-hidden="true"></i></h3> 
                                    </div>
                                </article>
                                <article v-bind:class="edad(pelicula.Peliculas[8].Publico)">
                                    <div class="caja-edad-mini"> 
                                    <h3 class="">{{pelicula.Peliculas[8].Publico}}</h3> 
                                    </div>
                                </article>
                            </div>
                        </div>
                    </article>
                </article>
            </section>
        </div>
            </section>
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
        pelicula(){
            return this.$store.state.pelicula;
        },

        ...mapGetters([
            'saleGeneros',
            'getcont',
            'getPeliculas'
        ])
    },

  name: 'appGenero1',
  
  data () {
    return {
      active: 'home',
      cont: 0,
      msg: 'Pregunta 1',
      aux: 0,
       edadIntereses:['col-md-4 eTP-mini','col-md-4 e7-mini','col-md-4 e16-mini','col-md-4 e18-mini'],

     services: [
            {
                name: 'Película0',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 eTP-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película1',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 8.4,
                edad:'col-md-4 e16-mini',
                texto_edad:'16',
                año: 1998,
                image: "src/assets/img/carteles/alien.jpg",
                active:false
            },{
                name: 'Película2',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película3',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película4',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película5',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },

            //----------------------------

            {
                name: 'Película6',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película7',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película8',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película9',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película10',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película11',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },


             //----------------------------


             {
                name: 'Película12',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película13',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película14',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película15',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película16',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película17',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },


            //-----------------------------------

             {
                name: 'Película18',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película19',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película20',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película21',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película22',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película23',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },

            //-----------------------------------
            {
                name: 'Película24',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película25',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película26',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película27',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película28',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            },{
                name: 'Película29',
                solucion:1,
                genero:'Drama, Terror',
                puntuacion: 9.5,
                edad:'col-md-4 e18-mini',
                texto_edad:'18',
                año: 2000,
                image: "src/assets/img/carteles/el_resplandor.jpg",
                active:false
            }
        ]
    }
  },

  methods: {


       edad: function(edadPeli){
          
          if(edadPeli=='Todos'){
            return this.edadIntereses[0];
          }else if(edadPeli==7){
            return this.edadIntereses[1];
          }else if(edadPeli<=17 && edadPeli>7){
            return this.edadIntereses[2];
          }else if(edadPeli>=18){
            return this.edadIntereses[3];
          }



       

        },
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


        next: function(){
            var cont = this.cont;
            cont++;
            this.cont = cont;
            if(cont==0){
                this.aux=0;
                this.active = 'home';
            }
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
                this.cont =-1;
            }
        },

        peliculaSeleccionada: function(){ //Seleccionas la película que deseas
           var  hide=document.getElementById("1"); // Se oculta el componente de las 3 películas destacadas
            hide.style.display="none";
            var  hide2=document.getElementById("2"); // Se oculta el componente de las películas por género
            hide2.style.display="none";
            var  hide2=document.getElementById("3");  // Se oculta el componente de las películas destacadas de otros géneros
            hide2.style.display="none";


            var  hide3Pelicula=document.getElementById("pelicula");
            hide3Pelicula.style.display="inherit"; // Desbloqueamos el componente película, ahora cargará sólo este y ocultará los anteriores
        },
            back: function(){
            var cont = this.cont;
            cont++;
            this.cont = cont;
            if (cont ==0) {
                this.aux=0;
                this.active='home';
            }
            if(cont == 1){
                this.aux=24;
                this.active = 'projects';
            }else if(cont == 2){
                this.aux=18;
                this.active = 'services';
            }else if(cont == 3){
                this.aux=12;
                this.active = 'contact';
            }else if(cont == 4){
                this.aux=6;
                this.active = 'p5';
                this.cont=-1;
            }
        }
    }



}
</script>

