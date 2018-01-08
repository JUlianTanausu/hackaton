<template>
<div id="filtros">
 <div class="container GenerosBottom">
              <section class="juego col-md-12">
                  <article class="col-md-12 pregunta">
                    <h2 class="titularGenero GenerosBottom">¿Desde qué años quieres ver?</h2>
                  </article>
              </section>
              <section class="row">
                  <div class="DatoTiempoInicio col-md-1"><h2>1920</h2></div>
                  <div class="DatoTiempoFinal col-md-1 order-12"><h2>2020</h2></div>
                  <section class="col-md-10">
				            <vue-slider  ref="slider6" id="pretty-slider" v-bind="barra" v-model="barra.value"></vue-slider>
                   </section>
              </section>
          
 <h3 hidden="true"><small>Value: </small>{{ barra.value }}</h3>
          </div>
   <div class="container GenerosBottom">
            <section class="juego col-md-12">
              <article class="col-md-12 pregunta">
                <h2 class="titularGenero GenerosBottom">Indica la duración máxima que deseas</h2>
              </article>
            </section>
            <section class="row">
              <div class="DatoTiempoInicio2 col-md-1"><h2>60'</h2></div>
              <div class="DatoTiempoFinal2 col-md-1 order-12"><h2>240'</h2></div>
               <section class="col-md-10">
				            <vue-slider  ref="slider6" id="pretty-slider" v-bind="duracion" v-model="duracion.value"></vue-slider>
                   </section>
              </section>
          <h3 hidden="true"><small>Value: </small>{{ duracion.value }}</h3>
            </div>
         </div>
			           
</template>

<script>
import vueSlider from 'vue-slider-component';


export default {
    name: 'filtroanho',
 components: {
		vueSlider
	},
 data() {
    return {
      
      barra: {
					value: [1920, 2020],
					width: '100%',
					height: 10,
          dotSize: 20,
          dotWidth: 5,
          dotHeight: 25,
					min: 1920,
          max: 2020,
          interval: 10,
					disabled: false,
					show: true,
					tooltip: 'always',
					tooltipDir: ['bottom', 'top'],
          piecewise: true,
          piecewiseLabel: true,
					style: {
						marginBottom: '30px'
					},
					bgStyle: {
						backgroundColor: '#005466',
						boxShadow: 'none'
					},
					sliderStyle: [{
						backgroundColor: '#fff'
					}, {
						backgroundColor: '#fff'
					}],
					tooltipStyle: [{
						backgroundColor: 'transparent',
						borderColor: 'transparent'
					}, {
							backgroundColor: 'transparent',
						borderColor: 'transparent'
					}],
					processStyle: {
						backgroundImage: '-webkit-linear-gradient(left, #00FF98, #00FF98)'
          }
        },
          duracion: {
					value: [60, 240],
					width: '100%',
					height: 10,
          dotSize: 20,
          dotWidth: 5,
          dotHeight: 25,
					min: 60,
          max: 240,
          interval: 30,
					disabled: false,
					show: true,
					tooltip: 'always',
					tooltipDir: ['bottom', 'top'],
          piecewise: true,
          piecewiseLabel: true,
					style: {
						marginBottom: '30px'
					},
					bgStyle: {
						backgroundColor: '#005466',
						boxShadow: 'none'
					},
					sliderStyle: [{
						backgroundColor: '#fff'
					}, {
						backgroundColor: '#fff'
					}],
					tooltipStyle: [{
						backgroundColor: 'transparent',
						borderColor: 'transparent'
					}, {
							backgroundColor: 'transparent',
						borderColor: 'transparent'
					}],
					processStyle: {
						backgroundImage: '-webkit-linear-gradient(left, #00FF98, #00FF98)'
          }
				},
     
     
    }

},
methods:{
  format (value) {
			return value === null ? 'null' : (typeof value === 'string' ? `"${value}"` : value)
		},
		
		setDisabled (name) {
      console.log(this.barra);
      let obj = this.barra;
       console.log(obj);
			obj.disabled = !obj.disabled
		},
		setTooltip (name) {
      let obj = this.barra;
      console.log(obj);
			obj.tooltip = obj.tooltip === 'hover' ? 'always' : 'hover'
		},
		setValue (name, num) {
       console.log(num);
      let obj = this.barra;
       console.log(obj.value);
      obj.value = num;
      console.log(obj)
		},
		setIndex (name, num) {
      let slider = this.$refs
      console.log(slider);
			slider.setIndex(num)
		},
		getValue (name) {
      let slider = this.$refs
      console.log(slider);
	
		},
		getIndex (name) {
      let slider = this.$refs
      console.log(slider);
		
		},
		
		cb (val) {
			// console.log(val)
		},


},

/**AQUI NOS QUEDAMOSSSSSSS */

mounted(){
   




}
}





</script>
<style>

.vue-slider-component .vue-slider-piecewise-dot {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20%;
    height: 100%;
    display: inline-block;
    background-color:white;
    border-radius: 0%;
    transform: translate(-50%, -50%);
        z-index: 2;
    transition: all .3s;
}

.vue-slider-component .vue-slider-dot {
    position: absolute;
    border-radius: 0%;
    background-color: #fff;
    box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
    transition: all 0s;
    will-change: transform;
    cursor: pointer;
    z-index: 3;
}


	.vue-slider-component {
		position: relative;
		box-sizing: border-box;
		user-select: none;
	}
	.vue-slider-component.vue-slider-disabled {
		opacity: .5;
		cursor: not-allowed;
	}
	.vue-slider-component.vue-slider-has-label {
		margin-bottom: 15px;
	}
	.vue-slider-component.vue-slider-disabled .vue-slider-dot {
		cursor: not-allowed;
	}
	.vue-slider-component .vue-slider {
		position: relative;
		display: block;
		border-radius: 15px;
		background-color: #ccc;
	}
	.vue-slider-component .vue-slider::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
	.vue-slider-component .vue-slider-process {
		position: absolute;
		border-radius: 15px;
		background-color: #3498db;
		transition: all 0s;
		z-index: 1;
	}
	.vue-slider-component.vue-slider-horizontal .vue-slider-process {
		width: 0;
		height: 100%;
		top: 0;
		left: 0;
		will-change: width;
	}
	.vue-slider-component.vue-slider-vertical .vue-slider-process {
		width: 100%;
		height: 0;
		bottom: 0;
		left: 0;
		will-change: height;
	}
	.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-process {
		width: 0;
		height: 100%;
		top: 0;
		right: 0;
	}
	.vue-slider-component.vue-slider-vertical-reverse .vue-slider-process {
		width: 100%;
		height: 0;
		top: 0;
		left: 0;
	}

	.vue-slider-component.vue-slider-horizontal .vue-slider-dot {
		left: 0;
	}
	.vue-slider-component.vue-slider-vertical .vue-slider-dot {
		bottom: 0;
	}
	.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-dot {
		right: 0;
	}
	.vue-slider-component.vue-slider-vertical-reverse .vue-slider-dot {
		top: 0;
	}
	.vue-slider-component .vue-slider-tooltip-wrap {
		display: none;
		position: absolute;
		z-index: 9;
	}
	.vue-slider-component .vue-slider-tooltip {
		display: block;
		font-size: 14px;
		white-space: nowrap;
		padding: 2px 5px;
		min-width: 20px;
		text-align: center;
		color: #fff;
		border-radius: 5px;
		border: 1px solid #3498db;
		background-color: #3498db;
	}
	.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top {
		top: -9px;
		left: 50%;
		transform: translate(-50%, -100%);
	}
	.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom {
		bottom: -9px;
		left: 50%;
		transform: translate(-50%, 100%);
	}
	.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left {
		top: 50%;
		left: -9px;
		transform: translate(-100%, -50%);
	}
	.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right {
		top: 50%;
		right: -9px;
		transform: translate(100%, -50%);
	}
	.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top .vue-slider-tooltip::before {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 50%;
		width: 0;
		height: 0;
		border: 5px solid transparent;
		border: 6px solid transparent\0;
		border-top-color: inherit;
		transform: translate(-50%, 0);
	}
	.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip::before {
		content: '';
		position: absolute;
		top: -10px;
		left: 50%;
		width: 0;
		height: 0;
		border: 5px solid transparent;
		border: 6px solid transparent\0;
		border-bottom-color: inherit;
		transform: translate(-50%, 0);
	}
	.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip::before {
		content: '';
		position: absolute;
		top: 50%;
		right: -10px;
		width: 0;
		height: 0;
		border: 5px solid transparent;
		border: 6px solid transparent\0;
		border-left-color: inherit;
		transform: translate(0, -50%);
	}
	.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right .vue-slider-tooltip::before {
		content: '';
		position: absolute;
		top: 50%;
		left: -10px;
		width: 0;
		height: 0;
		border: 5px solid transparent;
		border: 6px solid transparent\0;
		border-right-color: inherit;
		transform: translate(0, -50%);
	}
	.vue-slider-component .vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip-wrap {
		display: block;
	}
	.vue-slider-component .vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap {
		display: block!important;
	}
	.vue-slider-component .vue-slider-piecewise {
		position: absolute;
		width: 100%;
		padding: 0;
		margin: 0;
		left: 0;
		top: 0;
		height: 100%;
		list-style: none;
	}
	.vue-slider-component .vue-slider-piecewise-item {
		position: absolute;
		width: 8px;
		height: 8px;
	}

	.vue-slider-component .vue-slider-piecewise-item:first-child .vue-slider-piecewise-dot, .vue-slider-component .vue-slider-piecewise-item:last-child .vue-slider-piecewise-dot {
		visibility: hidden;
	}
	.vue-slider-component.vue-slider-horizontal .vue-slider-piecewise-label, .vue-slider-component.vue-slider-horizontal-reverse .vue-slider-piecewise-label {
		position: absolute;
		display: inline-block;
		top: 100%;
		left: 50%;
		white-space: nowrap;
		font-size: 12px;
		color: #333;
		transform: translate(-50%, 8px);
		visibility: visible;
	}
	.vue-slider-component.vue-slider-vertical .vue-slider-piecewise-label, .vue-slider-component.vue-slider-vertical-reverse .vue-slider-piecewise-label {
		position: absolute;
		display: inline-block;
		top: 50%;
		left: 100%;
		white-space: nowrap;
		font-size: 12px;
		color: #333;
		transform: translate(8px, -50%);
		visibility: visible;
	}
	.vue-slider-component .vue-slider-sr-only {
		clip: rect(1px, 1px, 1px, 1px);
		height: 1px;
		width: 1px;
		overflow: hidden;
		position: absolute !important;
	}
</style>


</style>