// Dado un arreglo de números enteros, encuentre y devuelva el valor de la menor suma posible entre ellos.
// minSum([7,4,2,3]) ==> return (5)

const arra = [2, 5, 18, 9];

const minSum = (arra) => {
  let min1 = Math.min(...arra);
  let elimination = arra.indexOf(min1);
  arra.splice(elimination, 1);
  let min2 = Math.min(...arra);
  let sum = min1 + min2
  return sum
}

console.log(minSum(arra))

