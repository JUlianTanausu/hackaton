<template>
<div id="preferencia" v-cloak> 
    <div class="juego container">
    <article class="centrado">
          <a class="botonAura col-md-2 GenerosBottom" href="#" v-on:click="cambiarPagina()">Películas</a> 
          <a class="botonAura col-md-2 GenerosBottom" href="#" v-on:click="cambiarPagina()">Series</a> 
          <a class="botonAura col-md-4 GenerosBottom" href="#" v-on:click="cambiarPagina()">Programas</a>
        </article>
    </div>
</div>
</template>


<script>
export default {
    name: 'recomiendame',
}
</script>


