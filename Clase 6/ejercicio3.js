// Teniendo en cuenta la misma conferencia anterior, necesitamos poder personalizar 
// un mensaje para cada persona que asista al evento la próxima vez. Para eso, 
// nuestra tarea es tener una función que devuelva un array donde cada posición 
// tiene un objeto con una nueva propiedad de nombre “greeting” o “bienvenida”.

const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

const exercise = (arr) => {
  const newL = arr.map((item) => item.language);
  const newFN = arr.map((item) => item.firstName);

  for (let index = 0; index < arr.length; index++) {
    arr[index].greeting = `Hi ${newFN[index]}, what do you like the most about ${newL[index]}?`;}
     return arr
}

console.table(exercise(list));