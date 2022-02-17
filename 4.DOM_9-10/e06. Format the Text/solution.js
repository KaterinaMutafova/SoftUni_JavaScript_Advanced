function solve() {
  //TODO

  let inputText = document.getElementById('input').value;
  let outputElement = document.getElementById('output');


  let arrayText = inputText.split('.');

  let newArray = []
  let counter = 0;
  let paragraph = '';
  let par = '';
  for (let sectionText of arrayText) {
    
    if (counter <= 3) {
      par += sectionText + '.';
      counter += 1

    }

    if (counter === 3){
      paragraph = `<p> ${par} </p>`;
      
      par = '';
      counter = 0;
      newArray.push(paragraph);
      console.log(paragraph);
      outputElement.innerHTML += paragraph;
    }
    
    
  }

}