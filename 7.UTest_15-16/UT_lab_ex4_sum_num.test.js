const assert = require('assert').strict;
const sum = require("./UT_lab_ex4_sum_num");

it('Should return the sum of an array', () => {
    // Arrange
    let array = [1, 2, 3, 4];
    let expectedSum = 10;
 
    // Act 
    let actualSum = sum(array);
  

    // Assert
    assert.equal(actualSum, expectedSum);
   

})



