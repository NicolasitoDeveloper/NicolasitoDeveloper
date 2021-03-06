async function greetings(my_name) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      console.log("Hi, " + my_name);
      resolve(my_name);
    }, 1500);
  });
}

async function speak(my_name) {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      console.log("Bla bla bla bla...");
      resolve(my_name);
      // resolve("REJECTED");
    }, 1000);
  });
}

async function goodbyes(my_name) {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      console.log("Goodbye", my_name);
      resolve();
    }, 1000);
  });
}

async function main() {
  let my_name = await greetings("Nicolas");
  await speak();
  await speak();
  await speak();
  await goodbyes(my_name);
  console.log("Terminated");
}

console.log("Initializing");
main();
