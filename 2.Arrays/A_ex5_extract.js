function extract(input) {

    let array = input;
    let newArr = [];
    let length = array.length;
    let first =  array[0];
    let bigger = first;
    newArr.push(first);
    

    for (let i = 1; i < length; i++) {   
        let currentElement = array[i];
        let prevElement = array[i - 1];

        if (currentElement > prevElement && currentElement > bigger) {
            bigger = currentElement;
            newArr.push(currentElement);
        } 

    }
  
    return newArr;

}


console.log(extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));

console.log([1, 
    2, 
    3,
    4]);

console.log(extract([20, 
    3, 
    2, 
    15,
    6, 
    1]));
