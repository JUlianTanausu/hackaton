<template>
    <section class="menuPrincipal col-md-1">
            <input id="burger" type="checkbox" class="invisible"/>
            <label for="burger" class="offset-md-11">
                <span></span>
                <span></span>
                <span></span>
            </label>
            
            <nav class="menu animated fadeInDownBig">    
              <ul class="items-menu">
                <li><a href="#" v-on:click="cambiarPagina(8)">Perfil</a></li>
                <li><a href="#">Favoritos</a></li>
                <li><a href="#" v-on:click="cambiarPagina(6)">Mi Aura</a></li>
                <li><a href="#" v-on:click="cambiarPagina(6)">Ayuda</a></li>
              </ul>  
            </nav>
     </section>
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
  
  
   methods: {
      ...mapActions([
          'cambiarPagina'
      ]),
     /*
        CONT
    -----------
    [0] Aura
    [1] Preferencia
    [2] Me apetece
    [3] Sorprendeme
    [4] Recomiendame algo rapido
    [5] Generos
    [6] Ayuda
    [7] PeliculasGustos
     */
    
   }
}
</script>