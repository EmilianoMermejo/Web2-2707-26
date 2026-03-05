var numero1 = parseFloat(prompt("Ingresa el numero 1:"));
var numero2 = parseFloat(prompt("Ingresa el numero 2:"));

// Operaciones
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero2 !== 0 ? numero1 / numero2 : "No se puede dividir entre 0";

// Mostrar resultados en consola
console.log("La suma de: " + numero1 + " + " + numero2 + " = " + suma);
console.log("La resta de: " + numero1 + " - " + numero2 + " = " + resta);
console.log("La multiplicación de: " + numero1 + " * " + numero2 + " = " + multiplicacion);
console.log("La división de: " + numero1 + " / " + numero2 + " = " + division);