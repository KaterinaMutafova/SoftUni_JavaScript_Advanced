function monthDay(m, y) {
    let month = Number(m);
    let year = Number(y);

    let months31 = [1,3,5,7,8,10,12];
    let months30 = [4,6,9,11];
    let days = 0;


    if (month === 2 && year % 4 === 0) {
        days = 29;
        
    } else if (month === 2 && year % 4 !== 0) {
        days = 28;
        
    } else if (months31.includes(month)) {
        days = 31;
        
    } else if (months30.includes(month)) {
        days = 30;
       
    }
    
    console.log(days);



}

// monthDay(1, 2012);
monthDay(1, 2021);