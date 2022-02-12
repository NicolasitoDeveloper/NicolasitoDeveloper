//Square
console.group("Square");

//const sideOfSquare = 5;

function perimeterOfSquare (side) {
    return side * 4;
} 

//const areaOfSquare = sideOfSquare * sideOfSquare;

function areaOfSquare (side) {
    return side * side;
} 

console.groupEnd();

//Triangle
console.group("Triangle");

//const sideOfTriangle1 = 6;
//const sideOfTriangle2 = 6;
//const baseOfTriangle = 4;
//const heightOfTriangle = 5.5;


function perimeterOfTriangle (sideOfTriangle1, sideOfTriangle2, baseOfTriangle) {
    return sideOfTriangle1 + sideOfTriangle2 + baseOfTriangle;
}

function areaOfTriangle (baseOfTriangle, heightOfTriangle) {
    return (baseOfTriangle * heightOfTriangle) / 2;
} 

console.groupEnd();

//Circle
console.group("Circle");

//const radiusOfCircle = 4;

function diameterOfCircle (radiusOfCircle) {
    return radiusOfCircle * 2;
} 

const PI = Math.PI;

function perimeterOfCircle (radiusOfCircle) {
    const diameter = diameterOfCircle (radiusOfCircle);
    return diameter * PI;
}

function areaOfCircle (radiusOfCircle) {
    return (radiusOfCircle * radiusOfCircle) * PI;
} 

console.groupEnd();

function calculatePerimeterOfSquare (){
   const imputSq = document.getElementById("imputSquare");
   const valueSq = imputSq.value;
  
   const perimeterSq =  perimeterOfSquare (valueSq) 
   alert(perimeterSq)
}

function calculateAreaOfSquare () {
    const imputSq = document.getElementById("imputSquare");
    const valueSq = imputSq.value;
   
    const areaSq =  areaOfSquare (valueSq) 
    alert(areaSq);
 }
 