function strLength(input1, input2, input3) {
let str1 = input1;
let str2 = input2;
let str3 = input3;

let allSum = str1.length + str2.length + str3.length;
let average = Math.floor(allSum / 3);
console.log(allSum);
console.log(average);


}

strLength('chocolate', 'ice cream', 'cake');
strLength('pasta', '5', '22.3');