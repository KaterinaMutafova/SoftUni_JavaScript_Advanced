function delim(arr, del) {
    let array = arr;
    let separator = del;
    

    array = array.join(separator);

    console.log(array);

}

delim(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-')