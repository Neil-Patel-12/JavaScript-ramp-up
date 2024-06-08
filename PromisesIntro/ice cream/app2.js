let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    Liquid: ['water', 'ics'],
    Holder: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
}

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject("shop is closed.");
        }
    });
}

async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[fruit_name]} was selected`);

        await time(0);
        console.log("production has started");

        await time(2000);
        console.log("the fruit has been chooped");

        await time(1000);
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);

        await time(1000);
        console.log("the machine started");

        await time(2000);
        console.log(`ice cream placed on ${stocks.Holder[0]}!!!`);

        await time(3000);
        console.log(`${stocks.Toppings[1]} was added as topping`);

        await time(2000);
        console.log("Serve ICE CREAM!!!");
    }
    catch (error) {
        console.log("day ended, shop is closed.");
    }
    finally {
        console.log("day ended, shop is closed.");
    }
}

kitchen()