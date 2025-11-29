// Ejercicio 26. Crea una función (fibonacci) que genere un array con los primeros 10 números de Fibonacci
// Valores de prueba: N/A
// Salida: [0,1,1,2,3,5,8,13,21,34]

function fibonacci(){
    let salida =[0,1]
    for (let i = 2; i <10; i++) {
        salida[i] = salida[i-1]+salida[i-2]
        
    }
    return salida
}
console.log(fibonacci())