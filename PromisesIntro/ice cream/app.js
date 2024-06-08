let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    Liquid: ['water', 'ics'],
    Holder: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
}

// this will get the order
let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
        call_production()
    }, 2000)
}

//this will create the ice cream
let production = () => {

    setTimeout(() => {
        console.log("production has started");

        setTimeout(() => {
            console.log("the fruit has been chooped");

            setTimeout(() => {
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);

                setTimeout(() => {
                    console.log("the machine started");

                    setTimeout(() => {
                        console.log(`ice cream placed on ${stocks.Holder[0]}!!!`);

                        setTimeout(() => {
                            console.log(`${stocks.Toppings[1]} was added as topping`);

                            setTimeout(() => {
                                console.log("Serve ICE CREAM!!!");

                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0)
}

// order(0, production);

/*
        promise is made
               |
            Pending
              / \
            /    \
    resolved      reject
      
    .then()        .catch
                      / 
    .then()          /
       \            /
        \          /
        \         /  
         .finally
*/

let is_shop_open = true;

let order2 = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {

            setTimeout(() => {
                resolve(work())
            }, time)

        } else {
            reject("our shop is closed");
        }
    })
}

/*
order2(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

    .then(() => {
        return order2(0, () => console.log("Production has started"))
    })
    .then(() => {
        return order2(2000, () => console.log("the fruit was chopped"))
    })
    .then(() => {
        return order2(1000, () => console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`))
    })
    .then(() => {
        return order2(1000, () => console.log("the machine started"))
    })
    .then(() => {
        return order2(2000, () => console.log(`ice cream placed on ${stocks.Holder[0]}!!!`))
    })
    .then(() => {
        return order2(3000, () => console.log(`${stocks.Toppings[1]} was added as topping`))
    })
    .then(() => {
        return order2(2000, () => console.log("Serve ICE CREAM!!!"))
    })
    .catch((err) => {
        console.log("Customer left", err)
    })
    .finally(() => {
        console.log("day ended, shop is closed");
    })
*/


let order3 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve()
        } else {
            reject()
        }
    })
}

async function order3() {
    try {
        await ab;
    } catch (error) {
        console.log("this function does not exist", error)
    } finally {
        console.log("runs code anyways");
    }
}
// order3();




// the correct way to do it.
let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                console.log("which topping would you love?")
            );
        }, 3000)
    });
}

async function kitchen() {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");

    await toppings_choice()

    console.log(" D ");
    console.log(" E ");
}

kitchen()

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others order");