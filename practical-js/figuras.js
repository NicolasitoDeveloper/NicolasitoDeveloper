//Square

function perimeterOfSquare (side) {
    return side * 4;
} 

function areaOfSquare (side) {
    return side * side;
} 

function calculatePerimeterOfSquare (){
    const imputSq = document.getElementById("imputSquare");
    const valueSq = imputSq.value;
   
    const perimeterSq =  perimeterOfSquare (valueSq);
    alert(perimeterSq);
 }
 
 function calculateAreaOfSquare () {
     const imputSq = document.getElementById("imputSquare");
     const valueSq = imputSq.value;
    
     const areaSq =  areaOfSquare (valueSq);
     alert(areaSq);
  }

//Triangle

function perimeterOfTriangle (sideOfTriangle1, sideOfTriangle2, baseOfTriangle) {
    const perimeter = sideOfTriangle1 + sideOfTriangle2 + baseOfTriangle;
    return perimeter;
}

function heightOfTriangle (sideOfTriangle1, baseOfTriangle){
    const height = Math.sqrt((sideOfTriangle1 * sideOfTriangle1) - ((baseOfTriangle * baseOfTriangle) / 4));
    return height;
}

function areaOfTriangle (baseOfTriangle, heightOfTriangle) {
    return (baseOfTriangle * heightOfTriangle) / 2;
} 

function calculatePerimeterOfTriangle (){
    const imputTr1 = document.getElementById("imputTriangle1");
    const value1Tr = parseInt(imputTr1.value);

    const imputTr2 = document.getElementById("imputTriangle2");
    const value2Tr = parseInt(imputTr2.value);

    const imputTr3 = document.getElementById("imputTriangle3");
    const value3Tr = parseInt(imputTr3.value);

    const perimeterTr =  perimeterOfTriangle (value1Tr, value2Tr, value3Tr);
    alert(perimeterTr);
 }

 function calculateHeightOfTriangle (){
    const imputTr1 = document.getElementById("imputTriangle1");
    const value1Tr = parseInt(imputTr1.value);

    const imputTr2 = document.getElementById("imputTriangle2");
    const value2Tr = parseInt(imputTr2.value);

    const imputTr3 = document.getElementById("imputTriangle3");
    const value3Tr = parseInt(imputTr3.value);
   
    if (value1Tr === value2Tr){
        const heightTr =  heightOfTriangle (value1Tr, value3Tr);
    alert(heightTr);
    }

    else {
     alert("It is not an Isosceles triangle");
    }
    
 }
 
 function calculateAreaOfTriangle () {
    const imputTr1 = document.getElementById("imputTriangle1");
    const value1Tr = parseInt(imputTr1.value);

    const imputTr2 = document.getElementById("imputTriangle2");
    const value2Tr = parseInt(imputTr2.value);

    const imputTr3 = document.getElementById("imputTriangle3");
    const value3Tr = parseInt(imputTr3.value);

    if (value1Tr === value2Tr){
        const heightTr =  heightOfTriangle (value1Tr, value3Tr);
        const areaTr =  areaOfTriangle (value3Tr, heightTr);
        alert(areaTr);
    }

    else {
     alert("It is not an Isosceles triangle");
    }

  }
  
//Circle
const PI = Math.PI;
function diameterOfCircle (radiusOfCircle) {
    return radiusOfCircle * 2;
} 

function areaOfCircle (radiusOfCircle) {
    return (radiusOfCircle * radiusOfCircle) * PI;
} 

function perimeterOfCircle (radiusOfCircle) {
    const diameter = diameterOfCircle (radiusOfCircle);
    return diameter * PI;
}

 function calculateDiameterOfCircle (){
    const imputCi = document.getElementById("imputCircle");
    const valueCi = parseInt(imputCi.value);
    
    const diameter = diameterOfCircle(valueCi);
    alert(diameter);
 }


function calculateAreaOfCircle(){
    const imputCi = document.getElementById("imputCircle");
    const valueCi = parseInt(imputCi.value);
    
    const areaCi = areaOfCircle(valueCi);
    alert(areaCi);
}

function calculatePerimeterOfCircle(){
    const imputCi = document.getElementById("imputCircle");
    const valueCi = parseInt(imputCi.value);
    
    const perimeterCi = perimeterOfCircle(valueCi);
    alert(perimeterCi);
}