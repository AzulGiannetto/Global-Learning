// Hubo una conferencia de programación hace poco y necesitamos saber quienes fueron las personas 
// que estuvieron en el evento.
// Sabemos que la información está guardada en un array de objetos.
// Necesitamos saber cuántas personas de “Europa” asistieron. Haga una función para devolver dicho valor.

const list = [
  { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
];

  class Conference {
    constructor(firstName, country, continent, age, language){
      this.firstName = firstName;
      this,country = country;
      this.continent = continent;
      this.age = age;
      this.language = language;
    }
  
}

const howMany = (array) => {
  return array.filter((propiedad) => propiedad.continent === "Europe");
}
console.log(list[0].continent);
console.table(howMany(list));
