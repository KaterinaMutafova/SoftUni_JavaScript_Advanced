function sortNum(input) {

    let array = input;

    let resultArr = [];
    array = array.sort((a,b) => a-b);


    let index = Math.floor(array.length / 2);

    while (array.length != 0) {
        resultArr.push(array.shift());
        resultArr.push(array.pop());
    }
     let finalResult = resultArr.filter((el) => {
         return typeof(el) !== 'undefined';
     })


    return finalResult


}

console.log(sortNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));