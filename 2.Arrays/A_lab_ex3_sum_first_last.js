function sumFL(input) {

    let arrayA = input;

    let sumFL = Number(arrayA.shift()) + Number(arrayA.pop());

    return sumFL;

}

console.log(sumFL(['20', '30', '40']));