
// Haga una función que reciba un número y devuelva un arreglo que tenga el tamaño del número recibido.
// El contenido del arreglo deben ser números desde el 1 hasta el número recibido. (1 a n)


let num1 = 7;

const giveBack = (number) => {
  const array = [];
  for(let a = 0; a < number; a++) {
    array.push(a+1);
  }
  return array;
}

console.log(giveBack(num1))

