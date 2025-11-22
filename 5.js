// Ejercicio 4. Dado un número de 3 dígitos, escribe una función (invertirNumero) para invertir sus cifras
// Valores de prueba: 123
// Salida: 321

/*function invertirNumero(num) {
    let salida=[]
    let str = num.toString();

    for (let i =str.length -1; i>=0; i--) {
        salida.push(str[i])
        
    }
    let salidaStr=salida.join("")
    return salidaStr

}
console.log(invertirNumero(123))*/

function invertirNumero(num){
    let arrayprovisional=[]
    let arr=num.toString()

    for (let i = arr.length - 1; i>=0; i--) {
        arrayprovisional.push(arr[i])
    }
    let stringFinal=Number(arrayprovisional.join(""))
    console.log(typeof(stringFinal))
    return stringFinal
    
}
console.log(invertirNumero(123))

