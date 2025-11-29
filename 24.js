// Ejercicio 24. Crea una función (invertirPalabras) que reciba un string y devuelva otro con las palabras en orden inverso
// Valores de prueba: "JavaScript es divertido"
// Salida: "divertido es JavaScript"

function invertirPalabras(str){
    const palabras=str.split(" ")
    let salida=""
for (let i = palabras.length - 1; i>=0; i--) {
    salida = salida + palabras[i]
    if (i!==0) {
        salida=salida+" "
    }
    
}
return salida

}
console.log(invertirPalabras("JavaScript es divertido"))