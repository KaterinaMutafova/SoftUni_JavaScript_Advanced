function solve() {
  //TODO...

  let strIn = document.getElementById('text').value;
  let caseTy = document.getElementById('naming-convention').value;

  strIn = strIn.toLowerCase();

  let arrStr = strIn.split(' ');

  let arrRes = '';


  if (caseTy == 'Camel Case') {
    arrStr = arrStr.map(word => word[0].toUpperCase() + word.substring(1)
    );
    arrRes = arrStr.join('');
    arrRes = arrRes[0].toLowerCase() + arrRes.substring(1);
    
  } else if (caseTy == 'Pascal Case') {
    arrStr = arrStr.map(word => word[0].toUpperCase() + word.substring(1)
    );
    arrRes = arrStr.join('');
    
    
  } else {
    arrRes = 'Error!';
    

  }

  let resultEl = document.getElementById('result');

  resultEl.textContent = arrRes;


}