function area(input) {
    let radius = input;
    let typeOfInput = typeof(input);
    let area;

    if (typeOfInput === 'number') {
        area = Math.PI * Math.pow(input, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`)
    }


}

area(5);
area('name');