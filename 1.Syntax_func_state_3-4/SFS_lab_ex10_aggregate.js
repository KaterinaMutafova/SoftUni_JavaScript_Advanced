function aggregate(input) {
    let array = input;

    let arrayL = input.length;
    let arraySum = 0;
    let array_1_Sum = 0;
    let arrayConcat = '';

    for (i = 0; i < arrayL; i++) {
        arraySum += array[i];
        array_1_Sum += 1 / array[i];
        arrayConcat += String(array[i]);
    }

    console.log(arraySum);
    console.log(array_1_Sum);
    console.log(arrayConcat);

}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);