function addRemove(arr) {
    let array = arr;

    let output = [];

    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i];
        if (currentCommand === "add") {
            output.push(i + 1);
        } else if (currentCommand === "remove") {
            output.pop();
        }
    }
    if (output.length === 0) {
        console.log('Empty');
    } else {
        console.log(output.join('\n'));
    }

}

addRemove(['add', 
'add', 
'add', 
'add']);
addRemove(['add', 
'add', 
'remove', 
'add', 
'add']);

