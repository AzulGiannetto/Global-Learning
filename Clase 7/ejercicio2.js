// Ejercicio 2: Teniendo en cuenta la misma conferencia anterior, necesitamos saber quienes son 
// los desarrolladores con mayor edad.

const list = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

const mayor = (arr) => {
  const newA = arr.map((item) => item.age);
  let max = Math.max(...newA);
  const result = arr.filter((item) => item.age === max)
  if (result) {
    return result
  }
}
console.table(mayor(list));