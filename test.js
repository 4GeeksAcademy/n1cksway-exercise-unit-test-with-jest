

const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("one dollor should be 146.2 yen", function(){

    const {fromDollarToYen} = require('./app.js');
    
    const yen = fromDollarToYen(3.5);

    const expected = 3.5 * 156.5 / 1.07;

    expect(fromDollarToYen(3.5)).toBe(expected);
})

test("one Yen should be 0.00555911 Pounds", function(){
    const {fromYenToPound} = require('./app.js');

    const pound = fromYenToPound(3.5);

    const expected = 3.5 * 0.87 / 156.5;
    
    expect(fromYenToPound(3.5)).toBe(expected);  

})


