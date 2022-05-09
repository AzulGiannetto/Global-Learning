// Ejercicio 1: Teniendo en cuenta la misma conferencia de la clase pasada, necesitamos saber si 
// todas las personas registradas trabajan con el mismo lenguaje. Es decir, necesitamos que nuestra 
// función devuelva True si todos los lenguajes son iguales, o que nos devuelva False si hay por lo
// menos uno que sea distinto

const list = [
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];


const languages = (array) => {
  let first = list[0].language
  let second = list[1].language
  let third = list[2].language
  first === second && third ? console.log('son iguales') : console.log('todos los lenguajes no son iguales')
};

languages(list)
