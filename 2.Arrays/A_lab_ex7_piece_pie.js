function slicing(inputStr, startStr, endStr) {
    let arr = inputStr;
    let firstIndex = arr.indexOf(startStr);
    let endIndex = arr.indexOf(endStr);

    

    newArr = arr.slice(firstIndex,endIndex + 1);

    return newArr
  

}

console.log(slicing(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));