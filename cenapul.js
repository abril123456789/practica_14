function limpiarFormulario(){
	document.getElementById('cmpul').reset();

}

var convertir = function (cm){

	var centimetros = parseInt(document.getElementById("centimetros").value);


	var pulgadas = centimetros/2.54; 

	return pulgadas;

}

/*function MillasKm(m){
	return (m*1609)/1000;
	}

var m= parseFloat(prompt("introduzca la cantidad de millas que quiere convertir a kilometros: "))
var Mk= MillasKm(m);

document.writeln("<br>el resultado de la conversion de millas a kilometros es: " + Mk+ "km");*/
