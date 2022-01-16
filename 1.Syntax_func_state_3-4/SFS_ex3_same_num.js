function sameNum(input) {
    let strNum = String(input);
    let strLength = strNum.length;
    let isSame = true;
    let firstNum = Number(strNum[0]);
    let sumNumb = 0;

    for (index=0; index < strLength; index++) {
        currentNum = Number(strNum[index]);
        sumNumb += currentNum;

        if (firstNum !== currentNum) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sumNumb);


}

sameNum(2222222);