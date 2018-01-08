<template>
<div id="directLine"></div>

</template>
<script>

import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
export default {
 computed: {
        paginas(){
            return this.$store.state.pagina;
        },

        ...mapGetters([
            'getpagina'
        ])
    },

name:'directLine',

data() {
     return {
         directLine:"",
      
    }},
    
    methods:{
...mapActions([
          'cambiarPagina'
      ]),

postButtonMessage:function (name) {
    this.directLine
        .postActivity({type: "event", value: "", from: {id: "me" }, name: name})
        .subscribe(console.log("Post hecho"));
        return this.tratarEvento(Activity);
    },
  response:function(activity){
     console.log("sssss", activity.text);
     artyom.say(activity.text);
    //Aura responde al usuario
    document.getElementById("auraMessage").value=activity.text;
    //Input usuario vacío
    document.getElementById("userMsg").value="";
 },
tratarEvento:function(activity){
    var pagina=(JSON.parse(activity.value)).Value;
     console.log("Recibido " + (JSON.parse(activity.value)).Value);
   // document.getElementById("valorPantalla").value= (JSON.parse(activity.value)).Value;
  
  this.cambiarPagina(pagina);

 },
 mandar_mensaje:function (mensaje){
    this.directLine.postActivity({
    from: { id: 'myUserHosnia', name: 'Hosnia' }, // required (from.name is optional)
    type: 'message',
    text: mensaje}).subscribe();
 }


    },

mounted(){
     //Conectamos con el bot.
this.directLine = new DirectLine.DirectLine({
    /*kikebot*/
  //  secret: 'gYj8SVurWjQ.cwA.VLI.DPr67gZr7YzC6vZNT2BRdpqQQkc4Y0TtLs0LcfLwDKU'/* put your Direct Line secret here */
 /*botarua*/
 secret: 'rNNz5UxSoxA.cwA.wW0.uZ34_4ZKxL045PAouULD32ip1sAaQT9A0Ply8AgHQPU'/* put your Direct Line secret here */
 
 });

 this.directLine.activity$
 .filter(activity => activity.type==="message" &&  activity.from.id==="botarua")
 .subscribe(
    activity => this.response(activity)
 );
  //Nos suscribimos a las actividades y las sacamos por el output.
 //Aqui deberemos distinguir que sea un mensaje de aura.
 
 this.directLine.activity$
    .filter(activity => activity.type === "event" && activity.from.id==="botarua")
    .subscribe(activity => this.tratarEvento(activity)
 );

    this.$parent.$on("pulsaBoton",this.postButtonMessage);
     
 //Enviamos un mensaje al bot a traves de direct line.
  this.$parent.$on("mandarMensaje",this.mandar_mensaje);
    }


}



</script>





 
 
     
 
 
 
 


 

 
 
 
