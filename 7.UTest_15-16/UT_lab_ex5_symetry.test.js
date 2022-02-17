const assert = require('assert').strict;
const isSymmetric = require("./UT_lab_ex5_symetry");
let expect = require("chai").expect;

describe('Check for symetry', () => {

    it('Should not take an non-array - string - as an argument', () => {
        // Arrange
        let arr = "No array";
        let expectedResult = false; 
        
        // Act 
        let actualResult = Array.isArray(arr);
    
    
        // Assert
        assert.equal(actualResult, expectedResult)
        
    })

    it('Should not take an non-array - number - as an argument', () => {
        // Arrange
        let arr = 1;
        let expectedResult = false; 
        
        // Act 
        let actualResult = Array.isArray(arr);
    
    
        // Assert
        assert.equal(actualResult, expectedResult)
        
    })


    it('Should take an array as an argument', () => {
        // Arrange
        let arr = [1,2,3,4];
        let expectedResult = true; 
        
        // Act 
        let actualResult = Array.isArray(arr);
    
    
        // Assert
        assert.equal(actualResult, expectedResult)
        
    })

    it('Should return true for symetric array with numbers', () => {
        // Arrange
        let arr = [1,2,3,2,1];
        let expectedResult = true; 
        
        // Act 
        let actualResult = isSymmetric(arr);
    
    
        // Assert
        assert.equal(actualResult, expectedResult)
        
    })

    it('Should return true for symetric array with strings', () => {
        // Arrange
        let arr = ['1','2','3','2','1'];
        let expectedResult = true; 
        
        // Act 
        let actualResult = isSymmetric(arr);
    
    
        // Assert
        assert.equal(actualResult, expectedResult)
        
    })

    it('Should return true for symetric array with objects', () => {
        // Arrange
        let arr = [{'A': '1'},{'B':'2'},{'B':'2'},{'A': '1'}];
        let expectedResult = true; 
        
        // Act 
        let actualResult = isSymmetric(arr);
    
    
        // Assert
        assert.equal(actualResult, expectedResult)
        
    })
    

    it('Should return false for non-symetric array with numbers', () => {
        // Arrange
        let arr = [1,2,3,2,3];
        let expectedResult = false; 
        
        // Act 
        let actualResult = isSymmetric(arr);
    
    
        // Assert
        assert.equal(actualResult, expectedResult)
        
    })

    it('Should return false for non-symetric array with strings', () => {
        // Arrange
        let arr = ['1','2','3','2','3'];
        let expectedResult = false; 
        
        // Act 
        let actualResult = isSymmetric(arr);
    
    
        // Assert
        assert.equal(actualResult, expectedResult)
        
    })

    it('Should return false for non-symetric array with mixed variables', () => {
        // Arrange
        let arr = [1,2,'3','2','1'];
        let expectedResult = false; 
        
        // Act 
        let actualResult = isSymmetric(arr);
    
    
        // Assert
        assert.equal(actualResult, expectedResult)
        
    })

    it('returns false if array is not symmetric', () => {

        expect(isSymmetric(1,2,1,2)).to.be.false;
        expect(isSymmetric(['1', '2', '1', '2'])).to.be.false;

    })






})

