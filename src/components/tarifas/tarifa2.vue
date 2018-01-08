<template>
<div class="row">   
    <div class="col-md-4">
              <div>
                  <input v-model="selected_tarifas" @click="next" value="1" id="check" name="check"  type="checkbox" style="display:block;margin:0 auto 0 auto;" />
                  <label for="check" style="color: white;font-family: telefonica-regular;">Gigas, ¿Eso qué es?</label> 
              </div>

              <div>
                  <input v-model="selected_tarifas" @click="next2" value="2" id="check" name="check"  type="checkbox" style="display:block;margin:0 auto 0 auto;" />
                  <label for="check" style="color: white;font-family: telefonica-regular;">Navego lo normal</label> 
              </div>

              <div>
                  <input v-model="selected_tarifas" @click="next3" value="3" id="check" name="check"  type="checkbox" style="display:block;margin:0 auto 0 auto;" />
                  <label for="check" style="color: white;font-family: telefonica-regular;">Me paso el día conectado</label> 
              </div>
    </div>
    <div class="col-md-4">
            <img class="col-md-4" src="\src\assets\img\tarifa\cable.png" style=" width: 17%; display:block;margin:0 auto 0 auto;">  </img>
    </div>
    <div class="col-md-4">
                 <img src="\src\assets\img\tarifa\prueba.gif" style="width: 50%; display:block;margin:0 auto 0 auto; ">

    </div>
</div>
</div> </template>

<script>

export default {
  name: 'tarifa2',
   data() {
     return {
     
      selected_tarifas: [],
      tarifa:1,

      
    }},
    
  methods:{

  next: function(){
      console.log("tarifa2");
      // console.log(this.selected_tarifas[0]);
      this.$emit("tarifa2", this.tarifa,1);

   },
   next2: function(){
      // console.log(this.selected_tarifas[0]);
      this.$emit("tarifa2", this.tarifa,2);

   },
   next3: function(){
      // console.log(this.selected_tarifas[0]);
      this.$emit("tarifa2", this.tarifa,3);

   }

  }
  



}
</script>
