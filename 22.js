// Ejercicio 22. Crea una función (edadesDesdeFechas) que reciba un array de fechas y devuelva un array con las edades correspondientes
// Valores de prueba: ["2000-01-01", "2010-06-15"]
// Salida: [25, 15]

function edadesDesdeFechas(arr){
    let salida=[]
    for (let i = 0; i< arr.length; i++) {
        let anio=parseInt(arr[i])
        anio=2025-anio
        salida.push(anio)
        
    }
    return salida
}
console.log(edadesDesdeFechas(["2000-01-01", "2010-06-15"]))