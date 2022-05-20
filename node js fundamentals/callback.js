function greetings(first_name, myCallback) {
  setTimeout(function () {
    console.log("Hi " + first_name);
    myCallback();
  }, 1000);
}

function goodbyes(first_name, anotherCallback) {
  setTimeout(function () {
    console.log("Goodbye", first_name);
    anotherCallback();
  }, 1000);
}

console.log("Initializing process...");
greetings("Nicolas", function () {
  goodbyes("Nicolas", function () {
    console.log("Terminating process...");
  });
});
