<template>
<div class="row">
    <button id="botonObtenerTarifa" type="button"  v-on:click="calcularTarifa" class="botonAura col-md-3">Obtener Tarifa</button>
    <div class="col-md-12 offset-md-4"  id="tarifaAMostrar" style="display: none;">
      
      <div id="tarifa0" class="col-md-12">
            <div class="col-md-4" style="color: white; font-family: telefonica-regular; text-align: center; font-size: 100%;"> Tu tarifa óptima es:</div>
            <div class="col-md-4"></div>
            <div class="col-md-4"  style="color: #003245; font-family: telefonica-regular;background-color: #00FF98; text-align: center; font-size: 100%;">
              {{services[aux].nombreTarifa}}
            </div>
            <div class="col-md-4"></div>

            <div class="col-md-4"></div>
            <div class="col-md-4" style="background-color: white;">

                <div>{{services[aux].Caracteristica1}}</div>
                <div>{{services[aux].Caracteristica2}}</div>
                <div>{{services[aux].Caracteristica3}}</div>
                <div>{{services[aux].Caracteristica4}}</div>
                <div>{{services[aux].Caracteristica5}}</div>
                <div>{{services[aux].Caracteristica6}}</div>
                <div>{{services[aux].Caracteristica7}}</div>
                <div>{{services[aux].Caracteristica8}}</div>


            </div>
    </div>

    </div>

</div>


 </template>

<script>

export default {
  name: 'obtenertarifa',
  data () {
    return {
      aux: 9,
      prueba:"",
        services: [
            {
                nombreTarifa: 'Fusión0',
                Caracteristica1:'Fibra simétrica 300Mb',
                Caracteristica2:'Roaming UE',
                Caracteristica3:'200 minutos+2GB',
                Caracteristica4:'Movistar+ en tus dispositivos',
                Caracteristica5:'#0, Movistar eSports y 9 canales de TDT'
            },{
                nombreTarifa: 'Fusión+ Premium Extra',
                Caracteristica1:'Fibra simétrica 300 MB',
                Caracteristica2:'Llamadas ilimitadas y 20 GB entre dos líneas',
                Caracteristica3:'Roaming UE',
                Caracteristica4: 'Movistar+ en tus dispositivos',  
                Caracteristica5: 'Todo el fútbol, motor, selección de deportes, cine y series.. Más de 80 canales',
                Caracteristica6: 'Grabaciones 350h',
                Caracteristica7: 'Canales a la carta'
            },{
                nombreTarifa: 'Tarifa2',
                Caracteristica1:'Llamadas a 0 cent/min',
                Caracteristica2:'2 GB de navegación',
                Caracteristica3:'Roaming UE'     
            },{
                nombreTarifa: 'Fusión+ Premium',
                Caracteristica1:'Fibra simétrica 300 MB',
                Caracteristica2:'Llamadas ilimitadas y 8 GB de navegación',
                Caracteristica3:'Roaming UE',
                Caracteristica4: 'Grabaciones 350h',  
                Caracteristica5: 'Movistar+ en tus dispositivos',  
                Caracteristica6: 'Más de 80 canales',  
                Caracteristica7: '8 partidos de Liga y la copa',  
                Caracteristica8: 'Champions y Europa League'  
            },{
                nombreTarifa: 'Fusión+ Futbol',
                Caracteristica1:'Fibra simétrica 300 MB',
                Caracteristica2:'Llamadas ilimitadas y 8 GB de navegación',
                Caracteristica3:'Roaming UE',
                Caracteristica4: 'Grabaciones 350h',  
                Caracteristica5: 'Movistar+ en tus dispositivos',  
                Caracteristica6: 'Más de 80 canales',  
                Caracteristica7: '8 partidos de Liga y la copa',  
                Caracteristica8: 'Champions y Europa League'  

            },{
                nombreTarifa: 'Fusión+ Futbol Total',
                Caracteristica1:'Fibra simétrica 300 MB',
                Caracteristica2:'Llamadas ilimitadas y 20 GB entre dos líneas',
                Caracteristica3:'Roaming UE',
                Caracteristica4: 'Grabaciones 350h',  
                Caracteristica5: 'Movistar+ en tus dispositivos',  
                Caracteristica6: 'Más de 80 canales',  
                Caracteristica7: 'Todo el futbol, motor, deportes, cine y series'  
            },
            {
              nombreTarifa: 'Tarifa6',
                Caracteristica1:'200 minutos en llamadas',
                Caracteristica2:'6 GB de navegación',
                Caracteristica3:'Roaming UE'     
            },{
                nombreTarifa: 'Fusión+ Series',
                Caracteristica1:'Fibra simétrica 300 MB',
                Caracteristica2:'Llamadas ilimitadas y 4 GB',
                Caracteristica3:'Roaming UE',
                Caracteristica4: 'Movistar+ en tus dispositivos',  
                Caracteristica5: 'Series, #0, Movistar eSports, FOX, FOX Life y TDT'  
            },{
                nombreTarifa: 'Fusión+ Ocio',
                Caracteristica1:'Fibra simétrica 300 MB',
                Caracteristica2:'Llamadas ilimitadas y 8 GB',
                Caracteristica3:'Roaming UE',
                Caracteristica4: 'Movistar+ en tus dispositivos',  
                Caracteristica5: 'Series y más de 80 canales',
                Caracteristica6: 'Grabaciones 350h'
            },{
                nombreTarifa: 'Fusión+ Ficción Total',
                Caracteristica1:'Fibra simétrica 300 MB',
                Caracteristica2:'Llamadas ilimitadas y 20 GB entre dos líneas',
                Caracteristica3:'Roaming UE',
                Caracteristica4: 'Movistar+ en tus dispositivos',  
                Caracteristica5: 'Cine y Series, más de 80 canales, 8 partidos de liga, Champions y Europa League',
                Caracteristica6: 'Grabaciones 350h'
            },{
              nombreTarifa: 'Tarifa10',
                Caracteristica1:'Llamadas ilimitadas',
                Caracteristica2:'10 GB de navegación',
                Caracteristica3:'Roaming UE',
                Caracteristica4: 'SMS ilimitados' 

            },
            
        ]
    }
  },  
  methods: {
       calcularTarifa: function(){ 
            this.$emit("obtenerTarifa");
          
        

        },
        resultado: function(resultado){
            
            this.aux=resultado;
        var  mostrarTarifa=document.getElementById("tarifaAMostrar");
          mostrarTarifa.style.display="inherit"; // Desbloqueamos el componente película, ahora cargará sólo este y ocultará los anteriores
          var  quitarBoton=document.getElementById("botonObtenerTarifa");
          quitarBoton.style.display="none"; // Desbloqueamos el componente película, ahora cargará sólo este y ocultará los anteriores


        }

    },
    mounted(){

      
        this.$parent.$on("resultado",(resultado)=>{

                this.resultado(resultado);


        });

    }

}
</script>

