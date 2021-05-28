function limpiarFormulario(){
	document.getElementById('metros').reset();

}

var convertir = function (m){

	var metros = parseInt(document.getElementById("metros").value);


	var yardas = metros*1.094; 

	return yardas;

}