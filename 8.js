// Ejercicio 8. Crea una función (dividirArray) que divida los elementos de un array entre un divisor y capture divisiones por cero
// Valores de prueba: [10, 20, 30], divisor = 0
// Salida: Error: División por cero

// Tu código aquí

function dividirArray(arr,div){
    try {
        let resultado=[]
        for (let i = 0; i < arr.length; i++) {
            division=arr[i]/div
            if(!isFinite(division)){
                throw new Error("División por cero");
            }
            resultado.push(division)
            
        }
        return resultado
    } catch (error) {
        return "Error: "+ error.message
    }
}
console.log(dividirArray([10,20,30],0))
console.log(dividirArray([10,20,30],2))