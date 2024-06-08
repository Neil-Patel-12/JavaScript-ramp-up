// Async Functions: a newer and cleaner syntax for working with async code!
// Syntax "makeup" for promises

// ASYNC AWAIT

// The asynk keyword: Async functions always return a promise.
// If the function returns a value, the promise will be resolved with that value
// if the function throws an exception, the promise will be rejected

async function hello() {

}
const sing = async () => {
    throw "oh no problem!!!";
    return "dfhdhfdf";
}
sing().then((data) => {
    console.log("promise resolved " + data);
}).catch((err) => {
    console.log("oh no promise rejected");
    console.log(err);
})


// the correct way to work with promises!!!
const login = async (username, password) => {
    if (!username || !password) {
        throw "Missing Credentials";
    }
    if (password === "corgifeetarecute") {
        return "Welcome!"
    }
    throw "Invalide Password";
}
login('adksfdksf', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!!");
        console.log(msg);
    })
    .catch(msg => {
        console.log("ERROR!!");
        console.log(msg);
    })


// The await keyword: we can only use the await keyword inside of functions declared with async.
// await will pause the execution of the function, waiting for a promise to be resolved

