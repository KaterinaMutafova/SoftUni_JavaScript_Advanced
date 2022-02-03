function arraySort(input) {
    let array = input;

    array = array.sort(function(a,b) {
        return a.length - b.length || a.localeCompare(b);
    });

    array.forEach(element => {
        console.log(element);
        
    });


}

arraySort(['alpha', 
'beta', 
'gamma']);

arraySort(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);