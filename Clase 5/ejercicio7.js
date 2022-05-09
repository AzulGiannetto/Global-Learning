// Dado un arreglo de números enteros, encuentre el mayor producto posible entre dos números adyacentes
//  y devuelva el valor de dicho producto.
// adjacentElementsProduct([9,5,10,2,24,-1]) ==> return (50)
// 5 * 10 = 50


const bigger = [2, 6, 7, 9, 16, 3];

const adjacentElementsProduct = (value) => {
  let newB = value.map ((number, index, array) => number * array[index + 1])
  
  newB.pop();
  let result = Math.max(...newB);
  return result;
  
}

let max = adjacentElementsProduct(bigger);
console.log(max);