function greatDiv(n1, n2) {
    let num1 = Number(n1);
    let num2 = Number(n2);

    let maxN = Math.max(num1, num2);
    let minN = 0;

    if (maxN === num1) {
        minN = num2;

    } else if (maxN === num2) {
        minN = num1;
    }

    for (index=minN; minN > 1; index--) {
        if (maxN % index == 0 && minN % index == 0) {
            console.log(index);
            break;
        }
    }


}

greatDiv(15, 5);
greatDiv(2154, 458);