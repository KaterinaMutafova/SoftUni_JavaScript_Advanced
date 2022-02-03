function names(input) {

    let array = input;

    let sorted = array.sort((a,b) => a.localeCompare(b));
    

    let orderNumber = 1;

    sorted.forEach((name) => {

        console.log(`${orderNumber}.${name}`);
        orderNumber += 1;
    })





}

names(["John", "Bob", "Christina", "Ema"]);