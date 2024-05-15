// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expectedDollar = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expectedDollar);})

test("One dollar should be 155.39 yenes", function() {
    const { fromDollarToYen } = require('./app.js');

    const yenes = fromDollarToYen(8.6);

    const expectedYenes = 8.6 * 155.39;

    expect(yenes).toBe(expectedYenes);})

test("One yen should be 0.0051 pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(25.3);

    const expected = 25.3 * 0.0051;

    expect(pounds).toBe(expected);})