/*
    Con los 2 arrays proporcionados crear otro que contenga la sumatoria, resta, 
    multiplicacion y division de sus elementos en el orden mencionado
    
    Mostrar el resultado de todos los arrays al final de forma horizontal
    
    ej:
    
    1, 2,3,4,5, 6, 7, 8
    4, 3,2,1,0,-1,-2,-3
    5,-1,6,4,5, 7,-14,-2.6666666666666665
*/

let arr1  = [4,4.4,2,1,3,23,-23,-2,0]

let arr2 = [17,3,-3,0.3,-1.02,55,333,-10000,1]

let arr3 = [arr1[0] + arr2[0], arr1[1] - arr2[1], arr1[2] * arr2[2], arr1[3] / arr2[3], arr1[4] + arr2[4], arr1[5] - arr2[5], arr1[6] * arr2[6], arr1[7] / arr2[7]]



console.log(...arr1);

console.log(...arr2);

console.log(...arr3);