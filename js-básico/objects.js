var miAuto = {
	marca: "BMW",
	modelo: "Z4",
	año: 2022,
	detalleDelAuto: function (){
		console.log(`Auto ${this.modelo} ${this.año}`);
	}
};

//Función constructora

function auto(marca, modelo, año){
	this.marca = marca;
	this.modelo = modelo;
	this.año = año;
}

var autoNuevo = new auto(parametros);