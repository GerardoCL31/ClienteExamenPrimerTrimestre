// Ejercicio 3. Haz una función (esPrimo) para determina si un número es primo
// Valores de prueba: 29
// Salida: 29 es primo


/*function esPrimo(num){
    let contador=0
    for (let i = 1; i <=num; i++) {
        if (num % i === 0) {
            contador++
        }
        
    }
    if(contador===2){
        return num+" Es primo"
    }else{
        return num+ " No es primo"
    }
}
console.log(esPrimo(29))*/

function esPrimo(num){
    let contador=0
    for (let i = 1; i <=num; i++) {
        if (num % i === 0) {
            contador ++
        }
        
    }
    if (contador === 2) {
        return num+" Es primo"
    }else{
        return num+" No es primo"
    }
}
console.log(esPrimo(29))