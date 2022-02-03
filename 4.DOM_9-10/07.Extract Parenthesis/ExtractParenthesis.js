function extract(content) {
    let textId = content;

    let textElement = document.getElementById(textId);
    let text = textElement.innerText;
    let regEx = /(?<=\()[A-Za-z\s]+(?=(\)))/g;

    let found = text.match(regEx);

    let theStr = found.join('; ');

    return theStr;

    // let arrayFromText = text.split(' ');
    // console.log(arrayFromText);
    
}

let text = extract("content");