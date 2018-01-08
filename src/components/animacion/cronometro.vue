<template>
    <div id="cronometro">
        <lottie  :height="150" :width="150" id="lottie"/>           
    </div>
</template>

<script>
  import Lottie from './lottie.vue';
 
  export default {
    name: 'cronometro',
    components: {
      'lottie': Lottie,
      
    },
    data() {
     return {
    pathData:'../../assets/anims/',

      anim:'Cuentaatras.json',
      cont: 0,
      defaultOptions: [],
      }
    },

    methods: {
        
        /**@function initCronometro
         * @description Al inicial establecemos cual es la animacion del cronometro e indicamos
         * que ira en bucle, una vez determinados esos parametros llamamos a la funcion change
         */
        initCronometro:function(){
            this.defaultOptions.push({
              animationData: require("../../assets/anims/"+this.anim),
                loop:true});
            this.change();
        },
        /**@function change
         * @description Envia un evento a lottie para indicar que carge la animacion con los
         * parametros indicados
         */
        change:function(){
            console.log("change");
            this.$emit('animationChanged', this.defaultOptions[ this.cont ]);
        },
    
         /**@function next
         * @description Cuando llegue un aviso para iniciar el cronometro llamamos a esta funcion
         * que enviará un aviso de que el cronometro llega a su fin tras los segundos establecidos
         */
        next:function() {
            var vue=this;
            setTimeout(function(){
                vue.$emit('timeOut');
            }, 11400);
        },
    
    },
      
    mounted( ) {
        this.initCronometro();
        this.next();
        this.$parent.$on("cronoreload",()=>{
           this.next();
        });
    }
  }
  </script>