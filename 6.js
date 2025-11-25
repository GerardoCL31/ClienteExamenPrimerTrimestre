// Ejercicio 6. Haz una función (modificarX) que demuestre el scope de variables globales y locales
// Valores de prueba: x = 10 (global), dentro de la función x = 20
// Salida:
// Dentro de la función: 20
// Fuera de la función: 10

let x = 10

function modificarX(){
let x = 20
return "Dentro de la función "+x
}
console.log(modificarX())
console.log("Fuera de la función "+ x)