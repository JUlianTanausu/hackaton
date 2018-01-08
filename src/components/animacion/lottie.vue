<template>
    <div :style="style" ref="lavContainer"></div>
</template>

<script>
  import bodymovin from 'bodymovin';

  export default {
    props: {
      height: Number,
      width: Number,
    },
    data () {
      return {
        anim: null,   
        style: {
          width: this.width ? `${this.width}px` : '100%',
          height: this.height ? `${this.height}px` : '100%',
          overflow: 'hidden',
          margin: '0 auto'
        }
      }
    },
    methods: {
       /**
       @function loadAnimation
       @argument animation array con parámetros necesarios para el objeto bodymovin. En este caso
                           el path y el parametro loop
       @description Esta función, primero comprueba si la animación existe, que si es el caso la
                    destruye, y carga la animación con los parámetros indicados. Luego activa la animación y envía
                    el mensaje de que la animación se ha activado.
        */
        loadAnimation ( animation) {
          console.log("loadAnimation");
          if(this.anim) this.anim.destroy();
          this.anim = bodymovin.loadAnimation({
            container: this.$refs.lavContainer,
            renderer: 'svg',
            loop: animation.loop,
            autoplay: false,
            animationData:animation.animationData,
            rendererSettings: animation.rendererSettings
            
          });
          console.log(animation);
          console.log(this.anim);
          this.anim.play();
          this.$emit("animPlayed");
        },
        
        /**
       @function animCompleted
       @description Esta función emite un aviso al padre "animacion" indicando que la animación se ha completado.
        */
        animCompleted(){
          this.$emit('completed');
        }
    },
    mounted () {
      // escuchamos al padre que nos avisará de que hay una nueva animación
      // este control estará escuchando eventos del padre, el padre no debe (puede pero no debe) acceder a objetos del hijo
      // y en este caso emite eventos y es este control el que se "subscribe", en el mounted (o created o cuando queramos)
      
      /**
       @event animationChanged
       @description Cuando se detecta el evento animationChanged que envia animacion, se llama a loadAmination
                    para cargar la animacion*/
     
      this.$parent.$on('animationChanged', ( animation) => {
        if(this.anim)this.anim.goToAndStop(0);
        this.loadAnimation( animation ) ;
      });
      
      /**
       @event animationChanged
       @description Cuando se detecta el evento fireOncomplete que envia animacion, se llama añade el 
       evento "complete" a la animacion para que llame al método animCompleted cuando la animación se
       haya completado*/
   
      this.$parent.$on('fireOnComplete',()=>{
        console.log("ESTOT EN LOTTIE");
        if( this.anim ){
          var lottie_vue=this;
          this.anim.addEventListener('complete',lottie_vue.animCompleted);
        }
      });
    },
  }
</script>
