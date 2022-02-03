function newobj(input1,input2,input3) {
    const city = {};
    city.name = input1;
    city.population = input2;
    city.treasury = input3;
    

    return city;

}

console.log(newobj('Tortuga', 7000, 15000));