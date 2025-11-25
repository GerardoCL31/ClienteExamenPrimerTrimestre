// Tu código aquí

// Ejercicio 19. Escribe una función (esJSONValido) que reciba un string y determine si es un JSON válido
// Valores de prueba: '{"nombre":"Ana"}', '{"nombre":Ana}'
// Salida: Válido, Inválido

function esJSONValido(str){
    try {
        JSON.parse(str)
        return "Valido"
    } catch (error) {
        return "Invalido"
    }
}
console.log(esJSONValido('{"nombre":"Ana"}'))
console.log(esJSONValido('{"nombre":Ana}'))