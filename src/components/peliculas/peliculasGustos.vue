<template>
<div id="peliculasGustos">
        <div id="1">
        <turecomendacion></turecomendacion>
        </div>
        <div id="2">
            <div class="juego">
                <section class="row pregunta">
                    <article class="col-md-12">
                    <h1>ESTO TAMBIÉN PUEDE INTERESARTE</h1>
                    </article>
                </section>
            </div>
            <tusintereses></tusintereses>
        </div>
        <div id="3">
            <div class="juego">
                <section class="row pregunta">
                    <article class="col-md-12">
                        <h1>ESTOS GÉNEROS TAMBIÉN COINCIDEN CON TUS PREFERENCIAS</h1>
                    </article>
                </section>
            </div>
            <tusgeneros></tusgeneros>
        </div> 
</div>
</template>
<script>

 import turecomendacion from './tuRecomendacion.vue';
 import tusintereses from './tusIntereses.vue';
 import tusgeneros from './tusGeneros.vue';

  export default {
    name: 'miniaura',
    components: {
    'turecomendacion':turecomendacion,
    'tusintereses':tusintereses,
    'tusgeneros': tusgeneros,
     
    },}
</script>