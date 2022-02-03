function biggest(input) {

    let matrix = input;

    let currentMax = 0;
    let allMax = 0;

    matrix.forEach(arr => {
        currentMax = arr.reduce(function(a, b) {
            return Math.max(a, b);
        }, 0);

       
        if (currentMax > allMax) {
            allMax = currentMax;
        }
        
    });

    return allMax;

}

console.log(biggest([[20, 50, 10], [8, 33, 145]]));

console.log(biggest([[3, 5, 7, 12],
         [-1, 4, 33, 2],
         [8, 3, 0, 4]]));

