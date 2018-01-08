<template> 
<div id="weatherTemplate"> 
    <div class="col-md-2 center" id="icon-cont"> 
        
        <div class="row"> 
             <div class="col-md-2"> 
             <label id="icon" value=this.weatherIcon>{{weatherIcon}}</label> </br> 
             </div> 
            <div class="col-md-7"> 
            <label id="weather">{{weather}}</label></br>  
            </div> 
        </div>    
    </div> 
    <div class="col-md-8 center"> 
    <div class="row"> 
        <div class="col-md-3"> 
            <h2 id="datos">Fecha</h2> 
        </div> 
        <div class="col-md-3"> 
             <h2 id="datos">Hora</h2> 
        </div> 
        <div class="col-md-3"> 
             <h2 id="datos">Sunset</h2> 
        </div> 
         <div class="col-md-3"> 
             <h2 id="datos">Sunrise</h2> 
        </div> 
    </div>  
    <div class="row"> 
        <div class="col-md-3"> 
            <label id="fecha">{{fecha}}</label></br> 
        </div> 
        <div class="col-md-3"> 
            <label id="hora">{{hora}}</label></br> 
        </div> 
         <div class="col-md-3"> 
            <label id="sunset">{{sunset}}</label></br> 
        </div> 
        <div class="col-md-3"> 
            <label id="sunrise">{{sunrise}}</label></br> 
        </div> 
     </div>    
     </div> 
    <div class="col-md-8 center"> 
    <div class="row"> 
        <div class="col-md-1"> 
          <h2 id="datos">IP</h2> 
        </div> 
        <div class="col-md-2"> 
            <h2 id="datos">Ciudad</h2> 
        </div>
        <div class="col-md-3"> 
          <h2 id="datos">Es de noche?</h2> 
        </div> 
        <div class="col-md-3"> 
            <h2 id="datos">Esta amaneciendo?</h2> 
        </div>
         <div class="col-md-3"> 
            <h2 id="datos">Esta anocheciendo?</h2> 
        </div>
    </div>  
    <div class="row"> 
        <div class="col-md-1"> 
            <label id="ip">{{ip}}</label></br> 
        </div> 
        <div class="col-md-2"> 
        <label id="ciudad">{{ciudad}}</label> </br> 
        </div> 
        <div class="col-md-3"> 
            <label id="moon">{{isNight}}</label></br> 
        </div> 
        <div class="col-md-3"> 
        <label id="issunrise">{{isSunrise}}</label> </br> 
        </div> 
        <div class="col-md-3"> 
        <label id="issunset">{{isSunset}}</label> </br> 
        </div> 
    </div>      
    </div> 
   </div> 
    </template> 
    <script> 
    import * as moment from 'moment'; 
    import axios from 'axios'; 
 
    export default { 
        name: 'weather', 
        data() { 
            return { 
                ciudad:"", 
                hora:"", 
                fecha:"", 
                weather:"", 
                weatherIcon:"", 
                sunset:"", 

                sunrise:"", 
                isNight:"", 
                isSunrise:"", 
                isSunset:"",
                ip:"", 
                language:"ES", 
                apikey:"661c3b956d3b444089d58c36a11259a6", 
                apikeyamt:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcmFuemF6dWJhcmJlcm9AZ21haWwuY29tIiwianRpIjoiMDRkOTkzNGUtZWYzMC00YjQ3LWJhZGMtNGRmN2E1NDFiNWExIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1MDk0NjEwMTYsInVzZXJJZCI6IjA0ZDk5MzRlLWVmMzAtNGI0Ny1iYWRjLTRkZjdhNTQxYjVhMSIsInJvbGUiOiIifQ.Zb27XLGW1Xc8zrVOpE356p-rWeMfgIFa-8eaLhrh-K8",
                cont:0} 
            }, 
        methods: { 
           
           
            /**
            @function getIP
            @description Llamamos a la api ip-api para obtener la ip y llamamos a setIP para guardar los datos
            */
            getIP:function (){ 
              
                var vue=this; 
                // axios.get("http://ip-api.com/json").then(function (response) { 
                //     vue.setIP(response.data); 
                // }).catch(function (error) {console.log(error);}); 
              axios({	
                method: 'get',
                url: "http://ip-api.com/json", 
              //  headers: { 'Access-Control-Allow-Origin': true 
               // }
                
                }
               // data: this.loadData(),
              //  json: true

               ).
                then(function (response) { 
                    vue.setIP(response.data); 
                }).catch(function (error) {console.log(error);}); 
            },
            /**
            @function setIP
            @description Guardamos la ip y la ciudad obtenida con la api ip-api y llamamos a getWeather para obtener
            el tiempo atmosférico 
            */
            setIP:function(dataIP){ 
               
                this.ip = dataIP.query, 
                this.ciudad=dataIP.city, 
                this.getWeather(); 
 
            }, 
             /**
            @function getWeather
            @description Como solo se llama una vez comprobamos que no se exceda y que no haya llamadas ilimitas
            puede que mas adelante esto no sea necesario pero para hacer las pruebas lo ponemos ya que podríamos
            tener problema de limite de llamadas a la api y de entrar en bucle.
            Luego llamamos a setWeather para guardar los datos que necesitamos
            */
            getWeather:function(){ 
                
                var vue=this; 
                if(this.cont>0){ 
                    console.log("call exceded"); 
                } 
                else{ 
                    // axios.get("https://api.weatherbit.io/v2.0/current?ip="+this.ip+"&key="+this.apikey) 
                    // .then(function (response) { 
                    //     console.log(response.data.data[0]); 
                    //     vue.setWeather(response.data.data[0]); 
                    //     vue.cont=1; 
                    // }).catch(function (error) {console.log(error);}); 
                      axios({	
                method: 'get',
                url: "https://api.weatherbit.io/v2.0/current?ip="+this.ip+"&key="+this.apikey, 
             //   headers: { 'Access-Control-Allow-Origin': true }
                
                }).

                
                
               // data: this.loadData(),
              //  json: true

               
                then(function (response) { 
                    vue.setWeather(response.data.data[0]); 
                        vue.cont=1; 
                }).catch(function (error) {console.log(error);}); 
                } 
                // axios({
                //     method:'get',
                //     url:"http://opendata.aemet.es/opendata/api/prediccion/ccaa/hoy/"+this.ciudad+"/?apikey=/"+this.apikeyamt,
                // }). then(function (response) { 
                //  //   vue.setWeather(response.data.data[0]); 
                //    //     vue.cont=1; 
                 
                //    console.log("AEMET");
                //    console.log(response);
                // }).catch(function (error) {console.log(error);}); 
                
            }, 
            /**
            @function setWeather
            @description Guardamos los datos que nos interesan y llamamos a getSunrise y getNight para saber si está
                         amaneciendo o es de noche
            @property weather: la descripcion del tiempo atmosferico
            @property weatherIcon: el código del tiempo atmosferico, relacionamos cada animacion con un conjunto de códigos
            @property sunset: hora a la que anochece
            @property sunrise: hora a la que amanece
            @property isSunset: si es de noche sabremos que la animacion es la luna
            @property isSunrise: si esta amaneciend0 sabremos que la animacion es amanecer

            */

            setWeather:function(dataWeather){ 
               
                this.weather=dataWeather.weather.description; 
                this.weatherIcon=dataWeather.weather.code; 
                this.sunset=dataWeather.sunset; 
                this.sunrise=dataWeather.sunrise; 
                this.isSunrise=this.getSunrise(this.sunrise);
                this.isNight=this.getNight(this.sunset);
                this.isSunset=this.getSunset(this.sunset);
                console.log(this.isSunset);
                this.$emit('weatherReady', this.weatherIcon, this.isSunrise, this.isNight,this.isSunset); 
            },

            /**
            @function getSunrise
            @description Cogemos la hora a la que aparece el sol y establecemos que acaba de amanecer una hora después
            luego vemos si la hora actual esta entre ese rango.
            */
            getSunrise:function(sunrise){
                var inicio_sunrise=moment(sunrise, 'hh:mm a'); 
                var hora= moment(this.hora,'hh:mm a'); 
                var fin_sunrise=moment(sunrise, 'hh:mm a').add(1, 'hours');  
                var sun=hora.isBetween(inicio_sunrise,fin_sunrise); 
                return sun;

            },
             /**
            @function getSunset
            @description Cogemos la hora a la que aparece el sol y establecemos que acaba de amanecer una hora después
            luego vemos si la hora actual esta entre ese rango.
            */
            getSunset:function(sunset){
                var inicio_sunset=moment(sunset, 'hh:mm a'); 
                var hora= moment(this.hora,'hh:mm a'); 
                var fin_sunset=moment(sunset, 'hh:mm a').add(1, 'hours');  
                var isSunset=hora.isBetween(inicio_sunset,fin_sunset); 
                return isSunset;

            },
             /**
            @function getNight
            @description Cogemos la hora a la que se pone el sol vemos si la hora actual es posterior, entonces es de noche.
            */
            getNight:function(sunset){
                var hora= moment(this.hora,'hh:mm a'); 
                var sunset=moment(this.sunset, 'hh:mm a'); 
                var night=hora.isAfter(sunset); 
                return night;
            },
              /**
            @function setFecha
            @description Guardamos la fecha y la hora actual
            */
            setFecha:function(){ 
             
                var now = moment().local(); 
                this.hora= now.format('hh:mm a'); 
                this.fecha= now.format('DD/MM/YYYY'); 
        
            },
            
        }, 
          
        mounted () { 
            var vue=this; 
            var i=0; 
            this.setFecha(); 
       //  this.getIP();
           this.$parent.$on('onWeather',()=>{ 
               this.getIP(); 
           }); 
        } 
    } 
    </script> 
    <style> 
     
     
     
     
    </style> 
 