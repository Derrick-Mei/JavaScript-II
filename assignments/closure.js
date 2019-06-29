// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let surgery = gender => {
    let bornGender = gender;
    let currentGender = gender;
    return function(wantedGender) {
        if (wantedGender !== currentGender) {
            currentGender = wantedGender;
            console.log(`I was born a ${bornGender}, but now I am a ${currentGender}`);
        } else {
            console.log(`I am already a ${currentGender}`);
        }
    };
};

let derrick = surgery('male');
derrick('woman');
derrick('woman');
derrick('man');

// ==== Challenge 2: Create a counter function ====
const counter = () => {
    let count = 0;
    return function() {
        count++;
        return count;
    };
    // Return a function that when invoked increments and returns a counter variable.
};

let newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let count = 0;
    let math = {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }
    };
    return math;
};

let mathematics = counterFactory();
console.log(mathematics.increment());
console.log(mathematics.increment());
console.log(mathematics.decrement());
