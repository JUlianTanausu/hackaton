<template>
  <div class="container">
  <div class="row">
    <div class="elegant-calencar">
        <div id="header" class="clearfix">
            <div class="head-info col-md-12">
                <div class="head-day"></div>
                <div class="head-month"></div>
            </div>
        </div>
        <table id="calendar">
            <thead>
                <tr>
                    <th>Dom</th>
                    <th>Lun</th>
                    <th>Mar</th>
                    <th>Mie</th>
                    <th>Jue</th>
                    <th>Vie</th>
                    <th>Sab</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td> 
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td v-on:click="muestra(0)"></td>
                    <td v-on:click="muestra(1)"></td>
                    <td v-on:click="muestra(2)" ></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td  v-on:click="muestra(0)"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
  </div>
</div>
<div class="col-md-12" style="margin-top: -10%">
  
      <div class="elegant-day">
        <div id="header-dia" class="clearfix">
                <div class="balance">Balance mensual</div>
        </div>
        <table id="calendar" class="row" style="background: white;">
                <div class="col-md-6 caja-saldo">SALDO</div>
                <div class="col-md-6 caja-saldo puta_css">{{generos[0].saldo_actual}}  €</div>
                <div class="col-md-12">           
                        <div style="margin-bottom:1%;">Estos son los gastos que has hecho hoy:</div>
                        <div class="row">
                        <div class="col-md-6"> TIPO DE GASTO</div>
                        <div class="col-md-6"> DINERO GASTADO</div>
                        </div>
                        <div class="row">
                        <div class="col-md-6 concepto-align">
                            <div>Transporte</div>
                            <div>Hogar</div>
                            <div>Restauracion</div>
                            <div>Salud</div>
                            <div>Compras y ocio</div>
                            <div>Supermercado</div>
                        </div>
                        <div class="col-md-6 dinero-align"> 
                            <div>{{generos[0].transporte}} €</div>
                            <div>{{generos[0].hogar}} €</div>
                            <div>{{generos[0].restauracion}} €</div>
                            <div>{{generos[0].salud}} €</div>
                            <div>{{generos[0].ocio}} €</div>
                            <div>{{generos[0].supermercado}} €</div>
                        </div>
                        </div>
                 </div>


        </table>
    </div>

</div>
</div>

</template>
<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    computed: {
        generos(){
            return this.$store.state.generos;
        },

         cont(){
            return this.$store.state.cont;
        },

        ...mapGetters([
            'saleGeneros',
            'getcont'
        ])
    },




  name: 'generos',
  data () {
    return {
      pos: 0,
      contador:0,
        services: [
           {
                concepto: "Transporte", 
                dinero: 30,
                concepto1: "Hogar", 
                dinero1: 10,   
                concepto2: "Restauracion", 
                dinero2: 6,   

            },{
                concepto: "Salud", 
                dinero: 30,
                concepto1: "Compras y ocio", 
                dinero1: 100,   
                concepto2: "Hogar", 
                dinero2: 16,   

            },{
                concepto: "Restauracion",
                dinero: 30               }

            
        ]
    }
  },

  methods: {

    muestra: function(i){
      this.pos=i;
    }
    
    }
}

</script>
