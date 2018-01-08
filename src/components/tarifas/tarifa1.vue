<template>
<div class="row">
    <div class="col-md-4">
        <img src="\src\assets\img\tarifa\prueba.gif" style="width: 50%; display:block;margin:0 auto 0 auto; ">
    </div>
    <div class="col-md-4">
        <img class="col-md-4" src="\src\assets\img\tarifa\cable.png" style=" width: 17%; display:block;margin:0 auto 0 auto;">  </img>
    </div>
   <div class="col-md-4">
    <div>
    <input type="checkbox" id="tarifa11" value="1" v-bind="selected_tarifas"  @click="next">
    <label for="tarifa1" style="color: white;font-family: telefonica-regular;">Sólo llamo si es urgente</label> 
  </div>
   <div>
    <input type="checkbox" id="tarifa12" value="2" v-bind="selected_tarifas" @click="next2">
        <label for="tarifa1" style="color: white;font-family: telefonica-regular;">Una vez al día</label> 
  </div>
   <div>
    <input type="checkbox" id="tarifa13" value="3" v-bind="selected_tarifas" @click="next3">
        <label for="tarifa1" style="color: white;font-family: telefonica-regular;">Hablo por los codos</label> 
   </div>
    </div>
</div>
</template>


     
    
  
  
<script>

export default {
  name: 'tarifa1',
    data() {
     return {
      selected_tarifas: [],
      selected:"",
      tarifa:0,
     }
    },
  methods:{

   next: function(){
          console.log("tarifa");
      // console.log(this.selected_tarifas[0]);
    
      this.$emit("tarifa", this.tarifa,1);

   },
   next2: function(){
      // console.log(this.selected_tarifas[0]);
      this.$emit("tarifa", this.tarifa,2);

   },
   next3: function(){
      // console.log(this.selected_tarifas[0]);
      this.$emit("tarifa", this.tarifa,3);

   }

  }
  



}
</script>

