/*
    EJ 1
    Cambiar los 1 a 0 y viceversa con el array proporcionado
    Mostrar el resultado del array, antes y despues de la alteracion, de forma horizontal
    ej: 
        Antes:   001010010
        Despues: 110101101
 */


let arrayBinario = [
    1, 0, 0, 1, 0, 1, 1, 1,
    1, 0, 0, 1, 0, 0, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 1,
    1, 0, 0, 1, 1, 1, 1, 0
]

console.log(...arrayBinario);


for(i = 0; i < arrayBinario.length; i++){
   (arrayBinario[i] === 0)? arrayBinario.splice(i, 1, 1) : arrayBinario.splice(i, 1, 0);
}

console.log(...arrayBinario);



/*

if (arrayBinario[i] === 0){
    arrayBinario.splice(i, 1, 1);
} else if (arrayBinario[i] === 1){
    arrayBinario.splice(i, 1, 0);


}

*/