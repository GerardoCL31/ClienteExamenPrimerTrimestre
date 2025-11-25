// Tu código aquí

// Ejercicio 16. Crea una función (sumaArray) que reciba un array de números y devuelva la suma de sus elementos
// Valores de prueba: [5,10,15]
// Salida: 30

function sumaArray(arr){
    let salida=0
    for (let i = 0; i < arr.length; i++) {
        salida=salida+arr[i]
    }
    return salida
}
console.log(sumaArray([5,10,15]))