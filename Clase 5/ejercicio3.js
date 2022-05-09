// Haga una función que reciba un arreglo y un número. 
// Tenemos que sumarle dicho número a cada elemento del arreglo y devolver el arreglo modificado.

let array = [3, 5, 7]


// function h (value1, value2) {
//     const numbers = value1.map((number) => console.log(number + value2));
//     return numbers;
// }

function h (value1, value2) {
    value1.forEach ((number) => console.log (number + value2));
    return value1;
}

h (array, 3);
console.log(array)

