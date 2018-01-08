<template>
    <div id="miniaura" class="miniatura">
        <lottie  :height="400" :width="400" class="col-2" id="lottie" v-on:completed="sigAnim" v-on:animPlayed="lanzaEvento"/>    
        <artyom></artyom>
        <outputAura class="outputAura"></outputAura>
        <inputUser></inputUser>
    </div>
</template>
 
<script>

  import Lottie from './lottie.vue';
  import axios from 'axios';
 import artyom from './artyom.vue';
 import inputUser from './inputUser.vue';
 import outputAura from './outputAura.vue';
  export default {
    name: 'miniaura',
    components: {
      'lottie': Lottie,
      'artyom':artyom,
      'inputUser':inputUser,
      'outputAura':outputAura,
     
    },
    data() {
     return {
      path:'../src/assets/anims/',
       pathData:'../../assets/anims/',
      anims:[],
      cont: 0,
      evento:'',
      siguiente:'',
      defaultOptions: [],
     
      }
    },

    methods: {
        /**
      @function getAnims
      @prop anims: array que guarda los datos de las animaciones
      @argument url: Desde el metodo mounted que se inicia con vue le pasamos la url de la api de las animaciones
      @description Llamada a la api que consulta en mongo los datos de las animaciones y las guardamos en 
      la variable list. Luego llamamos al metodo initAnimacion, lo hacemos desde aqui para que se llame cuando
      obtengamos la respuesta de la api y no antes */
     getAnims:function(url) {
        console.log("GETANIMS");
        var vue=this;
         axios({	
                method: 'get',
                url: "http://auraweb.uksouth.cloudapp.azure.com:8890/api/animacion/", 
                headers: {

                'Content-Type': 'application/json',
                token : 'vivagalicia'
                },
          

               }).
        then(function (response) {
           console.log(response);
               var object=response.data.animaciones;
               vue.anims=object;
                   console.log(vue.anims);
           vue.initAnimation(); 
            }).catch(function (error) {console.log(error);});
     },

       /**
      @function initAnimation
      @description Esta funcion llama a buildAnims() y chooseAnim */
      initAnimation:function(){
        console.log("START initanimaciones");
        this.buildAnims();
        this.chooseAnim("inicial",true)
        console.log("END initanimaciones");
      },
        /**
      @function buildAnims
      @prop: defaultOptions, guarda el path de las animaciones y la propiedad loop que indica 
             si la animacion tiene que repodrucirse en bucle o no
      @prop: animsClima, guarda los datos de las animaciones relacionadas con el clima
      @description: Construimos  el array deFaultOption pasarselo a lottie y  el array de las animacions
                    del clima comprobando que la animacion tenga la propiedad tipo=clima*/
        buildAnims () {
           console.log("START buildAnims");
              
           this.anims.forEach( (anim) => {
             this.defaultOptions.push( {
              animationData: require("../../assets/anims/"+anim.archivo),
                loop: anim.loop
             })
 
          })
           console.log( 'anims loaded:', this.defaultOptions ); 
          console.log("END buildAnims");
      },
     /**
      @function chooseAnim
      @argument: key: clave por la que buscar un atributo de las animaciones
      @argument: val: valor de la clave con la que comparar el valor del atributo de las animaciones
      @description: Buscams que animacion tiene un atributo "key" con valor "value" y lo establecemos
      como la animación elegida a reproducir.
      Llamamos a setDataAnims para guardar los datos que necesitamos de la animación y llamamos a la 
      funcion change para reproducirla*/
      chooseAnim (key, val) {
        console.log("START chooseAnim");
        // si es inicial ... pues la cargamos y salimos
        if ( key === 'inicial') {
          // localizamos la primera
          let anim = this.anims.filter( x => x.inicial === val )[0]
          this.setDataAnims(anim)
          return  // salimos
        }
        if ( key === 'siguiente') {
          // localizamos la primera
          let anim = this.anims.filter( x => x.nombre === val )[0]
          this.setDataAnims(anim)
          return  // salimos
        }
      },
    
    
      /**
      @function setDataAnims
      @arg animacion: Animacion elegida para ser reproducida
      @prop evento: Guardamos el evento para saber cuando se va a cambiar a la animacion siguiente, que
            puede ser cuando se complete (complete), cuando se haga click en ella (click), o cuando se obtenga
            el clima llamando a la api correspondiente (weather)
      @prop siguiente: Indica la animacion que va a venir despuñes del evento, y puede ser el nombre de la
            siguiente animacion directamente, o puede ser "morphing" que por el momento, indica que va a venir
            alguna de las animaciones de tipo clima
      @prop cont: Se corresponde con la posicion de la animacion en el array que le pasamos a lotie para
            pasarle la animacion adecuada.
      @description: Guardamos los datos que necesitamos para continuar en el flujo de las animaciones*/

      setDataAnims: function(animacion){
        console.log("START setDataAnims");
        if(animacion.evento=="weather")this.evento="click";
        else{
        this.evento=animacion.evento;}
        if(animacion.siguiente=="morphing")this.siguiente="aura2mic";
        else{
        this.siguiente=animacion.siguiente;}
        this.cont= animacion.posicion;
        console.log("END setDataAnims")
        this.change();
      },
      /**
      @function change
      @description Emite un aviso indicando que la animacion ha cambiado y le pasa los parametros de la
      animacion que tiene que cargarse en lottie, ya que es este el que estará esperando por ese evento.
      Para ello le pasa a lotie las opciones relacionadas con los parametros necesarios para bodymovin a
      través de defaultOptions.
      Lottie cargará la animacion indicada y avisará de que la ha cambiado con el aviso "animPlayed" que
      ejecutará la función lanzaEvento
       */
      change:function(){
        console.log("START animationChanged");
      this.$emit('animationChanged', this.defaultOptions[ this.cont ]);
          console.log("END animationChanged");
      },

      lanzaEvento: function(){
        console.log("START  lanzaEvento");
        switch (this.evento){
          case 'click':
          this.onClick();
          break;
          case 'complete':
            this.onComplete();
          break;
        }
        console.log("END lanzaEvento");
      },
      /**
      @function onClick
      @description Como bodymovin no tiene la opcion de añadir un evento tipo click a la animacion, tenemos
      que coger el elemento html en el que se reproducen las animaciones y añadir el evento click aquí que 
      al ser detectado llamará al método sigAnim  */
    
      onClick:function(){
        console.log("START onClick");
        var el=document.getElementById("lottie");
        var vue =this;
        el.addEventListener('click', function(){
              vue.$emit('speak');
              vue.sigAnim();});
        console.log("END onClick");
       },
      
        /** 
      @function onComplete
      @description Si el evento que corresponde a la animación es complete, quiere decir que  tenemos que avisar
      al vue de lottie para que añada en la animacion de bodymovien el evento complete y que cuando detecte que
      la animación se ha completado nos avise mediante el evento "completed" que al detectarlo llamará a la
      función sigAnim */
  
      onComplete:function(){
        console.log("START onComplete");
        this.$emit('fireOnComplete');
         console.log("END onComplete");
      },
     
     
      sigAnim:function(){
        console.log("START sigAnim");
        this.chooseAnim("siguiente",this.siguiente);
      console.log("END sigAnim");
       
      },


     
   
    },
 
    mounted( ) {
      this.getAnims('http://localhost:8086/api/animacion/');
   
    }
    
  }
</script>
