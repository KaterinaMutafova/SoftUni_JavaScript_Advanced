const assert = require('assert').strict;
const createCalculator = require("./UT_lab_ex7_add_sub");
let expect = require("chai").expect;


describe('Calculator objects functions', () => {

    it('Should create an object and check if it has an add function', () => {
        // Arrange
        let property = 'add';
        let newCalcObject = createCalculator();
        let hasProperty = true;
        
        // Act  
        let objectHasProperty =  newCalcObject.hasOwnProperty(property);
      
    
        // Assert
        assert.equal(objectHasProperty, hasProperty);
    
    })


    it('Should create an object and check if it has a subtract function', () => {
        // Arrange
        let property = 'subtract';
        let newCalcObject = createCalculator();
        let hasProperty = true;
        
        // Act  
        let objectHasProperty =  newCalcObject.hasOwnProperty(property);
      
    
        // Assert
        assert.equal(objectHasProperty, hasProperty);

    })

    it('Should create an object and check if it has a get function', () => {
        // Arrange
        let property = 'get';
        let newCalcObject = createCalculator();
        let hasProperty = true;
        
        // Act  
        let objectHasProperty =  newCalcObject.hasOwnProperty(property);
      
    
        // Assert
        assert.equal(objectHasProperty, hasProperty);

    })

    it('Should test the add function with a Number', () => {
        // Arrange
        let newCalcObject = createCalculator();
        let expectedRes = 5;
        
        // Act  
        let initialRes = newCalcObject.get();
        newCalcObject.add(5);
        let actualRes = newCalcObject.get();
      
        // Assert
        assert.equal(initialRes, 0);
        assert.equal(actualRes, expectedRes);

    })

    it('Should test the add function with a String', () => {
        // Arrange
        let newCalcObject = createCalculator();
        let expectedRes = 5;
        
        // Act  
        let initialRes = newCalcObject.get();
        newCalcObject.add('5');
        let actualRes = newCalcObject.get();
      
        // Assert
        assert.equal(initialRes, 0);
        assert.equal(actualRes, expectedRes);

    })


    it('Should test the subtract function with a Number', () => {
        // Arrange
        let newCalcObject = createCalculator();
        let expectedRes = 10;
        
        // Act 
        let initialRes = newCalcObject.get(); 
        newCalcObject.add(5);
        newCalcObject.add(10);
        newCalcObject.subtract(5);
        let actualRes = newCalcObject.get();
      
        // Assert
        assert.equal(initialRes, 0);
        assert.equal(actualRes, expectedRes);

    })


    it('Should test the subtract function with a String', () => {
        // Arrange
        let newCalcObject = createCalculator();
        let expectedRes = 10;
        
        // Act 
        let initialRes = newCalcObject.get();  
        newCalcObject.add(5);
        newCalcObject.add(10);
        newCalcObject.subtract('5');
        let actualRes = newCalcObject.get();
      
        // Assert
        assert.equal(initialRes, 0);
        assert.equal(actualRes, expectedRes);

    })

    it('Should test the get function works', () => {
        // Arrange
        let newCalcObject = createCalculator();
        let expectedRes = 10;
        
        // Act  
        let initialRes = newCalcObject.get();
        newCalcObject.add(5);
        newCalcObject.add(10);
        newCalcObject.subtract('5');
        let actualRes = newCalcObject.get();
      
        // Assert
        assert.equal(initialRes, 0);
        assert.equal(actualRes, expectedRes);

    })








})