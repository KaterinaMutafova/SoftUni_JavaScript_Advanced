function cookNumbers(num, op1, op2, op3, op4, op5) {
    let number = Number(num);
    let action1 = op1;
    let action2 = op2;
    let action3 = op3;
    let action4 = op4;
    let action5 = op5;

    let actions = [action1, action2, action3, action4, action5];

    chop = () => {number = number / 2;}
    dice = () => {number = Math.sqrt(number);}
    spice = () => {number = number + 1;}
    bake = () => {number = number * 3;}
    fillet = () => {number = number - (0.20 * number);}

    for (ind = 0; ind < 5; ind++ ) {
        currentAction = actions[ind];

        switch (currentAction) {
            case "chop": chop(); break;
            case "dice": dice(); break;
            case "spice": spice(); break;
            case "bake": bake(); break;
            case "fillet": fillet(); break;
        }
        console.log(number);

    }
    



}

cookNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');