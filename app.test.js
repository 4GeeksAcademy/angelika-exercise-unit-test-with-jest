// Importar las funciones del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// Prueba de conversión de yenes a libras
test("One yen should be equivalent to the correct amount of pounds", function() {
    const pounds = fromYenToPound(25.3);
    const expectedPounds = (25.3 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expectedPounds);
});

// Prueba de conversión de euros a dólares
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expectedDollar = 3.5 * 1.07;
    expect(dollars).toBe(expectedDollar);
});

// Prueba de conversión de dólares a yenes
test("One dollar should be equivalent to the correct amount of yenes", function() {
    const yenes = fromDollarToYen(8.6);
    const expectedYenes = (8.6 / 1.07) * 156.5;
    expect(yenes).toBeCloseTo(expectedYenes);
});

// Prueba de conversión de yenes a libras
test("One yen should be equivalent to the correct amount of pounds", function() {
    const pounds = fromYenToPound(25.3);
    const expectedPounds = (25.3 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expectedPounds);
});
