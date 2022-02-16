const list1 = [];
const printL = document.getElementById("printList");
const printM = document.getElementById("printHarmonicMean");

function addNumber () {
    const addNumber1 = document.getElementById("inputNumber");
    const number1 = parseInt(addNumber1.value);
    list1.push(number1);
    printL.innerText = list1;   
}

function calculateHarmonicMean () {
    let sum1 = 0;
    for ( let i = 0; i < list1.length; i++) {
            sum1 += (1 / list1[i]);
         }
    
let meanOfTheList = list1.length / sum1;
printM.innerText = "The mean from the numbers above is: " + meanOfTheList;   
return meanOfTheList;

}
