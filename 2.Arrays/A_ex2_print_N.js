function printNel(arr, num) {
    let array = arr;
    let number = Number(num);
    let copy = [];
    for (let i = 0; i < array.length; i+= number) {
         copy.push(array[i]);

    }
    return copy;
        



}

console.log(printNel(['5', 
'20', 
'31', 
'4', 
'20'], 
2));
