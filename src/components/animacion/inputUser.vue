<template>
	<div class="col campos-aura" id="inputuser">
		<input id="userMsg" ref="userMessage" 
			v-on:keyup.enter="submit" class="comentario-user col-6 texto-usuario"
		 autofocus="autofocus">
		<directLine></directLine>
	</div>

</template>

<script type="text/javascript">

import directLine from '../directLine.vue';
	export default {
		name: 'inputuser',
		components:{ "directLine":directLine},
	    methods: {
	        submit: function(){
				this.$emit("mandarMensaje",this.$refs.userMessage.value);
				//mandar_mensaje(this.$refs.userMessage.value);
	        }
		},
		mounted(){
		var fondo=document.getElementById("miniaura");
		if(fondo==null)fondo=document.getElementById("animacion")
		fondo.onclick=function(){
			console.log("fondo tocando");
			var input=document.getElementById("userMsg");
			input.focus();
		}

		}
	}



</script>


