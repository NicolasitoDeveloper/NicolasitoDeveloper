const list1 = [1,2,3,4,6,1,2,3];

function compare (a, b) {return a - b}

function addNumber () {
    const addNumber1 = document.getElementById("inputNumber");
    const number1 = parseInt(addNumber1.value);
    list1.push(number1);
    list1.sort(compare);
    printList.innerText = list1;   
}

function calculateMode(){
    const list1Count = {};
    list1.map(
        function (element) {
            if (list1Count[element]) {
                list1Count[element] += 1;
            }
            else {
                list1Count[element] = 1;
            }
        }
    );
    const list1Array = Object.entries(list1Count).sort(
        function (elementA, elementB) {
            return elementA[1] - elementB[1];
        });
    const result1 = list1Array[list1Array.length - 1]
    const mode = result1[0];
    const numberOfTimes = result1[1];

    printMode.innerText = "The mode of the above list of numbers is : " + mode + ", because it repeat itseft " + numberOfTimes + " times";   
    return mode;
}
