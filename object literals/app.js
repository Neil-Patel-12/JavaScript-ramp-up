console.log("object literals")

// An object literal is a comma-separated list of 
// key-value pairs wrapped in curly braces {}. Each key-value pair is called a property.

// creating object literals
const person = {
    name: "John",
    age: 30,
    isStudent: true
};

// nested objects
const student = {
    name: "Alice",
    age: 22,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};

// Arrays as Properties
const employee = {
    name: "Jane",
    roles: ["developer", "designer", "manager"]
};

// accessing object properties
console.log(person.name); // "John"
console.log(student.address.city); // "New York"
console.log(employee.roles[0]);

// Bracket Notation
console.log(person["age"]); // 30
const key = "isStudent";
console.log(person[key]); // true
console.log(employee["roles"][0]);

// Adding and Modifying Properties
// dot notation
person.gender = "male";
person.age = 31;

// bracket notation
person["nationality"] = "American";
const newKey = "occupation";
person[newKey] = "engineer";
console.log(person);

// Removing Properties
delete person.age;
console.log(person.age); // undefined


// Methods in Object Literals
// Methods are functions stored as object properties.
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2

// Object Spread Operator
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };

console.log(merged); // { a: 1, b: 3, c: 4 }


const comment = {
    username: "neilpatel",
    downVote: 19,
    upVote: 214,
    commentText: "drive fast car",
    tags: ["#funny", "#fast"],
    fun: true
};
console.log(comment);

console.log(comment["username"]);
console.log(comment.username);

comment.location = "Florida";
comment["tags"].push("#R8");
comment.fun = false;

console.log(comment);