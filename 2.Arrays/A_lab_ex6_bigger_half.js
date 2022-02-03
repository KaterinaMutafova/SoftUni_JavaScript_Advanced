function biggestTwo(input) {
    let arr = input;

    newArr = arr.sort((a,b) => a - b);

    countNewArr = Math.floor(arr.length/2);

    newArr = arr.slice(countNewArr, arr.length);

    return newArr;

}

console.log(biggestTwo([4, 7, 2, 5]));
console.log(biggestTwo([3, 19, 14, 7, 2, 19, 6]));