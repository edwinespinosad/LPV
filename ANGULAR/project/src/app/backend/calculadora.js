'use strict'
console.log('Script de NodeJS');

var parameters = process.argv.slice(2);

var numero1 = parseFloat(parameters[0]);
var numero2 = parseFloat(parameters[1]);

var plantilla = `
    La suma es: ${numero1 + numero2}
    La resta es: ${numero1 - numero2}
    La multiplicación es: ${numero1 * numero2}
    La división es: ${numero1 / numero2}
`;

console.log(plantilla);