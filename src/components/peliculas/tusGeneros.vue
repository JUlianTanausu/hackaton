<template>
  <div class="form container-fluid" id="appGenero2"> 
    <div class="container-fluid">
        <section class="row empujar">
            <section class="row">
                <div class="col-md-1 caja-flechas3">
                    <a v-on:click="next()"><i class="fa fa-chevron-up fa-2x flechas" aria-hidden="true"></i></a>
                </div>
            </section>
            <section class="row order-12">
                <div class="col-md-1 caja-flechas4">
                    <a v-on:click="back()"><i class="fa fa-chevron-down fa-2x flechas" aria-hidden="true"></i></a>
                </div>
            </section>
            <section class="row img-preguntas">
                <!-- Imagen de género -->
                <div class="col-md-2 col-sm-12">
                    <div class="row">
                        <img class="CoincidenciaGenero col-md-6 offset-md-3" v-bind:src="services[aux+30].image"/>
                        <h3 class="NombreGenero col-md-12">Comedia</h3>
                    </div>
                </div>
          
                <div class="col-md-10">
                <div class="row">
                    <div class=" col-md-2">
                        <div class="pelis-genero">{{services[aux].name}}</div>
                        <a><img class="imagen-genero" v-bind:src="services[aux+5].image"/></a>
                    </div>
                    <div class=" col-md-2">
                        <div class="pelis-genero">{{services[aux].name}}</div>
                        <a><img class="imagen-genero" v-bind:src="services[aux+5].image"/></a>
                    </div>
                    <div class=" col-md-2">
                        <div class="pelis-genero">{{services[aux].name}}</div>
                        <a><img class="imagen-genero" v-bind:src="services[aux+5].image"/></a>
                    </div>
                    <div class=" col-md-2">
                        <div class="pelis-genero">{{services[aux].name}}</div>
                        <a><img class="imagen-genero" v-bind:src="services[aux+5].image"/></a>
                    </div>
                    <div class=" col-md-2">
                        <div class="pelis-genero">{{services[aux].name}}</div>
                        <a><img class="imagen-genero" v-bind:src="services[aux+5].image"/></a>
                    </div>
                </div>
                </div>
            </section>
        </section>
    </div>

  </div>

</template>



<script>

export default {
  name: 'appGenero2',
  
    data () {
    return {
      active: 'home',
      cont: 0,
      msg: 'Pregunta 1',
      aux: 0,
     services: [
            {
                name: 'Película0',
                solucion:1,
                image: "src/assets/img/pregunta1/frozen.jpg",
                active:false
            },{
                name: 'Película1',
                solucion:1,
                image: "src/assets/img/pregunta1/hp.jpg",
                active:false
            },{
                name: 'Película2',
                solucion:0,
                image: "src/assets/img/pregunta1/Losotros.jpg",
                active:false
            },{
                name: 'Película3',
                solucion:1,
                image: "src/assets/img/pregunta1/Olivertwist.jpg",
                active:false
            },{
                name: 'Película4',
                solucion:1,
                image: "src/assets/img/pregunta1/Spiderman.jpg",
                active:false
            },{
                name: 'Película5',
                solucion:0,
                image: "src/assets/img/pregunta1/uncangurosuperduro.jpg",
                active:false
            },

            //----------------------------

            {
                name: 'Película6',
                solucion:1,
                image: "src/assets/img/pregunta2/Johnwick.jpg",
                active:false
            },{
                name: 'Película7',
                solucion:0,
                image: "src/assets/img/pregunta2/MulhollandDrive.jpg",
                active:false
            },{
                name: 'Película8',
                solucion:1,
                image: "src/assets/img/pregunta2/Pancho.jpg",
                active:false
            },{
                name: 'Película9',
                solucion:1,
                image: "src/assets/img/pregunta2/Prettywoman.jpg",
                active:false
            },{
                name: 'Película10',
                solucion:0,
                image: "src/assets/img/pregunta2/Thering.jpg",
                active:false
            },{
                name: 'Película11',
                solucion:0,
                image: "src/assets/img/pregunta2/Titanic.jpg",
                active:false
            },


             //----------------------------


             {
                name: 'Película12',
                solucion:0,
                image: "src/assets/img/pregunta3/alien.jpg",
                active:false
            },{
                name: 'Película13',
                solucion:1,sinopsis:'Sinopsis: Lorem fistrum diodenoo quietooor apetecan se calle ustée a gramenawer llevame al sircoo diodenoo papaar papaar al ataquerl se calle ustée. Diodenoo no te digo trigo por no llamarte Rodrigor apetecan ese hombree.',
                mage: "src/assets/img/pregunta3/AnnieHall.jpg",
                active:false
            },{
                name: 'Película14',
                solucion:1,
                image: "src/assets/img/pregunta3/Cowboy.jpg",
                active:false
            },{
                name: 'Película15',
                solucion:1,
                image: "src/assets/img/pregunta3/Encantada.jpg",
                active:false
            },{
                name: 'Película16',
                solucion:0,
                image: "src/assets/img/pregunta3/Noviejos.jpg",
                active:false
            },{
                name: 'Película17',
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
                name: 'Película19',
                solucion:0,
                image: "src/assets/img/pregunta4/Elresplandor.jpg",
                active:false
            },{
                name: 'Película20',
                solucion:1,
                image: "src/assets/img/pregunta4/Fugacerebros.jpg",
                active:false
            },{
                name: 'Película21',
                solucion:0,
                image: "src/assets/img/pregunta4/Hugo.jpg",
                active:false
            },{
                name: 'Película22',
                solucion:0,
                image: "src/assets/img/pregunta4/JaneAusten.jpg",
                active:false
            },{
                name: 'Película23',
                solucion:1,
                image: "src/assets/img/pregunta4/libroEli.jpg",
                active:false
            },

            //-----------------------------------
            {
                name: 'Película24',
                solucion:1,
                image: "src/assets/img/pregunta5/Adele.jpg",
                active:false
            },{
                name: 'Película25',
                solucion:0,
                image: "src/assets/img/pregunta5/bladerunner.jpg",
                active:false
            },{
                name: 'Película26',
                solucion:1,
                image: "src/assets/img/pregunta5/elbecario.jpg",
                active:false
            },{
                name: 'Película27',
                solucion:1,
                image: "src/assets/img/pregunta5/infierno.jpg",
                active:false
            },{
                name: 'Película28',
                solucion:0,
                image: "src/assets/img/pregunta5/Regresion.jpg",
                active:false
            },{
                name: 'Película29',
                solucion:0,
                sinopsis:'Sinopsis: Lorem fistrum diodenoo quietooor apetecan se calle ustée a gramenawer llevame al sircoo diodenoo papaar papaar al ataquerl se calle ustée. Diodenoo no te digo trigo por no llamarte Rodrigor apetecan ese hombree.',
                genero:'Infantil',
                director:'Martin Scorsese',
                puntuacion: 9.5,
                duracion:'130',
                año: 2000,
                edad:"/src/assets/img/iconos/edad7.png",
                image: "src/assets/img/pregunta5/ToyStory.jpg",
                active:false
            },{
                image: "src/assets/img/iconos/Comedia_B.png",
                active:false
            }
        ]
    }
  },


  methods: {
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

        /**ESTO DE AQUI ENTIENDO QUE PUEDE ESTAR EN UN SOLO VUE INDICANDO QUE VUE ACTIVAMOS O DESACTIVAMOS*/
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

