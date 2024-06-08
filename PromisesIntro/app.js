const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure("Connection Timeout :(");
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
}

fakeRequestCallback("books.com", function () {
    console.log("IT WORKS!!!");
}, function () {
    console.log("IT DID NOT WORK :(");
});

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                failure("Connection Timeout :(");
            } else {
                success(`Here is your fake data from ${url}`);
            }
        }, delay);
    })
}


// PromiseStatus can be "pending" or "rejected"
// i can run code when promise is rejected or when promise is resolved

// A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

const request = fakeRequestPromise("yelp.com/api/coffee");

request
    .then(() => {
        console.log("It Worked!!!!!");
    })
    .catch(() => {
        console.log("OH NO, ERROR!!");
    });

fakeRequestPromise("yelp.com/api/coffee/page1")
    .then((data) => {
        console.log("It worked (page1)");
        console.log(data);
        return fakeRequestPromise("yelp.com/api/coffee/page2")
    })
    .then((data) => {
        console.log("It worked (page2)");
        console.log(data);
        return fakeRequestPromise("yelp.com/api/coffee/page3")
    })
    .then((data) => {
        console.log("It worked (page3)");
        console.log(data);
    })
    .catch((err) => {
        console.log("OH NO, a request failed");
        console.log(err);
    })


let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
        resolve("success");
    } else {
        reject("failed");
    }
})

p
    .then((message) => {
        console.log("everything is good " + message);
    })
    .catch(() => {
        console.log("this is a catch " + message);
    })