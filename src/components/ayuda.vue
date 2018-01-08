<template>
 <section class="sugerencias container-fluid">
        <div class="row">
            <article class="col-md-4 sugerencias-top">
              <div class="sugerencias-izquierda animated">
                <ul>
                  <li><h2 class="izq1">Resolver incidencias</h2></li>
                  <li><h2 class="izq2">Recomendar películas</h2></li>
                  <li><h2 class="izq3">Compartir wifi</h2></li>
                  <li><h2 class="izq4">Medir la velocidad de conexión</h2></li>
                </ul>
              </div>
            </article>
            <article class="col-md-4 order-12 sugerencias-top">
              <div class="sugerencias-derecha">
                <ul class="btn-sugerencia">
                  <li><a><h2 class="der1">Resolver incidencias</h2></a></li>
                  <li><a><h2 class="der2">Recomendar películas</h2></a></li>
                  <li><a><h2 class="der3">Compartir wifi</h2></a></li>
                  <li><a><h2 class="der4">Medir la velocidad de conexión</h2></a></li>
                </ul>
              </div>
            </article>
             <article class="col-md-4">
                <div class="row">
                  <div id="miniaura-ayuda" class="col-md-12">  
               
                  </div> 
                  </div>
            </article>
                  
                  
        </div>

      </section>
  

</template>
<script>

export default {

name:'ayuda',


mounted(){

  var lottie=document.getElementById("lottie");
console.log(lottie);
    if (lottie.classList.contains('col-2')){
      lottie.classList.add('col-12');
      lottie.classList.remove('col-2');
    }
}

}




</script>