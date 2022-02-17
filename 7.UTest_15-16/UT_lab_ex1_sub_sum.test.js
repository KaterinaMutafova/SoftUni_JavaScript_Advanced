const assert = require('assert').strict;
const subSum = require("./UT_lab_ex1_sub_sum");
let expect = require("chai").expect;

it('Should calculate sub-sum when endIndex is larger than length', () => {
    // Arrange
    let expectedSum = 150;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;

    // Act 
    let actualSum = subSum(numbers, startIndex, endIndex);

    // Assert
    assert.equal(actualSum, expectedSum);


})

