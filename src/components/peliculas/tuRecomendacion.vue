<template>
  <div class="form container-fluid" id="gustos"> 

    <div class="juego">
        <section class="row pregunta">
            <article class="col-md-12">
              
                <h1>Estas son las películas que te recomiendo</h1>
                <h1 style="display:none">{{services[0].like}}</h1>
            </article>
        </section>
    </div>
    
      <div class="row">
        <!-- Primera recomendacion -->
        <section class="col-md-4">
          <section class="row peliculas-destacadas">
            <article class="col-md-6 orden">
                <a><img class="portada-pelicula" v-bind:src="'src/assets/img/carteles/'+pelicula.Peliculas[0].Imagen"/></a>
            </article>
            <article class=" col-md-6 info-pelicula1">
                <section class="row">
                    <article class="col-md-7 size-titulo orden">
                      <h2 class="titulo-pelicula">{{pelicula.Peliculas[0].Titulo}}</h2>
                      <h3 class="fecha-pelicula">{{pelicula.Peliculas[0].Año}}</h3>
                    </article>
                    <article class="col-md-5  caja-puntuacion orden"> 
                      <h3 class="puntuacion col-md-10">{{pelicula.Peliculas[0].Valoracion}} <i class="fa fa-star estrella" aria-hidden="true"></i>
                      </h3> 
                    </article>
                </section>
                <section class="row size-sinopsis">
                      <div class="sinopsis">
                      {{pelicula.Peliculas[0].Argumento}}
                      </div>
                  </section>
                  <section class="row info-pelicula2">
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Director: {{pelicula.Peliculas[0].Director}}</p>
                      </div>
                    </article>
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Género: {{pelicula.Peliculas[0].Genero}}</p>
                      </div>
                    </article>
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Duración: {{pelicula.Peliculas[0].Duracion}}</p>
                      </div>
                    </article>
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Edad:</p>
                        <article v-bind:class="edad(pelicula.Peliculas[0].Publico)"> 
                          <div class="edad">
                            <h3 class="">{{pelicula.Peliculas[0].Publico}}</h3>
                          </div> 
                        </article>
                      </div>
                    </article>
                  </section>
                <section class="row botones-peliculas">
                    <article class="col-md-7 orden">
                      <a class="botonPelicula col-md-8" v-on:click="peliculaSeleccionada()">VER PELICULA</a>
                    </article>
                    <article class="col-md-4 offset-md-1  caja-puntuacion orden"> 
                      <i v-bind:class="services[aux].corazon[services[aux].like]" aria-hidden="true" v-on:click="like(0)"></i>
                    </article>
                </section>
              </article>
          </section>
        </section>
        <!-- Segunda recomendacion "'src/assets/img/carteles/'"{{pelicula.Peliculas[0].Imagen}}-->
        <section class="col-md-4">
          <section class="row peliculas-destacadas">
            <article class="col-md-6 orden">
                <a><img class="portada-pelicula" v-bind:src="'src/assets/img/carteles/'+pelicula.Peliculas[1].Imagen"/></a>
            </article>
            <article class=" col-md-6 info-pelicula1">
                <section class="row">
                    <article class="col-md-7 size-titulo orden">
                      <h2 class="titulo-pelicula">{{pelicula.Peliculas[1].Titulo}}</h2>
                      <h3 class="fecha-pelicula">{{pelicula.Peliculas[1].Año}}</h3>
                    </article>
                    <article class="col-md-5  caja-puntuacion orden"> 
                      <h3 class="puntuacion col-md-10">{{pelicula.Peliculas[1].Valoracion}} <i class="fa fa-star estrella" aria-hidden="true"></i>
                      </h3> 
                    </article>
                </section>
                <section class="row size-sinopsis">
                      <div class="sinopsis">
                      {{pelicula.Peliculas[1].Argumento}}
                      </div>
                  </section>
                  <section class="row info-pelicula2">
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Director: {{pelicula.Peliculas[1].Director}}</p>
                      </div>
                    </article>
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Género: {{pelicula.Peliculas[1].Genero}}</p>
                      </div>
                    </article>
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Duración: {{pelicula.Peliculas[1].Duracion}}</p>
                      </div>
                    </article>
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Edad:</p>
                        <article v-bind:class="edad(pelicula.Peliculas[1].Publico)"> 
                          <div class="edad">
                            <h3 class="">{{pelicula.Peliculas[1].Publico}}</h3>
                          </div> 
                        </article>
                      </div>
                    </article>
                  </section>
                <section class="row botones-peliculas">
                    <article class="col-md-7 orden">
                      <a class="botonPelicula col-md-8" v-on:click="peliculaSeleccionada()">VER PELICULA</a>
                    </article>
                    <article class="col-md-4 offset-md-1  caja-puntuacion orden"> 
                      <i v-bind:class="services[aux+1].corazon[services[aux+1].like]" aria-hidden="true" v-on:click="like(1)"></i>
                    </article>
                </section>
              </article>
          </section>
        </section>
        <!-- Tercera recomendacion -->
        <section class="col-md-4">
          <section class="row peliculas-destacadas">
            <article class="col-md-6 orden">
                <a><img class="portada-pelicula" v-bind:src="'src/assets/img/carteles/'+pelicula.Peliculas[2].Imagen"/></a>
            </article>
            <article class=" col-md-6 info-pelicula1">
                <section class="row size-titulo">
                    <article class="col-md-7 orden">
                      <h2 class="titulo-pelicula">{{pelicula.Peliculas[2].Titulo}}</h2>
                      <h3 class="fecha-pelicula">{{pelicula.Peliculas[2].Año}}</h3>
                    </article>
                    <article class="col-md-5  caja-puntuacion orden"> 
                      <h3 class="puntuacion col-md-10">{{pelicula.Peliculas[2].Valoracion}} <i class="fa fa-star estrella" aria-hidden="true"></i>
                      </h3> 
                    </article>
                </section>
                <section class="row size-sinopsis">
                      <div class="sinopsis">
                      {{pelicula.Peliculas[2].Argumento}}
                      </div>
                  </section>
                  <section class="row info-pelicula2">
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Director: {{pelicula.Peliculas[2].Director}}</p>
                      </div>
                    </article>
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Género: {{pelicula.Peliculas[2].Genero}}</p>
                      </div>
                    </article>
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Duración: {{pelicula.Peliculas[2].Duracion}}</p>
                      </div>
                    </article>
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Edad:</p>
                        <article v-bind:class="edad(pelicula.Peliculas[2].Publico)"> 
                          <div class="edad">
                            <h3 class="">{{pelicula.Peliculas[2].Publico}}</h3>
                          </div> 
                        </article>
                      </div>
                    </article>
                  </section>
                <section class="row botones-peliculas">
                    <article class="col-md-7 orden">
                      <a class="botonPelicula col-md-8" v-on:click="peliculaSeleccionada()">VER PELICULA</a>
                    </article>
                    <article class="col-md-4 offset-md-1  caja-puntuacion orden"> 
                      <i v-bind:class="services[aux+2].corazon[services[aux+2].like]" aria-hidden="true" v-on:click="like(2)"></i>
                    </article>
                </section>
              </article>
          </section>
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
  name: 'turecomendacion',
  
  data () {
    return {
      active: 'home',
      cont: 0,
      msg: 'Pregunta 1',
      aux: 0,
      edadRecomendadas:['col-md-1 tp','col-md-1 e7','col-md-1 e16','col-md-1 e18'],
     
     services: [
            {
                edad:'e18 col-md-1',
                texto_edad:'18',
                like: 0,
                corazon:[ "fa fa-heart-o fa-2x corazon",
                        "fa fa-heart fa-2x corazon"] 

            },{
                name: 'El silencio de los corderos',
                fecha_pelicula: '(1991)',
                sinopsis:'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
                genero:' Crimen, Drama',
                director:'Jonathan Demme',
                puntuacion: '8.6',
                duracion:' 1h 58min',
                edad:'e18 col-md-1',
                texto_edad:'18',
                image: "src/assets/img/carteles/el_silencio_de_los_corderos.jpg",
                like: 0,
                corazon:[ "fa fa-heart-o fa-2x corazon",
                        "fa fa-heart fa-2x corazon"] 
            },{
                name: 'Seven',
                fecha_pelicula: '(1995)',
                sinopsis:'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
                genero:'Crimen, Drama',
                director:'David Fincher',
                puntuacion: '8.6',
                duracion:'2h 7min',
                edad:'e18 col-md-1',
                texto_edad:'18',
                image: "src/assets/img/carteles/seven.jpg",
                like: 0,
                corazon:[ "fa fa-heart-o fa-2x corazon",
                        "fa fa-heart fa-2x corazon"] 
            }
        ]
    }
  },


  methods: {




        edad: function(edadPeli){
          
          if(edadPeli=='Todos'){
            return this.edadRecomendadas[0];
          }else if(edadPeli==7){
            return this.edadRecomendadas[1];
          }else if(edadPeli<=17 && edadPeli>7){
            return this.edadRecomendadas[2];
          }else if(edadPeli>=18){
            return this.edadRecomendadas[3];
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
        peliculaSeleccionada: function(item){ //Seleccionas la película que deseas
          
           var  hide=document.getElementById("1"); // Se oculta el componente de las 3 películas destacadas
            hide.style.display="none";
            var  hide2=document.getElementById("2"); // Se oculta el componente de las películas por género
            hide2.class="botonPelicula";
            var  hide2=document.getElementById("3");  // Se oculta el componente de las películas destacadas de otros géneros
            hide2.style.display="none";


            var  hide3Pelicula=document.getElementById("pelicula");
            hide3Pelicula.style.display="inherit"; // Desbloqueamos el componente película, ahora cargará sólo este y ocultará los anteriores
            var  hide4Pelicula=document.getElementById("nueva");
            hide4Pelicula.style.display="inherit"; // Desbloqueamos el componente película, ahora cargará sólo este y ocultará los anteriores

        },

        like: function(pos){
            var i = pos;
            var comparar = this.services[i].like
            if(comparar==0)
                this.services[i].like=1;
            
            if(comparar==1)
                this.services[i].like=0;

             this.$forceUpdate();
        }

    }



}
</script>

