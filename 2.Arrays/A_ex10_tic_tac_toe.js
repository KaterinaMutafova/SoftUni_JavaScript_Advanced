function TTT(input) {
    let matrix = [[false, false, false],
                  [false, false, false],
                  [false, false, false]];

    let firstPm = 'X';
    let secondPm = 'O';
    let isWon = false;

    let checkWin = function(mat, playerSign) {
        mat.forEach(row => {
            for (let i = 0; i < row.length; i++) {
                if (row[i] === playerSign) {
                    isWon = true;
                } else {
                    isWon = false;
                }
                if (isWon) {
                    break;
                }

            }

            
        });



    }

// NOT DONE!!! 




}

TTT(
["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]);