function colorize() {
    // First way
    // let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');
   
    // let arrayElements = Array.from(rowElements);

    // arrayElements.forEach(x => {
    //     x.style.backgroundColor = 'teal';
    // });

    // Second way

    let rowElement = document.getElementsByTagName('tr');

    //Convert to array
    let rows = Array.from(rowElement);

    rows.forEach((x, i) => {
        if (i % 2 != 0) {
            x.style.backgroundColor = 'teal';
        }
    })


}