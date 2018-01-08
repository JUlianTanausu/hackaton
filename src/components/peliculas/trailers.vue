<template>
<div id="trailer" class="col-md-2">

 
  
    <div class="col-md-6">
  <video ref="videoRef1" src="" id="video-container1" width="100%" ></video>
   </div>
    <div class="col-md-6">
     <video ref="videoRef2" src="" id="video-container" width="100%" ></video>
</div>

  </div>






</template>
<script>

export default{

    name: 'trailers',
    components: {
     
    },
    data() {
     return {
      videos:["http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4",
      "http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"],
     
      }
    },
    mounted: function() {
  	this.$refs.videoRef1.src =this.videos[0];
    this.$refs.videoRef2.src =this.videos[1];
  
  }



}



</script>
<style>




</style>