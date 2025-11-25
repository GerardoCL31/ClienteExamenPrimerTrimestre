// Ejercicio 11. Escribe una función (calcularEdad) que reciba una fecha de nacimiento y devuelva la edad actual
// Valores de prueba: "2000-05-15"
// Salida: 25

function calcularEdad(date){
    let salida=2025;

    let parse=parseInt(date)
    salida = 2025-parse
    return salida

}

console.log(calcularEdad("2000-05-15"))


function calcularEdad2(fech){
    let fechaNacimiento= new Date(fech)
    let fechaActual= new Date()

    let edad= fechaActual.getFullYear()- fechaNacimiento.getFullYear()
    
    if(fechaActual.getMonth<fechaActual.getMonth||fechaActual.getDate<fechaNacimiento.getDate){
        edad--
    }
    return edad
}
console.log(calcularEdad2("2000-12-15"))