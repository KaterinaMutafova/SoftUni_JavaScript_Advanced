function rotate(arr, num) {
    let array = arr;
    let number = Number(num);
    let length = array.length;

    for (let i = number; i > 0; i--) {
        array.unshift(array.pop());
    }
    console.log(array.join(' '));
}

rotate(['1', 
'2', 
'3', 
'4'], 
2);

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);