//Test 


//Variables and operations!!

//What is a variable and what is it for?

//What is the difference between declaring and initializing a variable?

//What is the difference between adding numbers and concatenating strings?

//Which operator allows me to add or concatenate?

//Determine the name and the data type to store the following information in variables: (Name, Last name, Username, Age, E-mail, Adult?, Saved money, Debts)

//Calculate and print the next variables from the previous point: (Full name (Name + Last name), (net money (Saved money - Debts))

//Functions

//What is a function?

//When is useful to use a function in my code?

//What is the difference between parameters and arguments in a function?

//Create a function using the following code:

const yourName ="Nicolas";
const yourLastName = "Giraldo Jimenez";
const fullName = yourName + yourLastName;
const nickNAme = "Nicolasito";

console.log("My name is " + fullName + ", but I would rather to be called " + nickNAme + ".");

//Conditionals

//What is a conditional?

//What types of conditionals exist in JS and what are their differences?

//Can functions and conditionals be combined?

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

//Loops

//What is a loop?

//What types of loops exist ins JS?

//What is and infinite loop and why is it a problem?

//Can I mix loops and conditionals?

//Replicate the next loop using while instead of for:

for (let i = 0; i < 5; i++) {
    console.log("The value of i is: " + i);
}

for (let i = 10; i >= 2; i++){
    console.log("The value of i is: " + i);
}

//Write a code in which the user is ask "How much is 2 + 2?", if the answer ir correct, a congratulation message is displayed, if not, we start over.

//Lists

//What is an array?

//What is an object?

//When is better to use objects or arrays?

//Can I mix arrays with objects or objects with arrays?

//Create a function that can print any array as a parameter and prints its first element

//Create a function that can recieve any array as a parameter and print all of its elements one by one (Not allowed to print the while array)

//Create a function that can recieve any object as a parameter and prints all of its elements one by one (Not allowed to print the whole object)
