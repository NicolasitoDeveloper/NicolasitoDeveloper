const salariesCol = colombia.map(
    function (person){
        return person.salary;
    }
);

const salariesColSorted = salariesCol.sort(
    function (salaryA , salaryB) {
        return salaryA - salaryB;
    }
);

function isEven(number) {
return (number % 2 === 0);
}

function calculateMean (list) {
    let sum1 = list.reduce(
        function (pValue = 0, nValue) {
            return pValue + nValue;
        });
const meanOfTheList = sum1 / list.length;
return meanOfTheList;
}
function medianOfSalaries(list){
    const half = parseInt(list.length / 2);
    if (isEven(list.length)){
        const personH1= list[half - 1];
        const personH2 = list[half];
        const mean = calculateMean([personH1, personH2]);
        return mean;
    }
    else {
        const personH = list[half];
        return personH;
    }
}

console.log(
    medianOfSalaries(salariesColSorted)
);