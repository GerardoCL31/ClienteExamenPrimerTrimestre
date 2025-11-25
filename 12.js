// Ejercicio 12. Crea una función (diaSemana) que reciba una fecha y devuelva el día de la semana correspondiente
// Valores de prueba: "2025-11-20"
// Salida: Jueves

function diaSemana(fech){
    let fechas=["Domigo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

    let d = new Date(fech)
    let day = d.getDay()

    return fechas[day]
}
console.log(diaSemana(2025-11-20))