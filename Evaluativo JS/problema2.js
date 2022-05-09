// Se necesita crear una función que reciba como parámetro un string y un número ( “Un string de
// ejemplo”, x ). La función deberá devolver un arreglo que contenga todas las palabras del string
// cuya longitud sea mayor al número recibido. Ejemplo:
// “Esta es una cadena de caracteres de prueba”, 4 => [ “cadena”, “caracteres”, “prueba” ]

let messageOne = "Bienvenidos a Global Learning 2022"
let messageTwo = "Este texto pasó la prueba de la función"
let messageThree = "Oh no, ahora el texto tiene comas, cuidado"
let messageFour = "Pera, limón, higo, manzana, durazno, uva, palta, lima, banana"
let messageFive = "¿Un desafío? ...cuidado con los signos!"


function maxLength(array, x) {
    // reemplazo aquellos elementos por un espacio
    let replacedSigns = array.replaceAll(",", " ").replaceAll("...", " ").replaceAll("¿", " ").replaceAll("?", " ").replaceAll("!", " ")
    // a los espacios vacios los asignos como divisores
    let splited = replacedSigns.split(" ").filter(item => item.length > x)
    return splited
}

console.log(maxLength(messageFive, 5))
