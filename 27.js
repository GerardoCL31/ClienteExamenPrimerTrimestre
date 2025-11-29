//Ejercicio 27. Crea una función (agregarAlFinal) que reciba un array y un valor, y agregue el valor al final.
// Valores de prueba: [1,2,3], 4
// Salida: [1,2,3,4]

function agregarAlFinal(arr,y){


arr.push(y)
return arr
}

console.log(agregarAlFinal([1,2,3],4))