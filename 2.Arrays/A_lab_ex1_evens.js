function evens(input) {
    let count = 0;
    let rowPrint = ""
    for (el of input) {
        if (count % 2 == 0) {
            rowPrint += String(el) + " "
                 
        }
        count += 1;   
    }
    console.log(rowPrint);

}

evens(['20', '30', '40', '50', '60']);
evens(['5', '10']);