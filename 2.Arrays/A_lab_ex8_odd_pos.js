function oddArr(input) {
    let arr = input;
    
    let newArr = [];
    arr = arr.map(num => num * 2);

    for (i = 0; i < arr.length; i++) {
        index = arr.indexOf(arr[i]);
        element = arr[i];
        if (i % 2 !== 0) {
            newArr.unshift(element);
        }
    }
    


    return newArr.join(" ");

}

// console.log(oddArr([10, 15, 20, 25]));
console.log(oddArr([3, 0, 10, 4, 7, 3]));