
var cantidad = prompt("Cuántos autos deseas registrar?");
var autos = [];

function auto (marca, modelo, año){
	this.marca = marca;
	this.modelo = modelo;
	this.año = año;
}

for (let i = 0; i < cantidad; i++){
    marca = prompt("Ingresa la marca del vehículo");
    modelo = prompt("Ingresa el modelo del vehículo");
    año = prompt("Ingresa el año del vehículo");
    autos.push( new auto (marca, modelo , año));
}

for (let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}
