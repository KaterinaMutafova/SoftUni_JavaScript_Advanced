function extractText() {
    


    let ulElement = document.getElementById('items');
    
    let testareaElement = document.getElementById('result');
    testareaElement.textContent = ulElement.textContent;

}

extractText();