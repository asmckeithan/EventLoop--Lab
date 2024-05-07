console.log('Event Loop')
//Declare a global counter variable.
const count = 0;

// Create a simple function that increments the variable, and then calls itself recursively.
function counter(){
    count++;
    counter();
}


// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.