function greetings(my_name, myCallback) {
    setTimeout( () => {
        console.log('Hi, '+ my_name);
        myCallback(my_name);
    }, 1500);
}
        

function speak(callbackSpeak) {
    setTimeout(() => {
        console.log('Bla bla bla bla...');
        callbackSpeak();
    }, 1000);
}

function goodbyes(my_name, anotherCallback) {
    setTimeout( () => {
        console.log('Goodbye', my_name);
        anotherCallback();
    }, 1000);
}

//Recursive functions, calling "conversation" inside of it.
function conversation(my_name, times, callback) {
    if (times > 0) {
        speak( () => {
            conversation(my_name, --times, callback);
        })
    } else {
        goodbyes(my_name, callback);
    }
}

// --

console.log('Initializing process......');
greetings('Nicolas',  (my_name) => {
    conversation(my_name, 3, () => {
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
