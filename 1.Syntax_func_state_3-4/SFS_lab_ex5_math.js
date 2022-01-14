function calc(number1, number2, operator) {
    let num1 = Number(number1);
    let num2 = Number(number2);
    let op = operator;

    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;

    }
    console.log(result);
}

calc(5, 6, '+');
calc(3, 5.5, '*');