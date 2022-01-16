function speedRadar(km, pl) {
    let speed = Number(km);
    let place = pl;

    let places = ["motorway", "interstate", "city", "residential"];
    let limits = [130, 90, 50, 20];
    let speeding = [20, 40, 41];
    let statuses = ["speeding", "excessive speeding", "reckless driving"];

    let index = places.indexOf(place);
    let curSpeedLimit = limits[index];
    let msg = "";
    

    if (speed <= curSpeedLimit) {
        console.log(`Driving ${speed} km/h in a ${curSpeedLimit} zone`);

    } else if (speed > limits[index]) {
        let difference = speed - curSpeedLimit;
        if (difference <= 20) {
            msg = statuses[0];
        } else if (difference > 20 && difference <= 40) {
            msg = statuses[1];
        } else if (difference > 40) {
            msg = statuses[2];
        }
         
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${curSpeedLimit} - ${msg}`)
    } 

}


// speedRadar(40, 'city');
// speedRadar(21, 'residential');
// speedRadar(120, 'interstate');
speedRadar(200, 'motorway');
