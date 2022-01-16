function walkTime(st, l_m, sp_km_h) {
    let steps = Number(st);  // number of steps
    let lengthM_step = Number(l_m);   // length of the footprint
    let speedkmH = Number(sp_km_h);   // speed in km per hour

    let distance = steps * lengthM_step;  //distance in metres
    let speedMS = (speedkmH * 1000) / 3600; //metres in second

    let timeS = distance / speedMS; //time in seconds
    let breaksCount = Math.trunc(distance / 500);  //number of breaks
    let timeSPlusBreaks = Math.round(timeS + (breaksCount * 60));
    let hours = 0;
    let mins = 0;
    let sec = 0;

   
    hours = Math.trunc(timeSPlusBreaks / 3600);
   
    if (hours > 0) {
        mins = timeSPlusBreaks % 3600;  //module division to find the remains
    } else {
        mins = Math.trunc(timeSPlusBreaks / 60);
    }
    
    if (mins > 0) {
        sec = timeSPlusBreaks % 60;
    } else {
        sec = timeSPlusBreaks;
    }
    

    if (hours == 0) {
        hours = "00";
    } 
    if (mins == 0) {
        mins = "00";
    }
    if (sec == 0) {
        sec = "00"
    }

console.log(`${hours}:${mins}:${sec}`)



}

walkTime(4000, 0.60, 5);
walkTime(2564, 0.70, 5.5);