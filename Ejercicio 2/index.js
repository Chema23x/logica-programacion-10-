//Crear un programa en Javascript que realice lo siguiente:

/*Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
45.
Grados Kelvin: 318.15
Grados Fahrenheit: 113. 
 14.
Grados Kelvin: 287.15
Grados Fahrenheit: 57.2. 
Entrada: 
Salida
Entrada:
Salida
Pruébalo con los valores numéricos que se te ocurran.*/

let  input = prompt("Coloque la temperatura en grados Celcius");
let celcius;

while(true){
if (celcius = parseFloat(input)){
    alert("Perfect, check the console to see the result")
    console.log(`La temperatura en grados celcius es de: ${celcius}`);
    let aFarenheit = (celcius * (9/5) + 32);
        console.log(`La tempertatura en grados Farenheit es de: ${aFarenheit}`);

    let aKelvin = (celcius + 273.15);
        console.log(`La tempertatura en grados Kelvin es de: ${aKelvin}`);
    break;
    
} else{
    input = prompt("Incorrect answer, try again")
}
}