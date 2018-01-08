import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)

export const store = new Vuex.Store({


    strict: true,
    state:{

        generos:[
            {nombre: 'Pepe',
             pass: 'pepe',
             saldo_actual: 2000,
             salario_mensual: 1200,
             meta: 5000,
             hogar: 30,
             hogar_porcentaje: 15,
             transporte: 20,
             transporte_porcentaje: 10,
             restauracion: 30,
             restauracion_porcentaje: 15,
             salud: 10,
             salud_porcentaje: 5,
             ocio: 30,
             ocio_porcentaje: 15,
             supermercado: 80,
             supermercado_porcentaje: 40,
             hucha: 0,
            },
          

          ],

          categorias:[
              {nombre: 'hogar', seleccionado:0},
              {nombre: 'ocio', seleccionado:0},
              {nombre: 'transporte', seleccionado:0},
              {nombre: 'salud', seleccionado:0},
              {nombre: 'ocio', seleccionado:0},
              {nombre: 'supermercado', seleccionado:0}

          ],
          pagina: 0,
          prueba: 0,
         
    },
    getters: {
        saleGeneros: state => {
           
                var saleGeneros = state.generos.map(genero=>{
                    return {
                        name:'**' + genero.name + '**',
                        seleccionado: genero.seleccionado
                    }
                });
                return saleGeneros;
             
        },

        getpagina: state => {
            return pagina;
        },

        getGeneros: state => {
            return prueba;
        },

        getCategorias: state => {
            return categorias;
        },

     

        

    },
    mutations:{
       

        cambiarPagina: (state, pag) =>{
            state.pagina=pag;
        },


      


        cambiarCategoria: (state, pos) =>{
            state.categorias[pos].seleccionado=1;
        },

        reseteaCategoria: (state, pos) =>{
            state.categorias[pos].seleccionado=0;
        },


        cambiaSaldoActual: (state, saldo)=>{
            state.generos[0].saldo_actual=saldo;
        },

        cambiaSalarioMensual: (state, mensual)=>{
            state.generos[0].salario_mensual=mensual;
        },

        cambiaMeta: (state, metap)=>{
            state.generos[0].meta=metap;
        },

       


      


    },
    actions:{


        ingresarCantidad:(context, cantidad)=>{
            var nuevo_saldo = context.state.generos[0].saldo_actual + cantidad;
            context.commit('cambiaSaldoActual', nuevo_saldo);
            
        },
        addGasto:(context, cantidad, categoria)=>{
            var nuevo_saldo = context.state.generos[0].saldo_actual - cantidad;
            context.commit('cambiaSaldoActual', nuevo_saldo);
            
        },

        setSaldo:(context, cantidad)=>{
            context.commit('cambiaSaldoActual', cantidad);
            
        },
        setSalario:(context, cantidad)=>{
            context.commit('cambiaSalarioMensual', cantidad);
            
        },
        setMeta:(context, cantidad,)=>{
            context.commit('cambiaMeta', cantidad);
            
        },
     
      
      cambiaSaldoActual:(context, saldo)=>{
        context.commit('cambiaSaldoActual', saldo)
        
    },

    cambiarCategoria: (context, pos) =>{
        context.commit('cambiarCategoria', pos)
    },


    reseteaCategoria: (context, pos) =>{
        context.commit('reseteaCategoria', pos)
    },


    cambiaSalarioMensual:(context, mensual)=>{
        context.commit('cambiaSalarioMensual', mensual)
        
    },

    cambiaMeta:(context, metap)=>{
        context.commit('cambiaMeta', metap)
        
    },
      
      cambiarPagina: (context,pag) =>{
        var el= document.getElementById("calendario");
       
        
        var barraprogreso=document.getElementById("progreso");
        console.log(el);
          if(pag==3){
              artyom.say("Este es tu balance mensual, aquí puedes ver los movimientos que has realizado durante todo este mes, tu saldo actual es de " + context.state.generos[0].saldo_actual + " euros"  )
           el.style.display="inherit";
          }
          else{
              el.style.display="none";
          }
  
          if(pag==2){
            artyom.say("Para ayudarte a gestionar tus cuentas necesito que me cuentes un poco de tí, selecciona además una meta a la que quieras llegar, yo te ayudaré a ahorrar ese dinero" )
            
          }

          if(pag==4){
            artyom.say("Este es tu balance actual, tu saldo ahora mismo es de" + context.state.generos[0].saldo_actual + " euros, puedes consultar todos tus movimientos o introducir un gasto o ingreso" )
            
          }
          if(pag==7){
            artyom.say("Selecciona el tipo de gasto que quieres añadir, una vez seleccionado, introduce la cantidad y pulsa en añadir gasto" )
            
          }

          if(pag==5){
              artyom.say("Hola" + context.state.generos[0].nombre + "bienvenido a tu salón de trofeos, según vayas consiguiendo tus metas se irán acumulando como trofeos conseguidos, aquí puedes ver también el porcentaje que llevas completado para tu objetivo actual")
            move();                  
            barraprogreso.style.display="inherit";
                      }
                      else{
            barraprogreso.style.display="none";
                      }
            context.commit('cambiarPagina', pag)
      },

    








    }
})
