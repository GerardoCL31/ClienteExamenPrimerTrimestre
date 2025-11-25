// Ejercicio 17. Haz una función (ordenarPorEdad) que reciba un array de objetos {nombre, edad} y lo ordene por edad ascendente
// Valores de prueba: [{nombre:"Ana", edad:25}, {nombre:"Luis", edad:20}]
// Salida: [{nombre:"Luis", edad:20}, {nombre:"Ana", edad:25}]

function ordenarPorEdad(arr){
    let salida=[]

    for (let i = 0; i < arr.length; i++) {
        salida.push(arr[i])

        }
        salida.sort((a,b)=>a.edad - b.edad)
        return salida
    }
    console.log(ordenarPorEdad([{nombre:"Luis", edad:20}, {nombre:"Ana", edad:25}]))
