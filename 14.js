

// Ejercicio 14. Crea una función (dosDecimales) que reciba un número y lo devuelva con 2 cifras decimales
// Valores de prueba: 12.3456
// Salida: 12.35

function dosDecimales(num){
    salida = num.toFixed(2);
    return salida
}
console.log(dosDecimales(12.3456))