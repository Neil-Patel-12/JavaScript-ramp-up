console.log("Hello from our first JS file");
let value1 = 4;
if (value1 > 1) {
    console.log("You are super smart");
}

const password = prompt("Enter a password...");
if (password.length >= 6) {
    console.log("Good Password is 6+ char");
    if (password.indexOf(' ') === -1) {
        console.log("Great there are no spaces in your password");
    } else {
        console.log("No Spaces are alowed");
    }
} else {
    console.log("Pasword must be 6 charactors or greater!");
}

let runner = 66;
let number = 55;

if (runner === 66 && number == 55) {
    console.log("Lets goo its too easy!!!");
}
if (number == 55 || runner === 100) {
    console.log("we made it!!!!!!!!!!!!!!!!!!!!");
}

// JavaScript Arrays

let arr = ["Monday", "tuesday", "wednesday"];
let var99 = arr.length;
console.log(arr[0][3]); // d

let answer = arr.push("pink");

console.log(answer);

// JavaScript Objects

const hhh = { neil: 89, krupa: 56 };
hhh.suresh = 99;
hhh.mom = 100;
hhh.neil = 888;
console.log(hhh);
let sum = 0;
for (let i = 1; i <= 10; i++) {

    sum += i;
}
console.log(sum); // formula -> n(n+2)/2 -> 55

// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

const animals = ['lion', 'tiger', 'bear'];
for (let i = 0; i < animals.length; i++) {
    console.log(`the value at ${i} is ${animals[i]}`);
}

// <------------------------------------------->
// <---------- Guess the number game ---------->
// <------------------------------------------->

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = prompt("Enter a valid number!");
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') {
        break;
    }
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Enter a lower number!");
        attempts += 1;
    }
    else if (guess < targetNum) {
        guess = prompt("Enter a higher number!");
        attempts += 1;
    }
    else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit.");
    }
}

if (guess === 'q') {
    console.log("you quit the game.");
} else {
    console.log("WOW you are AMAZING!!!");
    console.log(`You got the correct answer: ${targetNum} in ${attempts} guesses!!!`);
}


// <------------------------------------------->
// <---------- Todo List Application ---------->
// <------------------------------------------->

let user_input = prompt("What would you like to do?");
const todo = [];

while (user_input !== "quit") {
    if (user_input === "new") {
        let enter = prompt("Enter new todo");
        todo.push(enter);
        console.log(`${enter} added to list`);
    }
    else if (user_input === "list") {
        console.log("**********");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("**********");
    }
    else if (user_input === "delete") {
        let remove = parseInt(prompt("Enter index of todo to delete"));
        todo.splice(remove, 1);
        console.log("Todo Removed");
    }

    user_input = prompt("What would you like to do?");
}
if (user_input === "quit") {
    console.log("OKAY, YOU QUIT THE APP");
}

// <------------------------------------------------------------------->
// <----------------- FUNCTIONS ------------------>
// <------------------------------------------------------------------->

function singSong() {
    console.log("love this song");
    console.log("hello everyone");
}

function greet(name) {
    console.log(`Hello ${name}`);
}
greet('neil');
singSong();

// <------Practice------->

function multiply(x, y) {
    return x * y;
}
function isShortsWeather(temp) {
    if (temp >= 75) {
        return true;
    }
    else {
        return false;
    }
}
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    else {
        return arr[arr.length - 1];
    }
}
function capitalize(str) {
    let newStr = str.charAt(0).toUpperCase() + str.substring(1);
    return newStr;
}
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function returnDay(num) {
    const arr = ["hey", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (num <= 7 && num >= 1) {
        return arr[num];
    } else {
        return null;
    }
}

// <------------->

// Lexical Scope
function bankRobbery() {
    const heroes = ['spiderman', 'batman', 'wolverine'];
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`Plaese help us, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}

//function expressions
let square = function (num) {
    return num * num;
}
square(9); // 81

// Higher Order Functions (functions as arguments && return function)
function callTwice(func) {
    func();
    func();
}
function call10Times(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
callTwice(rollDie);


// return function
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("congras you win");
        }
    }
    else {
        return function () {
            alert("hey stop right there!!!");
        }
    }
}

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }
// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }

// factory function
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
let isChild = makeBetweenFunc(1, 21);
let value = isChild(9);

// functions and objects interest to form methods "Defining Methods"
// Methods: simply a function that has been placed as a propery on an object. 
const myMath = {
    PI: 3.14159265, // property
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}
myMath.square(5);
const myMath2 = {
    PI: 3.14159265, // property
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}
myMath2.square(5);

// 'This' in methods (this keyword)
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'Scottish fold',
    meow() {
        console.log(`${this.name} says MEOWWWW`);
    }
}
const meow2 = cat.meow; // this refers to the window object
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount = this.eggCount + 1;
        return "EGG";
    }
}

// try/catch to catch errors.
try {
    hello.toUpperCase();
} catch {
    console.log("ERROR!!!!");
}
console.log("AFTER!!");

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);  // dont have to use this. 
        console.log("please pass a string next time!");
    }
}
// <------------------------------------------------------------------->
// <----------------- Callbacks & Array methods (22) ------------------>
// <------------------------------------------------------------------->
// these array patters are crucial to understaning javaScript
// use the new array functin syntax
// understand and use methods: forEach, map, filter, find, reduce, some, every
// array methods that require use to pass in function

// forEach: function as a argument
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// function print(element) {
//     console.log(element);
// }
// numbers.forEach(print);

// or do this
numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
});

// for (let el of numbers){
//     console.log(el);
// }

const movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Alien",
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});



// map: creates a new array!
const newNumbersArray = numbers.map(function (num) {
    return num * 2;
});

const titles = movies.map(function (movie_item) {
    return movie_item.title.toUpperCase();
});

// Arrow functions !!!!!!!!!! used to create function expresion !!!!!!!!!!!!!
const addfunction = function (a, b) {
    return (a + b);
}
const multiplyArrow = (n, m) => {
    return n * m;
}
const squareArrow = x => {
    return x * x;
}
const rollDieArrow = () => {
    return (Math.floor(Math.random() * 10) + 1)
}

// implicit return 
const isEven = num => (
    num % 2 === 0
);
const isEven2 = num => num % 2 === 0;

// More arrow functiont
const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score}`;
});

const newMoviesArrow = movies.map(movie => (
    `${movie.title} - ${movie.score}`
));

// setTimeout && setInterval
console.log("HELLOOO!!!...");
setTimeout(() => {
    console.log("Are you still there???");
}, 3000);

console.log("GOOD BYE!!!");

const id = setInterval(() => {    // clearInterval(id)
    console.log(Math.random())
}, 2000);
clearInterval(id);

// filter: creates a new array with all elements that pass 
// the test implemented by the provided function.
const values99 = [1, 4, 7, 2, 5, 8, 3, 6, 9, 0];

const odd = values99.filter(n => {
    return n % 2 === 1;  // if this test returns true, then the item is passed into new array
});
function validUserNames(usernames) {  // usernames = string array
    // your code here
    return usernames.filter(n => {
        return n.length < 10;
    });
}

// every: test whether all elements in the array pass the provided fucntion. return boolean true
const words = ["dog", "dig", "log", "bag", "wag"];

words.every(word => {
    return word.length === 3;
}); // true

words.every(word => {
    return word[0] === 'd';
}); // false.

words.every(word => {
    let lastElement = word[word.length - 1];
    return lastElement === 'g';
}); // true

// some: similar to every, but returns true if ANY of the array items passes the test function
const other_words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

other_words.some(word => {
    return word.length > 4;
}); // trun 

other_words.some(word => word[0] === 'Z'); // false

other_words.some(word => word.includes('cake')); // true


// reduce: executes a reducer function on each element of the array, resulting in a single value.
// Array.reduce(function argument, optional starting argument);
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
prices.reduce((total, price) => {
    return total + price;
});

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
});

// Arrow Functoins & 'this'
const person = {
    firstName: 'Neil',
    lastName: 'Patel',
    fullName: function () {
        // in arrow function, 'this' is refering to the  window object!!
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName: function () {
        setTimeout(() => {     // this refers to the outer function
            console.log(this);
            console.log(this.fullName);
        }, 2000);
    }
};
// person.shoutName();


// <------------------------------------------------------------------->
// <-----------------      NEW JS features (23)      ------------------>
// <------------------------------------------------------------------->

// Default Parameters
// function rollDicDefault(value) {
//     if (value === undefined) {
//         value = 6;
//     }
//     return Math.floor(Math.random() * value) + 1;
// }
function rollDicDefault(value = 6) {
    if (value === undefined) {
        value = 6;
    }
    return Math.floor(Math.random() * value) + 1;
}

// Spread in Function Calls
Math.max([1, 2, 3, 4, 5, 6, 7, 8, 999999]);
Math.min([1, 2, 3, 4, 5, 6, 7, 8, 999999]);
const values98 = [1, 2, 3, 4, 5, 6, 7, 8, 999999];
// Math.max(values98);  // this will not work
Math.max(...values98); // this will work = Math.max([1, 2, 3, 4, 5, 6, 7, 8, 999999]);
// the ... spreads the arguments.

console.log(values98);
console.log(...values98);
console.log(...'hello');

// spread in array literals: Create a new array using an existing array. 
// Spreads the elements from one array into a new array.
const val1 = [1, 2, 3];
const val2 = [4, 5, 6];
let arr1 = [...val1, ...val2];
let arr2 = ['a', 'b', ...val2];
let arr3 = [...val1, ...val2, 7, 8, 9, ..."hello"];

// spread in Object Literals
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const copy1 = { ...feline };
const copy2 = { ...feline, color: 'brown' };
const copy3 = { ...feline, ...canine };
const copy4 = { ...feline, ...canine, family: 'Steele' };

const weird = { ...[2, 4, 6, 8] };
const weird2 = { ..."HIII" }

const dataFromForm = {
    email: "runner99@gmail.com",
    password: "BladeRunner99",
    username: "BladeRunner"
};
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

// rest: looks like spread, but it's not!
// the arguments object, not available inside the arrow function.
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total;
}
sumAll(1, 8, 6, 5, 3, 2, 4, 5);
sumAll(9, 5);

function sumAll2(...nums) {   // pass in as sumAll2(1, 2, 3, 4)
    console.log(nums); // this is now an array.
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total;
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}
raceResults("Neil", "Deep", "Raj", "Kush", "Aria");

// Destructuring Arrays
const raceRunners = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];
const [gold, silver, bronze] = raceRunners;
const [fastest, ...everyOtherRunner] = raceRunners;

// Destructuring Objects
const user = {
    email: "harvey@gmail.com",
    password: "sCoTt1948sMiTh",
    firstName: "Harvey",
    lastName: "Milk",
    born: 1930,
    died: 1978,
    bio: "Harvey Bernard Milk was an American politician",
    city: "San Francisco",
    state: "California"
};

const firstNameBAD = user.firstName;
const { email, firstName, LastName, city, bio } = user;
const { born: birthyear, died: deathyear = "N/A", favoritColor = "N/A" } = user;   // the born property is applied to birthyear!

const user2 = {
    email: "stacy@gmail.com",
    firstName: "Stacy",
    lastName: "Gonzalez",
    born: 1930,
    bio: "Harvey Bernard Milk was an American politician",
    city: "San Francisco",
    state: "California"
};

const { born: birthyear2, died = "N/A" } = user2;

// Destructuring Parameters in the parameter list!
const factsAboutFastPeople = ({ first, last, location }) => {
    return `${first} ${last} lives in ${location}`;
}
const fastRunner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya"
}
factsAboutFastPeople(fastRunner);