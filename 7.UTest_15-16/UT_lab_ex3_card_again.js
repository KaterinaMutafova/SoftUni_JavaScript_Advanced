function printDeckOfCards(cards) {
    function cardFactory(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',  // '♠'
            H: '\u2665',  // '♥'
            D: '\u2666',  // '♦'
            C: '\u2663',  // '♣'
        }
    
        if (!faces.includes(face) || !suits[suit]) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }
    
        if (face !== face.toUpperCase()) {
            throw new Error();
        }
    
        if (suit !== suit.toUpperCase()) {
            throw new Error();
        }
    
        let card = {
            face,
            suit,
            toString() {
                console.log(this.face + suits[this.suit]);
            }
        };
    
        return card;
    
    }
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '\u2660',  // '♠'
        H: '\u2665',  // '♥'
        D: '\u2666',  // '♦'
        C: '\u2663',  // '♣'
    }

    let arrayCardSymbols = cards;
    let printArray = [];

    try {

        arrayCardSymbols.forEach(element => {

            let f = element.slice(0,-1);
            let s = element.slice(-1);
            
            let card = '';

            card = cardFactory(f, s);
            printArray.push(`${f}${suits[s]}`);


        });

        console.log(printArray.join(' '));

    } catch (error) {

        console.log(error.message);

    }

    // arrayCardSymbols.forEach(element => {

    //     let f = element.slice(0,-1);
    //     let s = element.slice(-1);
        
    //     let card = '';
        
    //     try{
    //         card = cardFactory(f, s);
    //         print += `${f}${suits[s]} `;
    
    //     } catch (error){
    //         console.error(`Invalid card: ${f,s}`);
              
    //     }
        
        
        
    // });

    // console.log(print);

    // if (!error) {
    //     console.log(print);

    // }

    
  
    
}

// printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);

  