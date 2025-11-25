// Ejercicio 20. Crea una función (arrayUnicoOrdenado) que reciba un array de números, elimine duplicados, los ordene descendente y devuelva un JSON
// Valores de prueba: [4, 2, 7, 4, 9, 2]
// Salida: {"resultado":[9,7,4,2]}

function arrayUnicoOrdenado(arr){
    let salida=[]
    for (let i = 0; i < arr.length; i++) {
        if(!salida.includes(arr[i])){
            salida.push(arr[i])
            
        }
        salida.sort((a,b)=>b-a)

        
    }
    return JSON.stringify({reultado: salida})
}
console.log(arrayUnicoOrdenado([4, 2, 7, 4, 9, 2]))