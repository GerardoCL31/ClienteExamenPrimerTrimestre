// Ejercicio 13. Haz una función (palabraMasLarga) que reciba un string y devuelva la palabra más larga
// Valores de prueba: "El conocimiento es poder"
// Salida: conocimiento

function palabraMasLarga(str){
    let palabras=str.split(" ")
    let masLarga=""

    for (let i = 0; i < palabras.length; i++) {
        if(palabras[i].length>masLarga.length){
            masLarga=palabras[i]
        }
        
    }
    return masLarga
}
console.log(palabraMasLarga("El conocimiento es poder"))