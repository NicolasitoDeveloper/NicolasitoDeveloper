function greetings(first_name, cb) {
  setTimeout( () => {
    console.log("Hi " + first_name);
    cb(first_name);
  }, 1000);
}

function goodbyes(first_name, cb) {
  setTimeout( () => {
    console.log("Goodbye", first_name);
    cb();
  }, 1000);
}

console.log("Initializing process...");
greetings("Nicolas", (first_name) => {
  goodbyes(first_name, () => {
    console.log("Terminating process...");
  });
});
