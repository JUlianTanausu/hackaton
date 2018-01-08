var x=0;
var y=0;
var t=0;
var nuevax;
var nuevay;
var t1=0;
var izquierda;
var derecha;
var arriba;
var abajo;
var contador=0;
var arrayContador = new Array();
var velocidadfinal;
var velocidadAcumulada=0;
var velocidadMedia=0;



function myFunction(e) {
	x1=x;
	y1=y;
	t1=t;
	
	x = e.clientX;
	y = e.clientY;
	t = Date.now();
	var diferenciax= x-x1;
	var diferenciay= y-y1;
	var diferenciat= t-t1;
	
	if(diferenciax>0){
	derecha=1; izquierda=0;
	}
	if(diferenciax<0){
	derecha=0; izquierda=1;
	}
	if(diferenciay>0){
	arriba=0; abajo=1;
	}
	if(diferenciay<0){
	arriba=1; abajo=0;
	}

	

	var velocidad= Math.sqrt((diferenciax*diferenciax+diferenciay*diferenciay)/(diferenciat));


	if((diferenciat>=5)&((diferenciax>=3)||(diferenciay>=3))){
		 velocidadfinal= Math.sqrt((diferenciax*diferenciax+diferenciay*diferenciay)/(diferenciat));
	}
	else {velocidadfinal=0;}
	velocidadAcumulada+=velocidadfinal;
	contador++;
	arrayContador.push(velocidadfinal);
	velocidadMedia=velocidadAcumulada/contador;


	var coor = "Velocidad:" + velocidadfinal+"    Arriba    " +arriba+"    Abajo    " +abajo + "      Derecha    " +derecha + "      Izquierda    " +izquierda +"      VelocidadMedia       " +velocidadMedia ;
	// console.log("array");
	// console.log(arrayContador);
	// console.log("velocidadAcumulada");                                            
	// console.log(velocidadAcumulada);
	// console.log("velocidadMedia");                                            
	// console.log(velocidadMedia);

	var mivelocidad= "Velocidad del cursor" + velocidadfinal;
	var miposición= "Arriba"+ arriba + "Abajo" + abajo + "Izquierda" + izquierda + "Derecha"+ derecha ;
	
	document.getElementById("demo").innerHTML = coor;
	//document.getElementById("velocidad").innerHTML = mivelocidad;
	//document.getElementById("movimiento").innerHTML = miposicion;

	
	
}
