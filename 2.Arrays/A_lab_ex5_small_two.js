function smallestTwo(input) {
    let arr = input;
    arr.sort((a,b) => a - b);

    arr = arr.slice(0,2);

    console.log(arr.join(" "));

}

smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);
