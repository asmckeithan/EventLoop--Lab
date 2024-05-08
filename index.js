console.log('Event Loop')
//Declare a global counter variable.
let count = 0;

// Create a simple function that increments the variable, and then calls itself recursively.
function countForever(){
    count++;
    // countForever();
}


// Surround the initial function call in a try/catch block.
try {
// counter(); //Function counter created 
}catch (err) {
    console.log(err);// Within the catch, log the error and the value of the counter variable.
    console.log(count);
}

// Incrementing the counter using a number (recursive function)
function counterIncremented(num){
    if (num <= 0) return;

    if (num === count) return;

    count += 1;
    counterIncremented(num);
}
try {
    counterIncremented(100);
    console.log(count); // this log shows 100
}catch (err){
    console.log(err);
}
// create a modified recursive function to count 1-20 
// start by creating a counter function n
function counter(num){
    for (let i = 1; i <= num; i++){
console.log(i)
    }
}
counter(20)