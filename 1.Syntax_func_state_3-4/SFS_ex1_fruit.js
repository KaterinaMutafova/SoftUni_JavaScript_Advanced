function fruitCalc(fr, wGr, pKg) {
    let fruit = fr;
    let weightGram = wGr;
    let priceKilo = Number(pKg);
    let weightKilo = weightGram / 1000;
    let money = weightKilo * priceKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${weightKilo.toFixed(2)} kilograms ${fruit}.`);


}

fruitCalc('orange', 2500, 1.80);
fruitCalc('apple', 1563, 2.35);