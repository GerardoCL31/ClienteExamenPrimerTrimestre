// Ejercicio 9. Haz una función (generarAleatorios) que genere 5 números aleatorios entre 1 y 100 y los ordene de menor a mayor
// Valores de prueba: N/A
// Salida: [3, 14, 22, 57, 91] (ejemplo)

function generarAleatorios(){
    let salida=[]
    for (let i = 0; i <=4; i++) {
        let num = Math.round(Math.random()*100)
        salida.push(num)
    }
    return salida
}
console.log(generarAleatorios())