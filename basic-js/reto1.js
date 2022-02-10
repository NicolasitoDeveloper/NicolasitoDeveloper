

var option = prompt("Ingresa tu opción: piedra, papel o tijera ");
var user = option.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() *3)];

//Con if

jugar ();

function jugar (){
    if (user === machine){
        console.log("El resultado es un empate!");
    }
    else if (user === "piedra" && machine === "tijera"){
        console.log("Has ganado");
    }

    else if (user === "tijera" && machine === "papel"){
        console.log("Has ganado");
    }

    else if (user == "papel" && machine == "piedra"){
        console.log("Has ganado");
    }
    else {
        console.log("Perdiste!!!!");
    }
}

//Con switch

switch (true){
    case (user === machine): 
        console.log("El resultado es un empate!");
        break;
        
    case (user === "piedra" && machine === "papel"):
        console.log("Has ganado");
        break;
       
    case (user === "tijera" && machine === "piedra"):
        console.log("Has ganado");
         break;

    case (user == "papel" && machine == "tijera"):
        console.log("Has ganado");
        break;
    default:
        console.log("Perdiste!!!!!");
}