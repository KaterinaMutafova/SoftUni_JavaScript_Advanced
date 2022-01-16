function stars(input) {
    let number = Number(input);
    

    if (number) {
        for (i = 1; i <= number; i++) {  
            let rowStars = '';
            for (index = 1; index <= number; index++) {
                rowStars += ' *'
            }
            console.log(rowStars)
        }
        
    } else { 
        for (i = 1; i <= 5; i++) {  
            let rowStars = '';
            for (index = 1; index <= 5; index++) {
                rowStars += '*'
            }
            console.log(rowStars)
        }
    

    }



}
stars(7);


// Easier WAY !!! 
function easyStars(count=5) {
    
    for (i=0; i < count; i++) {
        console.log("* ".repeat(count));
    }
}
easyStars(7);

