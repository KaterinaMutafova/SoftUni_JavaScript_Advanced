function posNegArr(input) {

    let arr = input;
    let newArr = []
    arr = arr.forEach(element => {
        if (element < 0) {
            newArr.unshift(element);
        } else if (element >= 0){
            newArr.push(element);
        } 
        
    });


    for (el of newArr) {
        console.log(el);

    }

}

posNegArr([7, -2, 8, 9]);
posNegArr([3, -2, 0, -1]);
