function upperCase(input) {
    let text = input;
    
    const regEx = /[A-Z]+/g;
    text = text.toUpperCase();
    
    
    text = text.match(regEx);
   
    let strRow = ''

    for (el = 0; el !=  text.length; el++) {
        curWord = text[el];
        if (el < text.length - 1) {
            strRow += curWord + ', '
        } else {
            strRow += curWord + ' '
        }
        
    }

    console.log(strRow);

}

upperCase('Hi, how are you?')