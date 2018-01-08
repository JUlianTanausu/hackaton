<template>
<div id="tarifas">
    <h1 style="color: white; font-size: 100%; margin-top: 20px;">Cuéntame un poco más de tí</h1>


    <div style="margin-top: 30px;">
      <img class="col-md-4" src="\src\assets\img\tarifa\Tlfno_arriba-49.png" style=" width: 10%; display:block;margin:0 auto 0 auto;">  </img>
    </div>
    <div id="pregunta1" style="margin-top: -3%;">
    <tarifa1 v-on:tarifa="marcar"></tarifa1>
    </div>
    <div id="pregunta2" style="display: none;margin-top: -1.5%;">
    <tarifa2 v-on:tarifa2="marcar"></tarifa2>
    </div>
    <div id="pregunta3" style="display: none;margin-top: -1.5%;">
    <tarifa3 v-on:tarifa3="marcar"></tarifa3>
    </div>

      <div id="pregunta4" style="display: none;margin-top: -1.5%;">
        <tarifa4 v-on:tarifa4="marcar"></tarifa4>
      </div>

      <div id="pregunta5" style="display: none;margin-top: -1.5%;">
        <tarifa5 v-on:tarifa5="marcar"></tarifa5>
      </div>

      <div id="pregunta6" style="display: none;margin-top: -1.5%;">
        <tarifa6 v-on:tarifa6="marcar"></tarifa6>
      </div>

    <div style="margin-top: -3.5%; margin-left: 1%">
      <img class="col-md-4" src="\src\assets\img\tarifa\Tlfno_abajo-49.png" style=" width: 10%; display:block;margin:0 auto 0 auto;">  </img>
  </div>

      <div id="botonTarifa" style="display: none;margin-top: -1.5%;">
        <obtenertarifa v-on:obtenerTarifa="obtenerTarifa"></obtenertarifa>
      </div>
    </div>
 </div>

</template>

<script>
import tarifa1 from './tarifa1.vue';
import tarifa2 from './tarifa2.vue';
import tarifa3 from './tarifa3.vue';
import tarifa4 from './tarifa4.vue';
import tarifa5 from './tarifa5.vue';
import tarifa6 from './tarifa6.vue';
import obtenertarifa from './obtenerTarifa.vue';
 export default {
    name: 'tarifas',
    components: {
      'tarifa1': tarifa1,
      'tarifa2': tarifa2,
      'tarifa3': tarifa3,
      'tarifa4': tarifa4,
      'tarifa5': tarifa5,
      'tarifa6': tarifa6,
      'obtenertarifa': obtenertarifa,
    },
    data() {
     return {
        prueba:0,
        contador:0,
        resultados:[6],
        posiblesTarifas:[3],
        tarifaFinal:0,
      }
    },

    methods: {
        
    myFunction:function() {
        if (this.prueba==0){
        document.getElementById("desplieguemenu").style.display="inherit";
        this.prueba=1;
        }
        else {
        document.getElementById("desplieguemenu").style.display="none";
        this.prueba=0;}
    },

     

     marcar:function(pos, respuesta){
         console.log(this.contador);
        if (this.contador==0){
        document.getElementById("pregunta2").style.display="inherit";
        this.contador=1;}
        else if (this.contador==1){
        document.getElementById("pregunta3").style.display="inherit";
        this.contador=2;}
        else if (this.contador==2){
        document.getElementById("pregunta4").style.display="inherit";
        this.contador=3;}
        else if (this.contador==3){
        document.getElementById("pregunta5").style.display="inherit";
        this.contador=4;}
        else if (this.contador==4){
        document.getElementById("pregunta6").style.display="inherit";
        this.contador=5;}
        else if (this.contador==5){
          
        document.getElementById("botonTarifa").style.display="inherit";
       this.contador=6;}
        console.log(pos);
        console.log(respuesta);
        this.resultados[pos]=respuesta;
        console.log(this.resultados);
    },




    obtenerTarifa:function(){
      if(this.resultados[3]==1){ //Pregunta 4 opción 1
            if(this.resultados[2]==1){ //Pregunta 3 opcción 1
              if (this.resultados[1]==1) {   //Pregunta 2 opción 1
                this.posiblesTarifas[0]=2; //15 euros
                this.posiblesTarifas[1]=6; //27 euros
                this.posiblesTarifas[2]=0; //45 euros
                if (this.resultados[5]==1) {
                  this.tarifaFinal=this.posiblesTarifas[0];
                }
                else{
                  this.tarifaFinal=this.posiblesTarifas[2];
                }
              }
              else if (this.resultados[1]==2) {   //Pregunta 2 opción 2
                if(this.resultados[4]==2){
                      this.posiblesTarifas[0]=0; //60 euros
                      this.posiblesTarifas[1]=null;
                      this.posiblesTarifas[2]=null;
                      this.tarifaFinal=this.posiblesTarifas[0];
                    }
                else{    
                      this.posiblesTarifas[0]=2; //15 euros
                      this.posiblesTarifas[1]=6; //27 euros
                      this.posiblesTarifas[2]=7; //60 euros
                            if ((this.resultados[4]==1)&&(this.resultados[5]==1)) {
                              this.tarifaFinal=this.posiblesTarifas[0];
                            }

                            else if ((this.resultados[4]==2)&&(this.resultados[5]==1)) {
                              this.tarifaFinal=this.posiblesTarifas[1];
                            }
                            else{
                              this.tarifaFinal=this.posiblesTarifas[2];
                            }

                    }
              }
              else  {   //Pregunta 2 opción 3
                this.posiblesTarifas[0]=6; //27 euros
                this.posiblesTarifas[1]=10; //37 euros
                this.posiblesTarifas[2]=7; // 60 euros
                      if ((this.resultados[4]==1)&&(this.resultados[5]==1)) {
                                    this.tarifaFinal=this.posiblesTarifas[0];
                                  }

                      else if ((this.resultados[4]==2)&&(this.resultados[5]==1)) {
                                    this.tarifaFinal=this.posiblesTarifas[1];
                                  }
                      else{
                                    this.tarifaFinal=this.posiblesTarifas[2];
                                  }
              }

            }

            else if(this.resultados[2]==2){ //Pregunta 3 opcción 2
                this.posiblesTarifas[0]=8; //60 euros
                this.posiblesTarifas[1]=7; //60 euros
                this.posiblesTarifas[2]=9; //120 euros
                            if (this.resultados[4]<=2) {
                                    this.tarifaFinal=this.posiblesTarifas[0];
                             }
                            else{
                                     this.tarifaFinal=this.posiblesTarifas[2];
                                 }

            }
            else {//Pregunta 3 opcción 3
                this.posiblesTarifas[0]=9; //120
                this.posiblesTarifas[1]=1; //160
                this.posiblesTarifas[2]=7; //60

                            if (this.resultados[4]==1) {
                                    this.tarifaFinal=this.posiblesTarifas[2];
                             }
                            else{
                                     this.tarifaFinal=this.posiblesTarifas[0];
                                 }

            }

      }
     else if (this.resultados[3]>=2) { //Pregunta 4 opcción 2
            if(this.resultados[2]==3){//Pregunta 3 opcción 3
                this.posiblesTarifas[0]=3; //145
                this.posiblesTarifas[1]=9; //120
                
                this.posiblesTarifas[2]=7; //60
                            if (this.resultados[4]<=2) {
                                    this.tarifaFinal=this.posiblesTarifas[2];
                             }
                            else{
                                     this.tarifaFinal=this.posiblesTarifas[0];
                                 }
            }
            else{ //Pregunta 3 opcción 1 o 2
                this.posiblesTarifas[0]=4; //75
                this.posiblesTarifas[1]=5; //120
                this.posiblesTarifas[2]=0; //45 
                            if (this.resultados[4]==1) {
                                    this.tarifaFinal=this.posiblesTarifas[2];
                             }
                            else if (this.resultados[4]==2){
                                     this.tarifaFinal=this.posiblesTarifas[0];
                                 }
                            else {
                                     this.tarifaFinal=this.posiblesTarifas[1];
                            }

            }
     }


this.setTarifa(this.tarifaFinal);
this.getTarifa();



console.log('tarifas');
console.log(this.posiblesTarifas);
console.log('Tarifa elegida');
console.log(this.tarifaFinal);

this.$emit("resultado", this.tarifaFinal);
    },




setTarifa: function(tarifa){
    this.tarifaFinal = tarifa;
    console.log('Soy set tarifa')
   
  },

getTarifa: function (){
    console.log('Soy get tarifa')
    console.log(this.tarifaFinal);
return this.tarifaFinal;




    }
 },

 mounted(){




 }
 
 
 
 }
 </script>