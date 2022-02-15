//function compare (a, b) {return a - b}
//array.sort(compare);
//array.sort((a, b)=> a - b);


function compare (a, b) {return a - b}

function calculateMean (list) {
    let sum1 = list.reduce(
        function (pValue = 0, nValue) {
            return pValue + nValue;
        });
const meanOfTheList = sum1 / list.length;
return meanOfTheList;
}

const list1 = [];

function addNumber () {
    const addNumber1 = document.getElementById("inputNumber");
    const number1 = parseInt(addNumber1.value);
    list1.push(number1);
    list1.sort(compare);
    printList.innerText = list1;   
}

function isEven (number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let median1;

function calculateMedian (){
    const halfOfTheList = parseInt(list1.length / 2);
    if (isEven(list1.length)) {
       const posi1 = list1[halfOfTheList - 1];
       const posi2 = list1[halfOfTheList];
       const mean12 = calculateMean([posi1, posi2]);
       median1 = mean12;
       printMedian.innerText = median1;   

   }
   else {
       median1 = list1[halfOfTheList];
       printMedian.innerText = "The median of the above list of numbers is: " + median1;   
   }
}
