function prevDay(y, m, d) {
    let year = Number(y);
    let month = Number(m);
    let day = Number(d);

    let resYear = 0;
    let resMonth = 0;
    let resDay = 0;

    let monthsAfter30 = [5,7,10,12];
    let monthsAfter31 = [1,2,4,6,8,9,11];
    let monthAfterFebr = [3];

    if (day !== 1) {
        resYear = year;
        resMonth = month;
        resDay = day - 1;
    } else if (day === 1 && month === 1) {
        resYear = year - 1;
        resMonth = 12;
        resDay = 31;
    } else if (day === 1 && month !== 1) {
        resYear = year;
        resMonth = month - 1;
        if (monthsAfter30.includes(month)) {
            resDay = 30;
        } else if (monthsAfter31.includes(month)) {
            resDay = 31;
        } else if (monthAfterFebr.includes(month)) {
            if (resYear % 4 === 0) {
                resDay = 29;
            } else if (resYear % 4 !== 0) {
                resDay = 28;
            }
        }

    } 
    console.log(`${resYear}-${resMonth}-${resDay}`);



}

// prevDay(2016, 9, 30);
// prevDay(2016, 10, 1);
prevDay(2016, 1, 1);
prevDay(2015, 3, 1);