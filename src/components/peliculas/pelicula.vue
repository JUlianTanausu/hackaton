<template>
  <div class="form container-fluid" id="pelicula"> 
 <div class="row">
        <!-- Primera recomendacion -->
        <section class="col-md-4">
          <section class="row peliculas-destacadas">
            <article class="col-md-6 orden">
                <a><img class="portada-pelicula" v-bind:src="services[aux].image"/></a>
            </article>
            <article class=" col-md-6 info-pelicula1">
                <section class="row">
                    <article class="col-md-7 size-titulo orden">
                      <h2 class="titulo-pelicula">{{services[aux].name}}</h2>
                      <h3 class="fecha-pelicula">{{services[aux].fecha_pelicula}}</h3>
                    </article>
                    <article class="col-md-5  caja-puntuacion orden"> 
                      <h3 class="puntuacion col-md-10">{{services[aux].puntuacion}} <i class="fa fa-star estrella" aria-hidden="true"></i>
                      </h3> 
                    </article>
                </section>
                <section class="row size-sinopsis">
                      <div class="sinopsis">
                      {{services[aux].sinopsis}}
                      </div>
                  </section>
                  <section class="row info-pelicula2">
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Director: {{services[aux].director}}</p>
                      </div>
                    </article>
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Género: {{services[aux].genero}}</p>
                      </div>
                    </article>
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Duración: {{services[aux].duracion}}</p>
                      </div>
                    </article>
                    <article class="col-md-12">
                      <div class="datos-pelicula">
                        <p>Edad:</p>
                        <article v-bind:class="services[aux].edad"> 
                          <div class="edad">
                            <h3 class="">{{services[aux].texto_edad}}</h3>
                          </div> 
                        </article>
                      </div>
                    </article>
                  </section>
                <section class="row botones-peliculas">
                    <article class="col-md-7 orden">
                      <a class="botonPelicula col-md-8">VER PELICULA</a>
                    </article>
                    <article class="col-md-4 offset-md-1  caja-puntuacion orden"> 
                      <i v-bind:class="services[aux].corazon[services[aux].like]" aria-hidden="true" v-on:click="like(0)"></i>
                    </article>
                </section>
              </article>
          </section>
        </section>
        
</div>
</div>
</template>
<script>

export default {
  name: 'pelicula',
  
  data () {
    return {
      active: 'home',
      cont: 0,
      msg: 'Pregunta 1',
      aux: 0,
     services: [
            {
                name: 'El Resplandor',
                fecha_pelicula: '(1980)',
                sinopsis:'A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.',
                genero:' Drama, Terror',
                director:'Stanley Kubrick',
                puntuacion: '8.4',
                duracion:'2h 26min',
                edad:'e18 col-md-1',
                texto_edad:'18',
                image: "src/assets/img/carteles/el_resplandor.jpg",
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


  


}
</script>

   