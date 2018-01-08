<template>

<div class="row">
    <div class="col-md-4"><img src="\src\assets\img\tarifa\prueba.gif" style="width: 50%; display:block;margin:0 auto 0 auto; "></div>
    <div class="col-md-4">            <img class="col-md-4" src="\src\assets\img\tarifa\cable.png" style=" width: 17%; display:block;margin:0 auto 0 auto;">  </img>
</div>
    <div class="col-md-4"><div>
      <div>
          <input id="check" name="check" v-model="selected_tarifas" @click="next" value="1" type="checkbox" />
          <label for="check" style="color: white;font-family: telefonica-regular;">No veo TV</label> 
      </div>

      <div>
          <input id="check" name="check" v-model="selected_tarifas" @click="next2" value="2" type="checkbox" />
          <label for="check" style="color: white;font-family: telefonica-regular;">Zappeo luego existo</label> 
      </div>

      <div>
          <input id="check" name="check" ov-model="selected_tarifas" @click="next3" value="3" type="checkbox" />
          <label for="check" style="color: white;font-family: telefonica-regular;">Soy un cinéfilo/seriéfilo</label> 
      </div>

    </div></div>

     </div>


</div> </template>

<script>

export default {
  name: 'tarifa3',
   data() {
     return {
     
      selected_tarifas: [],
      tarifa:2,

      
    }},
    
  methods:{

  next: function(){
         console.log("tarifa3");
      // console.log(this.selected_tarifas[0]);
      this.$emit("tarifa3", this.tarifa,1);

   },
   next2: function(){
      // console.log(this.selected_tarifas[0]);
      this.$emit("tarifa3", this.tarifa,2);

   },
   next3: function(){
      // console.log(this.selected_tarifas[0]);
      this.$emit("tarifa3", this.tarifa,3);

   }


  }
  



}
</script>
