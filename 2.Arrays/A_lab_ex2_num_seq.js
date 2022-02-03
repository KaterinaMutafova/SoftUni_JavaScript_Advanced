function NnumKnum(n,k) {


    let arr = [1]

    for (i = 0; i < n; i++) {
        let lastKelements = arr.slice(-k);
        let sum = lastKelements.reduce((a, x) => a + x, 0);

        arr.push(sum);

    }

    return arr;

}

console.log(NnumKnum(6, 3));