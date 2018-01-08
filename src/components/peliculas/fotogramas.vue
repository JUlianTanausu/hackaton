<template>
<div id="frames" class="col-md-10">
 <div class="col-md-6">
 <img ref="frame1" src="" id="frame" width="100%" ></img>
   </div>
    <div class="col-md-6">
     <img ref="frame2" src="" id="frame" width="100%" ></img>
</div>
 <div class="col-md-6">
  <img ref="frame3" src="" id="frame" width="100%" ></img>
   </div>
    <div class="col-md-6">
     <img ref="frame4" src="" id="frame" width="100%" ></img>
</div>
 <div class="col-md-6">
  <img ref="frame5" src="" id="frame" width="100%" ></img>
   </div>
    <div class="col-md-6">
     <img ref="frame3" src="" id="frame" width="100%" ></img>
</div>
  </div>
  





</template>
<script>

export default{

    name: 'frames',
    components: {
     
    },
    data() {
     return {
      fotos:[
          "http://4.bp.blogspot.com/-DhQBiUp5HZA/Ty1a8zit5eI/AAAAAAAAAXs/Fj_YeSrb-KE/s1600/shi9.jpg",
          "http://3.bp.blogspot.com/-k2cWXzIGxFc/Ty1bPXKWjSI/AAAAAAAAAX4/q83d1zynRnI/s1600/shi53.jpg",
          "http://2.bp.blogspot.com/-SqltZ6aC5FQ/Ty1cqGGWx3I/AAAAAAAAAYc/GCkOD6tyXxg/s400/shi34.jpg",
            "http://3.bp.blogspot.com/-OJmY73fturo/Ty1chv0dYuI/AAAAAAAAAYQ/v4_w03GzCxE/s400/shi48.jpg",
      "http://3.bp.blogspot.com/-f4ErfVw1jno/Ty1bjwz0pqI/AAAAAAAAAYE/x9JGYxYlRj4/s1600/shi27.jpg",
      "http://3.bp.blogspot.com/-kqXC1nDvBik/Ty1c0WrmgpI/AAAAAAAAAYo/sTvHIJwZ8eU/s1600/shi61.jpg"
      
      ]
    }},
    mounted: function() {
        
  	this.$refs.frame1.src =this.fotos[0];
    this.$refs.frame2.src =this.fotos[1];
    this.$refs.frame3.src =this.fotos[2];
    this.$refs.frame4.src =this.fotos[3];
    this.$refs.frame5.src =this.fotos[4];
    this.$refs.frame6.src =this.fotos[5];
  
  }



}
</script>