const subSum = require('./UT_lab_ex1_sub_sum');

function test() {
    // Arange
    let expectedSum = 150;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;

    // Act 
    let actualSum = subSum(numbers, startIndex, endIndex);

    // Assert
    if (actualSum == expectedSum) {
        console.log('correct');
    } else {
        console.log('Error');
    }


}

test();