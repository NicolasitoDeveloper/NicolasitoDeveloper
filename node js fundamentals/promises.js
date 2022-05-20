function greetings(my_name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hi, " + my_name);
      resolve(my_name);
    }, 1500);
  });
}

function speak(my_name) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log("Bla bla bla bla...");
            // resolve(my_name);
            reject("REJECTED");
          }, 1000);
    });
}

function goodbyes(my_name) {
    return new Promise ((resolve, reject) => {
        setTime
        out(function () {
            console.log("Goodbye", my_name);
            resolve();
          }, 1000);
    });
}

//---
 
console.log("Initializing proces...");
greetings("Nicolas")
    .then (speak)
    .then (speak)
    .then (speak)
    .then (goodbyes)
    .then((nombre) => {
        console.log("Terminating process...");

    })
    .catch(error => {
        console.error("Critical error: ");
        console.error(error);
    })
