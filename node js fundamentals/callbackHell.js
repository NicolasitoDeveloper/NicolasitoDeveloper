function greetings(my_name, myCallback) {
    setTimeout(function () {
        console.log('Hi, '+ my_name);
        myCallback(my_name);
    }, 1500);
}
        

function speak(callbackSpeak) {
    setTimeout(function() {
        console.log('Bla bla bla bla...');
        callbackSpeak();
    }, 1000);
}

function goodbyes(my_name, anotherCallback) {
    setTimeout(function() {
        console.log('Goodbye', my_name);
        anotherCallback();
    }, 1000);
}

//Recursive functions, calling "conversation" inside of it.
function conversacion(my_name, times, callback) {
    if (times > 0) {
        speak(function () {
            conversacion(my_name, --times, callback);
        })
    } else {
        goodbyes(my_name, callback);
    }
}

// --

console.log('Initializing process......');
greetings('Nicolas', function (my_name) {
    conversacion(my_name, 10, function() {
        console.log('Process terminated');
    });
});

/****************HELL**********************/
// greetings('Nicolas', function (my_name) {
//     speak(function () {
//         speak(function () {
//             speak(function () {
//                 goodbyes(my_name, function() {
//                     console.log('Terminating process......');
//                 });
//             });
//         });
//     });
// });
