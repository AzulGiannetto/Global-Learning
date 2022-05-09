// Se necesita crear una función que reciba como parámetro un array de 3 números ( [ x, y, z ]  ). La
// función deberá identificar la posición en el array de aquel número cuyo valor esté entre los otros
// dos. Ejemplo:
// [3, 8, 5]  => 5 está entre 3 y 8, entonces la función debe devolver y mostrar en pantalla la
// posición “2”.


const find = [3, 8, 5];
const middlePosition = (arr) => {
  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);
  // una vez establecido el mayor y menor, solo me queda encontrar la posicion del mediano
  position = arr.findIndex((item) => item < maximum && item > minimum);
  return position;
};
console.log(middlePosition(find));
