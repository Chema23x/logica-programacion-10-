/*
 * Crear un programa en Java que realice lo siguiente:
eduardo
odraude
Debe solicitar al usuario por consola una palabra o frase.
Debe mostrar por consola el texto escrito al revés.
Entrada: 
Salida: 
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link.
Sugerencias:

Puedes escribir tu código directamente en tu clase Main.
Para ayudarte puedes desarrollar un algoritmo y el pseudocódigo.
 */

let fraseUsuario = prompt("Dame una palabra o frase");

function invertirPalabra(fraseUsuario) {
    // Divide la palabra en un array de caracteres, invierte el array y luego lo une de nuevo en una cadena
    return fraseUsuario.split('').reverse().join('');
}

let fraseInvertida = invertirPalabra(fraseUsuario);
console.log(`Palabra o frase original: ${fraseUsuario}`);
console.log(`Palabra o frase invertida: ${fraseInvertida}`);