// Ejercicio 25. Haz una función (analizarCalificaciones) que reciba un array de objetos {nombre, cal} y devuelva el promedio 
// y el nombre con mayor calificación
// Valores de prueba: [{nombre:"Ana", cal:8}, {nombre:"Luis", cal:10}, {nombre:"Eva", cal:6}]
// Salida: { promedio: 8, nombreMax: "Luis" }

function analizarCalificaciones(arr) {
   let suma = 0
   let nombreMax=arr[0].cal
   let calMax = arr[0].cal

   for (let i = 0; i < arr.length; i++) {
        suma = suma + arr[i].cal

        if(arr[i].cal>calMax){
            nombreMax=arr[i].nombre
            calMax=arr[i].calMax
        }
    
   }
    let promedio = suma/arr.length
   return{promedio:promedio, nombreMax:nombreMax}

}
console.log(analizarCalificaciones([{ nombre: "Ana", cal: 8 }, { nombre: "Luis", cal: 10 }, { nombre: "Eva", cal: 6 }]))
