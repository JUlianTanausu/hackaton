<template>
<div id="perfil" v-cloak> 
    <div class="juego container">
        <section class="row justify-content-between pregunta">
            <article class="col-md-12">
              <h1>esto es todo lo que se de ti</h1>
              <h1>{{get}}</h1>
               
            </article>
        </section>
<form id="myForm" > 
  <div class="row">
    <div class="col">
        <label for="exampleInputEmail1">Localizacion</label>
      <input type="text" class="form-control" style="opacity: 0.5" v-model="datos.regionName" disabled>
    </div>
    <div class="col">
        <label for="exampleInputEmail1">Dispositivo</label>
      <input type="text" class="form-control" style="opacity: 0.5">
    </div>
    <div class="col">
      <label for="exampleInputEmail1">Navegador</label>
      <input type="text" class="form-control"  style="opacity: 0.5">
    </div>
  </div>
 <div class=space></div>
  <div class="row">
    <div class="col">
        <label for="exampleInputEmail1">Fecha de visita</label>
      <input type="text" class="form-control" style="opacity: 0.5" v-model.trim="getDia() +'-'+ getMes() +'-'+ hoy.getFullYear() " disabled>
    </div>
    <div class="col">
        <label for="exampleInputEmail1">Hora de visita</label>
      <input type="text" class="form-control" style="opacity: 0.5" v-model="getHora() +':'+ getMinutos() +':'+ hoy.getSeconds() " disabled>
    </div>
    <div class="col">
        <label for="exampleInputEmail1">direccion IP</label>
      <input type="text" class="form-control" style="opacity: 0.5" v-model="datos.query" disabled>
    </div>
  </div>

<div class=space></div>
<div class=space></div>
 

<div class="container">
  <div class="row">
    <div class="col align-self-start">
    
    </div>
    <div class="col align-self-center">
      <button type="button" class="btn btn-success" style="background-color:#00FF98; color:black" v-on:click="borrar()">Borrar todos los datos</button>
    </div>
    <div class="col align-self-end">
      
    </div>
  </div>
</div>


 <button type="button" class="btn btn-success" style="background-color:#00FF98; color:black" v-on:click="enviar()">GET</button>



</form>
<h1>{{JSON.stringify(albumes)}}</h1>
    </div>

    
</div>
</template>


<script>
  import axios from 'axios';
export default {

  name: 'perfil',
  
  
  data () {
      
    return {
      
       
      hoy : new Date(),
      albumes: [],
       datos: [] 
   
   
       
    }
  },
  

 
 mounted () {
 axios({	
          method: 'get',
            url: "http://ip-api.com/json", 
             

}).then((response) => { this.datos = response.data })


 },


 
  
  methods: {

    getDia: function(){
      var actual = new Date();

      if(actual.getDate()<10)
        return '0'+actual.getDate();
      else
        return actual.getDate();
    },


    getMes: function(){
      var actual = new Date();

      if((actual.getMonth()+1) < 10)
        return '0'+actual.getMonth()+1;
      else
        return actual.getMonth()+1;
    },


 
    getHora: function(){
      var actual = new Date();

      if(actual.getHours() < 10)
        return '0'+actual.getHours();
      else
        return actual.getHours();

    },

    getMinutos: function(){
         var actual = new Date();

      if(actual.getMinutes() < 10)
        return '0'+actual.getMinutes();
      else
        return actual.getMinutes();
    },




      borrar:function(){
          document.getElementById("myForm").reset();
      },



  



      enviar:function () {
     // axios.get('http://auraweb.uksouth.cloudapp.azure.com:5000')
       // .then((response) => { this.albumes = response.data })


       axios({	
          method: 'get',
            url: "http://auraweb.uksouth.cloudapp.azure.com:5000", 
              headers: {
          
          'Authorization': 'putaso '
        },

}).then((response) => { this.albumes = response.data })

/*        axios.post('http://auraweb.uksouth.cloudapp.azure.com:5000', {
        name: 'hola'
        
    
  })
*/
        this.$forceUpdate();
    }


      
           
    }
}
</script>

