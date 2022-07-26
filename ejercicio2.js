/*
    Generar un array que contenga todo
    el abecedario
    Mostrar el resultado del array de forma horizontal
    Ej:
        a,b,c,d,...,z
*/

//   String.fromCharCode(65, 66, 67);   // returns "ABC"

let abecedario = [];

for(i = 0; i < 26; i++){
    abecedario.push(String.fromCharCode(i + 97))
}

console.log(...abecedario);