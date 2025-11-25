// Ejercicio 10. Crea una función (raicesCuadradas) que reciba un array de números y devuelva un array con la raíz cuadrada de cada número
// Valores de prueba: [4, 16, 25, 36]
// Salida: [2, 4, 5, 6]

function raicesCuadradas(arr){
    let resultado=[]
    for (let i= 0; i < arr.length; i++) {
        let num=Math.sqrt(arr[i]) // arr[i]**0.5
        resultado.push(num)
    }
    return resultado
}
console.log(raicesCuadradas([4, 16, 25, 36]))