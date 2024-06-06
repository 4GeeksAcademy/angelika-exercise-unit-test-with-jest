let oneEuroIs = {
    "JPY": 156.5, // Yen 
    "USD": 1.07,  // Dólar
    "GBP": 0.87,  // Libra
}

// Convertir de euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

// Convertir de dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar / oneEuroIs.USD) * oneEuroIs.JPY;
    return valueInYen;
}

// Convertir de yenes a libras
const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7, 3))

// Exporta las funciones para usarla en otros archivos
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
