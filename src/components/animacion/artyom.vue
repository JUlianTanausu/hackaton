<template>
<div id="artyom" style: display=none></div>
</template>

<script>

export default {
    name: 'artyom',
   
    data() {
     return{
    }
    },

   

    methods: {

            /***********FUNCIONALIDADES ARTYOM************** */
       speak: function(){
        if((document.getElementById("lottie")).classList.contains('active')){
          (document.getElementById("lottie")).classList.remove('active');
          this.stopArtyom();
        }else{
          (document.getElementById("lottie")).classList.add('active');
            this.startArtyom();
        }
      },



      stopArtyom: function(){
        artyom.fatality();
      },

      startArtyom: function(){
        artyom.initialize({
          lang: "es-ES",
          continuous:true,// Reconoce 1 solo comando y para de escuchar
                listen:true, // Iniciar !
                debug:true, // Muestra un informe en la consola
                speed:1 // Habla normalmente
        });
        this.says();
      },

      says: function(){
        //console.log("llega");
        //console.log(document.getElementById("userMsg").value);
        artyom.redirectRecognizedTextOutput(function(text,isFinal){
          var texto = document.getElementById("userMsg");
          if(isFinal){
            texto.value=text;
            console.log("AVER", text);
            mandar_mensaje(text);
          }else{

          }
        });
      }
        },
      mounted(){

          this.$parent.$on('speak', ()=>{
            this.speak();

          })


          
      }
      }
      
      </script>