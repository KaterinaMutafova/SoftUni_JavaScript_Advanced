function largest(input1,input2,input3) {
    let num1 = Number(input1);
    let num2 = Number(input2);
    let num3 = Number(input3);

    let largest;
    largest = num1;

    if (largest < num2) {
        largest = num2;
    } 
    if (largest < num3) {
        largest = num3;
    }

    console.log(`The largest number is ${largest}.`)

}

largest(5, -3, 16);
largest(-3, -5, -22.5);