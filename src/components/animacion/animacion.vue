<template>
    <div id="animacion">
        <lottie  :height="400" :width="400" id="lottie" v-on:completed="sigAnim" v-on:animPlayed="lanzaEvento"/>   
        <weather  style="display:none" v-on:weatherReady="sigAnim"/> 
        <outputAura></outputAura>
        
        <artyom></artyom>   
    </div>
</template>

<script>
  import Lottie from './lottie.vue';
  import axios from 'axios';
  import Weather from './weather.vue';
  import artyom from './artyom.vue';
  import outputAura from './outputAura.vue';
  import inputUser from './inputUser.vue';
  export default {
    name: 'animacion',
    components: {
      'lottie': Lottie,
      'weather': Weather,
      'artyom': artyom,
      'inputUser':inputUser,
      'outputAura':outputAura
    },
    data() {
     return {
      pathData:'../../assets/anims/',
      anims:[],
      cont: 0,
      evento:'',
      siguiente:'',
      defaultOptions: [],
      animsClima:[],
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
               var object=response.data.animaciones;
               vue.anims=object;
           vue.initAnimation(); 
        }).catch(function (error) {console.log(error);});
        
      },

      /**
      @function initAnimation
      @description Esta funcion llama a buildAnims() y chooseAnim */
      initAnimation:function(){
        this.buildAnims();
        this.chooseAnim("inicial",true);  
       
      },
          
      /**
      @function buildAnims
      @prop: defaultOptions, guarda el path de las animaciones y la propiedad loop que indica 
             si la animacion tiene que repodrucirse en bucle o no
      @prop: animsClima, guarda los datos de las animaciones relacionadas con el clima
      @description: Construimos  el array deFaultOption pasarselo a lottie y  el array de las animacions
                    del clima comprobando que la animacion tenga la propiedad tipo=clima*/
     
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
             });
           
             if(anim.tipo=="clima"){
            this.animsClima.push(
              anim
            );
          }
          });
           console.log( 'anims loaded:', this.defaultOptions ) 
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
         console.log(anim);
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
        
        this.evento=animacion.evento;
        this.siguiente=animacion.siguiente;
        this.cont= animacion.posicion;
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
      this.$emit('animationChanged', this.defaultOptions[ this.cont ]);
        
      },
      
      /**
      @function lanzaEvento
      @description Una vez que recibimos el aviso de lottie de que ha cargado una animación, tenemos que
      lanzar el evento que se corresponda a la misma, para ello comprobamos el valor de la variable evento
      que se corresponde con el evento asociado a la animacion actual tenemos tres opciones: click, complete
      y weather, en cada caso llamamos a la funcion que corresponda que lanzará un evento u otro.
       */
      lanzaEvento: function(){
      switch (this.evento){
          case 'click':
            this.onClick();
          break;
          case 'complete':
            this.onComplete();
          break;
          case 'weather':
          this.onWeather();
          break;
            case 'enter':
            break;
        }
      },

      /**
      @function onClick
      @description Como bodymovin no tiene la opcion de añadir un evento tipo click a la animacion, tenemos
      que coger el elemento html en el que se reproducen las animaciones y añadir el evento click aquí que 
      al ser detectado llamará al método sigAnim  */
      onClick:function(){
        var anim_lottie=document.getElementById("lottie");
        var vue =this;
        anim_lottie.addEventListener('click', function(){
          vue.$emit("speak");
            vue.sigAnim();});
      },
      /** 
      @function onWeather
      @description Si el evento que corresponde a la animación es onWeather, quiere decir que la animación
      siguiente va a ser una de tipo clima y tenemos que avisar al vue de weather para que llame a la api
      del clima y saber que clima hace en ese momento para poner la animacion correspondiente. Cuando 
      weather obtenga el clima avisará de nuevo mediante el evento weatherReady que cuando sea detectado
      llamará a la función sigAnim */
      onWeather:function(){
       this.$emit('onWeather');

      },
       /** 
      @function onWeather
      @description Si el evento que corresponde a la animación es complete, quiere decir que  tenemos que avisar
      al vue de lottie para que añada en la animacion de bodymovien el evento complete y que cuando detecte que
      la animación se ha completado nos avise mediante el evento "completed" que al detectarlo llamará a la
      función sigAnim */
      onComplete:function(){
      
       this.$emit('fireOnComplete');
      },

  
       /** 
      @function sigAnim
      @description Para seleccionar la siguiente animacion, estudiamos el campo siguiente de la animacion actual,
      que puede ser el nombre de la animación directamente o un campo que nos indique que tenemos que buscarla,
      en este caso tenemos la opción de que tengamos que buscar el clima, pero tenemos un switch por si en el 
      futuro tenemos más opciones de animaciones sdgún contexto. Una vez que tenemos la animación siguiente,
      vamos a elegir la siguiente con chooseNext pasandole el nombre indicado.

      */
      sigAnim:function(icon, night, sunrise,sunset){
   
        var siguiente;
        console.log("SIGANIM");
        if(this.siguiente=='morphing')this.siguiente=this.getWeather(icon,sunrise,night,sunset);
        this.chooseAnim("siguiente",this.siguiente);
      },

      /** 
      @function getWeather
      @description Para saber cual es la animación que se corresponde con el clima actual, cogemos el elemento
      html numbicon que tendra como valor el codigo que asociamos con nuestras animaciones y nos dirña el nombre
      de la animación a la que corresponde. Una vez encontrado determinamos que esa es la animación y salimos
      
      */
      getWeather:function(icon,night,sunrise,sunset){
      
      var siguiente;
      var encontrado=false;
      if (night==true){
        siguiente="Luna";
        return siguiente;
      }else if((sunrise==true)||(sunset==true)){
        siguiente="Amanece";
        return siguiente;
      }else{
        for(var i in this.animsClima){
          var icons=this.animsClima[i].weatherIcons;
          for (var j in icons){
             if(icons[j]==icon){
              encontrado=true;
              siguiente=this.animsClima[i].nombre;
              return siguiente;
              break;
              }
            if(encontrado)break;
            }
          if(encontrado)break;
          }
        }
      },

    },
    
    mounted( ) {
      this.getAnims('http://localhost:8086/api/animacion/');
   
    }
  }
</script>

