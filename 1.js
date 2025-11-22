
// Ejercicio 1. Crea una función (analizarArray) que reciba un array de números y devuelva un objeto con {media, max, min}
// Valores de prueba: [4, 8, 15, 16, 23, 42]
// Salida: { media: 18, max: 42, min: 4 }

/*function analizarArray(arr){
const max = Math.max(...arr)
const min = Math.min(...arr)
let suma = 0
for (let index = 0; index < arr.length; index++) {
    suma= suma+arr[index]   
}
let media=suma/arr.length

return {max, min, media}
}
console.log(analizarArray([4, 8, 15, 16, 23, 42]))*/

function analizarArray(arr){
    let max=Math.max(...arr)
    let min=Math.min(...arr)
    let suma=0
for (let index = 0; index < arr.length; index++) {
    suma = suma + arr[index]
}
media= suma/arr.length


    return{max,min,media}
}
console.log(analizarArray([4, 8, 15, 16, 23, 42]))