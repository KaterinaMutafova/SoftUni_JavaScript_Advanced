const assert = require('assert').strict;
const rgbToHexColor = require("./UT_lab_ex6_rgb_hex");
let expect = require("chai").expect;

describe('Check RGB to HEX functionality', () => {


    it('Should return undefined if any of the variables red is a string', () => {
        // Arrange
        let expectedRes = undefined;
        let red = '1';
        let green = 2;
        let blue = 20;

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return undefined if any of the variables green is a string', () => {
        // Arrange
        let expectedRes = undefined;
        let red = 1;
        let green = '90';
        let blue = 20;

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return undefined if any of the variables blue is a string', () => {
        // Arrange
        let expectedRes = undefined;
        let red = 19;
        let green = 2;
        let blue = '18';

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return undefined if red, green, blue are all strings', () => {
        // Arrange
        let expectedRes = undefined;
        let red = '1';
        let green = '18';
        let blue = '200';

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return undefined if red is not a number', () => {
        // Arrange
        let expectedRes = false;
        let red = [1];
        let green = 240;
        let blue = 200;

        // Act
        let actualRes = Number.isInteger(red);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return undefined if green is not a number', () => {
        // Arrange
        let expectedRes = false;
        let red = 17;
        let green = {'1': 'A'};
        let blue = 200;

        // Act
        let actualRes = Number.isInteger(green);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return undefined if blue is not a number', () => {
        // Arrange
        let expectedRes = false;
        let red = 17;
        let green = 18;
        let blue = {'1': 'A'};

        // Act
        let actualRes = Number.isInteger(blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })



    it('Should return undefined if red is less than zero', () => {
        // Arrange
        let expectedRes = undefined;
        let red = -90;
        let green = 2;
        let blue = 20;

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return undefined if green is less than zero', () => {
        // Arrange
        let expectedRes = undefined;
        let red = 90;
        let green = -2;
        let blue = 20;

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return undefined if blue is less than zero', () => {
        // Arrange
        let expectedRes = undefined;
        let red = 90;
        let green = 2;
        let blue = -20;

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return undefined if red is more than 255', () => {
        // Arrange
        let expectedRes = undefined;
        let red = 270;
        let green = 2;
        let blue = 250;

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return undefined if green is more than 255', () => {
        // Arrange
        let expectedRes = undefined;
        let red = 2;
        let green = 270;
        let blue = 250;

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return undefined if blue is more than 255', () => {
        // Arrange
        let expectedRes = undefined;
        let red = 2;
        let green = 2;
        let blue = 270;

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return undefined if red, green, blue are less more than 255 and  less  than 0', () => {
        // Arrange
        let expectedRes = undefined;
        let red = -10;
        let green = 5;
        let blue = 257;

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })


    it('Should return undefined if only two variables are entered', () => {
        // Arrange
        let expectedRes = undefined;
        let red = 90;
        let green = 2;
       

        // Act
        let actualRes = rgbToHexColor(red, green);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return #FF9EAA if red is 255, green is 158 , blue is 170', () => {
        // Arrange
        let expectedRes = '#FF9EAA';
        let red = 255;
        let green = 158;
        let blue = 170;

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('Should return #4057A if red is 255, green is 158 , blue is 170', () => {
        // Arrange
        let expectedRes = '#4057AE';
        let red = 64;
        let green = 87;
        let blue = 174;

        // Act
        let actualRes = rgbToHexColor(red, green, blue);

        // Assert
        assert.equal(actualRes, expectedRes);

    })

    it('returns proper hex represantations', () => {

        expect(rgbToHexColor(66, 135, 245)).to.equal('#4287F5');
        expect(rgbToHexColor(5, 10, 18)).to.equal('#050A12');
        expect(rgbToHexColor(79, 9, 23)).to.equal('#4F0917');

        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');

    })






})