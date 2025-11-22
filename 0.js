let a = 5
let b = 6

console.log(a+b)



function esAdulto(edad){
    
    let esAdulto = edad>= 18
    
    if(esAdulto===true){
        return edad+" Es adulto"
    }else{
        return edad+" No es adulto"
    }
}

console.log(esAdulto(21))
console.log(esAdulto(17))

switch (a) {
    case 5:
        console.log("es viernes")
        break;

    default:
        break;
}

