// Ejercicio 21. Escribe una función (contarPalabras) que reciba un array de strings y devuelva un objeto con la cantidad de ocurrencias de cada palabra
// Valores de prueba: ["JavaScript","es","JavaScript","divertido"]
// Salida: {JavaScript:2, es:1, divertido:1}

function contarPalabras(arr){
    let salida={}

    for (let i = 0; i < arr.length; i++) {
        let palabra=arr[i]
        
        if(salida[palabra]){
            salida[palabra]++
        }else{
            salida[palabra]=1
        }
    }
    return salida
}
console.log(contarPalabras(["JavaScript","es","JavaScript","divertido"]))