//Arrays, tipo objeto, pueden contener muchos datos

var frutas = ["Manzana", "Banano", "Cereza", "Fresa"];

var masFrutas = frutas.push("Uvas");


//Métodos de recorridos de arrays!

var articulos = [
    {nombre: "Bicicleta", costo: 3000},
    {nombre: "Tv", costo: 5000},
    {nombre: "Libro", costo: 200},
    {nombre: "Celular", costo: 15000},
    {nombre: "Laptos", costo: 70000},
    {nombre: "Teclado", costo: 600},
    {nombre: "Audifonos", costo: 1000}
    ];

    var articulosFiltrados = articulos.filter(function (articulo){
        return articulo.costo <= 1000
    });

    var nombreArticulos = articulos.map(function (articulo){
        return articulo.nombre
    });