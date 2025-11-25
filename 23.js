// Ejercicio 23. Haz una función (juegoAdivinanza) que genere un número aleatorio y permita adivinar hasta acertar, devolviendo número de intentos
// Valores de prueba: Número generado: 7, secuencia de intentos: 3,5,7
// Salida: ¡Correcto! Número de intentos: 3

function juegoAdivinanza(arr) {
    let numSecreto = Math.round(Math.random() * 10)
    let intentos = 0

    for (let i = 0; i < arr.length; i++) {
        intentos++
        if (arr[i] == numSecreto) {
            return "Correcto, has acertado el Numero secreto: "+numSecreto + "| intentos: " + intentos + "| Tu numero: "+ arr[i]
        }

    }
    return "No has acertado, intentos: " + intentos
}
console.log(juegoAdivinanza([4, 5, 6, 7]))
