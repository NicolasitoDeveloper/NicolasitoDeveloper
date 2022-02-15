function calculateMean (list) {

const sumOfTheList = list.reduce(
    function (accumulatedValue = 0, currentValue) {
        return accumulatedValue + currentValue;
    }
);

const meanOfTheList = sumOfTheList / list.length;

return meanOfTheList;
}
