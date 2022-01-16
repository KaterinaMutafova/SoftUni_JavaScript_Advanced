function validity(x1, y1, x2, y2) {
    distance1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    distance2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    distance3 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2-y1), 2));

    distances = [distance1, distance2, distance3];
    params = [[x1, y1, 0, 0], [x2, y2, 0, 0], [x1, y1, x2, y2]]

    for (index = 0; index < 3; index++) {
        currentDist = distances[index];
        if (Number.isInteger(currentDist)){
            let first = params[0];
            let second = params[1];
            let third = params[2];
            console.log(`{${params[index][0]}, ${params[index][1]}} to {${params[index][2]}, ${params[index][3]}} is valid`);
        } else  {
            console.log(`{${params[index][0]}, ${params[index][1]}} to {${params[index][2]}, ${params[index][3]}} is invalid`);
        }
             
    }

     
}

// validity(3, 0, 0, 4);
validity(2, 1, 1, 1);