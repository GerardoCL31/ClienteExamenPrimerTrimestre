 //Ejercicio 7. Escribe una función (convertirANumero) que convierta un string a número y devuelva un error si no es posible
// Valores de prueba: "123", "abc"
// Salida: 123, Error: No es un número válido

function convertirANumero(str){
try {
    let num= parseInt(str)
    if(isNaN(num)){
        throw new Error("No es un número válido")
    }
    return num+" "+typeof(num)
} catch (error) {
    return "Eror: "+ error.message
}
}
console.log(convertirANumero("123"))
console.log(convertirANumero("abc"))
