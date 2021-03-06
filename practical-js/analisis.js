//Helpers

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

//Medians calculator
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


//Overall Median
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
const overallMedianCol = medianOfSalaries(salariesColSorted);


//Top 10% median
const spliceStart = parseInt((salariesColSorted.length * 80) / 100);

const top10ColSalaries = salariesColSorted.splice(spliceStart);
const top10MedianCol = medianOfSalaries(top10ColSalaries);





console.log(
    overallMedianCol,
    top10MedianCol,
);
