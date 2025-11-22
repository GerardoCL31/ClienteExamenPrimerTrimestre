// Ejercicio 5. Crea una función (longitudes) que reciba un array de strings y devuelva un array con la longitud de cada string
// Valores de prueba: ["Hola", "JavaScript", "GPT"]
// Salida: [4, 10, 3]

/*function longitudes(arr) {
    let salida=[]
    
    for (let i= 0; i < arr.length; i++) {
        console.log(salida.push(arr[i].length))
        
    }
    return salida
}
console.log(longitudes(["Hola", "JavaScript", "GPT"]))*/

function longitudes(arr){
    let salida=[]

    for (let i = 0; i< arr.length; i++) {
        salida.push(arr[i].length)
        
    }
    return salida
}
console.log(longitudes(["Hola", "JavaScript", "GPT"]))