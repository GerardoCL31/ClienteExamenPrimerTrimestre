// Ejercicio 18. Crea una función (filtrarEdad) que reciba un array de objetos {nombre, edad} y devuelva solo los mayores de 22
// Valores de prueba: [{nombre:"Ana", edad:25}, {nombre:"Luis", edad:20}]
// Salida: [{nombre:"Ana", edad:25}]

function filtrarEdad(arr){
    let salida=[]

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].edad>22){
            salida.push(arr[i])
        }
    } 
    return salida
}

console.log(filtrarEdad([{nombre:"Ana", edad:25}, {nombre:"Luis", edad:20}]))