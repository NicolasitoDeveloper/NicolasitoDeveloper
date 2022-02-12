//Square
console.group("Square");

const sideOfSquare = 5;
console.log("The sides of the square measure: " + sideOfSquare + "cm");

const perimeterOfSquare = sideOfSquare * 4;
console.log("The perimeter of the square is: " + perimeterOfSquare + "cm");

const areaOfSquare = sideOfSquare * sideOfSquare;
console.log("The area of the square is: " + areaOfSquare+ "cm²");

console.groupEnd();

//Triangle
console.group("Triangle");

const sideOfTriangle1 = 6;
const sideOfTriangle2 = 6;
const baseOfTriangle = 4;
const heightOfTriangle = 5.5;

console.log("The sides of the triangle measure: " 
+ sideOfTriangle1 + "cm, " 
+ sideOfTriangle2 + "cm and " 
+ baseOfTriangle + "cm");

console.log("The height of the triangle is: " + heightOfTriangle + "cm");

const perimeterOfTriangle = sideOfTriangle1 + sideOfTriangle2 + baseOfTriangle;
console.log("The perimeter of the triangle is: " + perimeterOfTriangle + "cm");

const areaOfTriangle = (baseOfTriangle * heightOfTriangle) / 2;
console.log("The area of the triangle is: " + areaOfTriangle+ "cm²");

console.groupEnd();

//Circle
console.group("Circle");

const radiusOfCircle = 4;
console.log("The radius of the circle is: " + radiusOfCircle + "cm");

const diameterOfCircle = radiusOfCircle * 2;
console.log("The diameter of the circle is: " + diameterOfCircle + "cm");

const PI = Math.PI;
console.log("PI is: " + PI);

const perimeterOfCircle = diameterOfCircle * PI;
console.log("The perimeter of the circle is: " + perimeterOfCircle + "cm");

const areaOfCircle = (radiusOfCircle * radiusOfCircle) * PI;
console.log("The area of the circle is: " + areaOfCircle + "cm²");


console.groupEnd();

