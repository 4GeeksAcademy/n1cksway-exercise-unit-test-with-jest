// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollors = valueInEuro * 1.07;
    
    return valueInDollors
}

const fromDollarToYen = function(valueInDollors) {
    
    let valueInEuro = valueInDollors / 1.07

    let valueInYen = valueInEuro * 156.5
   
    return valueInYen
}
const fromYenToPound = function(valueInYen){

    
    let valueInEuro = valueInYen * 0.87

    let valueInPound = valueInEuro / 156.5

    return valueInPound
    
}


module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};
console.log(sum,fromEuroToDollar,fromDollarToYen,fromYenToPound);
