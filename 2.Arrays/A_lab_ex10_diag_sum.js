function diagonAlley(input) {
    let matrix = input;
    let primDiag = 0;
    let secDiag = 0;
    let lengthM = matrix.length;

    primDiag = () => {
        let diag = 0;
        for (i = 0; i < lengthM; i++) {
            diag += matrix[i][i];
        }
        return diag;
    }

    secDiag = () => {
        let sDiag = 0;
        let counter = 0;
        for(i = lengthM - 1; i >= 0; i--) {
            arrInx = counter;
            counter += 1;
            sDiag += matrix[arrInx][i];
        }
        return sDiag;
    }
    
    console.log(primDiag(),secDiag());


}

diagonAlley([[20, 40],
            [10, 60]]);


   // matrix.forEach(printRow);
    // function printRow(row){
    //         console.log(row);
    //         row.forEach(printNumber);
    //     }
    //     function printNumber(num){
    //         console.log(num);
    //     };          
