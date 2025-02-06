test("Un euro equivale a 1.07 dolares", function() {
    //Les función fromEuroToDollar está creada en jest.js
    const { fromEuroToDollar } = require('./jest.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Conversión de USD a JPY (1 USD = 149.03 JPY)", function() {
   // La función está declarada en jest.js
    const { fromDollarToYen } = require('./jest.js')
    expect(fromDollarToYen(10)).toBe(1490.3);
})

test("Conversión de Yenes a Libras (1 JPY = 0.0072 GBP)", function() {
    
    // La función está declarada en jest.js
    const { fromYenToPound } = require('./jest.js')
    expect(fromYenToPound(1000)).toBe(7.2);
})