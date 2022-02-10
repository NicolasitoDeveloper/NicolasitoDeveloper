//Test 

//Variables and operations!!

//What is a variable and what is it for?
//A/ A reserved memory space where information is stored.

//What is the difference between declaring and initializing a variable?
//A/ A variable is declared tp reserve its memory space, It is initialized to save info in sais space.

//What is the difference between adding numbers and concatenating strings?
//A/ Adding numbers as a math operation, concatenating as two text are put together to form one new.

//Which operator allows me to add or concatenate?
//A/ The + sign

//Determine the name and the data type to store the following information in variables: (Name, Last name, Username, Age, E-mail, Adult?, Saved money, Debts)
//A/ 
    const name = "string";
    const lastName = "string";
    let userName = "string";
    let age = number;
    const eMAil = "string";
    let adult = boolean;
    let savedMoney = number;
    let debts = number;

//Calculate and print the next variables from the previous point: (Full name (Name + Last name), (net money (Saved money - Debts))

    const object = {
        myName: "Nicolas",
        lastName: "Giraldo Jiménez",
        userName: "NicolasitoDeveloper",
        age: 24,
        eMAil: "giraldojnicolas@gmail.com",
        adult = true,
        savedMoney: 1000,
        debts: 600
    }

    const fullName = object.myName + " " + object.lastName;
        console.log(fullName);

    const netMoney = object.savedMoney - object.debts;
        console.log(netMoney);

//Functions

//What is a function?
//A/ It's a code block in which one can store actions or procedures.

//When is useful to use a function in my code?
//A/ Is useful to save space, one normaly use a function when there is a need in the code to use It multiple times and writting the whole algorithm is a waste of space.

//What is the difference between parameters and arguments in a function?
//A/ Parameters are the ones defined within the function, the parameter that the function will recieve
//   Arguments are the information that will go through the function

//Create a function using the following code:

const yourName ="Nicolas";
const yourLastName = "Giraldo Jimenez";
const fullName = yourName + yourLastName;
const nickName = "Nicolasito";

console.log("My name is " + fullName + ", but I would rather to be called " + nickName + ".");

//A/ 
function presentation (yourName, yourLastName, nickName){
    return "My name is " + yourName + " " + lastName + ", but I would rather to be called " + nickName + "."
}
console.log(presentation("Nicolas", "Giraldo Jiménez", "Nicolasito"));

//Conditionals

//What is a conditional?
//A/ A series of instructions that will happend whether a given condition is true or not.

//What types of conditionals exist in JS and what are their differences?
//A/ if elseif else, switch, ternary operator. Every single one of them checks if something is true or false, but the syntax and application are different from one another.

//Can functions and conditionals be combined?
//A/ Yes, It is commonly used.

//Replicate the next code using if instead of switch

//switch

const suscriptionType = "Basic";

switch (suscriptionType) {
    case "Free":
        console.log("You can't use our premium services");
        break;
    
    case "Basic":
        console.log("You can use our services for a month");
        break;
    
    case "Expert":
        console.log("You can use our services for a whole year");
        break;
    
    case "ExpertPlus":
        console.log("You and someone else can use our services for a whole year");
        break;
}

//A/ if
function suscriptionT (suscriptionType){
    if (suscriptionType == "Free"){
       return console.log("You can't use our premium services");
    }

    else if (suscriptionType == "Basic"){
       return console.log("You can use our premium services for a month");
    }

    else if (suscriptionType == "Expert"){
        return console.log("You can use our premium services for a whole year");
     }
    else if (suscriptionType == "ExpertPlus"){
        return console.log("You and someone else can use our services for a whole year");
    }
    else {
        return console.log("What are you waiting for to get your suscription?");
    }
}
//Loops

//What is a loop?
//A/ It's a code block that repeats itself n times.

//What types of loops exist ins JS?
//A/ for, for of, for in, while, do while.

//What is and infinite loop and why is it a problem?
//A/ It's a cycle that will never stop, can cause our pc to crash due to a high memory usage.

//Can I mix loops and conditionals?
//A/ Yes, is useful sometimes.

//Replicate the next loop using while instead of for:

for (let i = 0; i < 5; i++) {
    console.log("The value of i is: " + i);
}

for (let i = 10; i >= 2; i--){
    console.log("The value of i is: " + i);
}

//A/ while
let i = 0,
while (i >= 2){
    console.log("The value of i is: " + i);
    i++;
}

let i = 10,
while (i < 10){
    console.log("The value of i is: " + i);
    i--;
}

//Write a code in which the user is ask "How much is 2 + 2?", if the answer ir correct, a congratulation message is displayed, if not, we start over.

function math (){
    let result;
    do {
        result = parseInt(prompt("2 + 2 = ?"));
    }
    while (result !== 4);
    if (result == 4);
    return console.log("Congrats!");
} 
math ();

//Lists

//What is an array?
//A/ An array is a list of multiple items stored in a single variable.

//What is an object?
//A/ An object is a collection of related data.

//When is better to use objects or arrays?
//A/ Use objects when a representation of a "thing" is needed, for example (a person, a car, a book).
//   Use arrays whenever a list of multiple items ins needed.

//Can I mix arrays with objects or objects with arrays?
//A/ They can indeed be mixed.

//Create a function that can print any array as a parameter and prints its first element

let cars = ["Audi TT", "BMW M3", "Tesla model T"];
let fruits = ["Apple", "Banana", "Blueberry"];
function show (a){
   return console.log(a[0]);
}

show(cars);
show(fruits);

//Create a function that can recieve any array as a parameter and print all of its elements one by one (Not allowed to print the while array)
//A/
let cars = ["Audi TT", "BMW M3", "Tesla model T"];
let fruits = ["Apple", "Banana", "Blueberry"];

function showAll (a) {
    for (i = 3; i > 0; i--) {
        console.log(a[a.length - i]);
    }
}
showAll (cars);
showAll (fruits);

//Create a function that can recieve any object as a parameter and prints all of its elements one by one (Not allowed to print the whole object)

let miAuto = {
    marca: "Mercedez Benz",
    modelo: "C180",
    año: 2022
}
function print (o){
    Object.values(o).forEach(element => console.log(element))
}

print(miAuto);

