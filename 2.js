// Ejercicio 2. Escribe una función (contarVocales) que reciba una string y cuente las vocales.
// Valores de prueba: "JavaScript es divertido"
// Salida: 8

/*function contarVocales(str){
    let contador=0
    let vocales="aeiouAEIOU"

    for (let i = 0; i < str.length; i++) {
        if (vocales.includes(str[i])) {
            contador ++
        }
        
    }
    return contador
}
console.log(contarVocales("Hola"))*/

function contarVocales(str){
    contador=0
    vocales = "aeiouAEIOU"
    for (let i = 0; i < str.length; i++) {
        if(vocales.includes(str[i])){
            contador ++
        }
        
    }
    return contador
}
console.log(contarVocales("JavaScript es divertido"))