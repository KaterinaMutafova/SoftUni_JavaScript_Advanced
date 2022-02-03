function magicM(input) {

    let matrix = input;
    let istrue = true;
    let theSum = matrix[0].reduce((a,b) => a + b);
     

    matrix.forEach(array => {
        let sum = 0; 
        for (let i = 0; i < matrix[0].length; i++) {
            sum += array[i];

            let length = matrix[0].length;
            let colSum = 0
            for (let j = 0; j < length; j++) {
                colSum += matrix[i][j];
            }
            if (colSum !== theSum) {
                istrue = false;
            }

        }
   
        if (sum !== theSum) {
            istrue = false;
        }

              
    });

    console.log(istrue);
    

}

magicM([[4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]]);

magicM([[11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]]);

magicM([[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]]);