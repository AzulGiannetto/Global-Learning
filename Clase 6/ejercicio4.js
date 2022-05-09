// Teniendo en cuenta la misma conferencia anterior, necesitamos saber si van a haber 
// programadores de cierto lenguaje para poder preparar contenido específico. 
// Por lo tanto, necesitamos una función que nos devuelva “true” o “false” cuando le preguntemos por cierto lenguaje. 

const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];

const languages = (array, language) => {
  if (array.find((item) => item.language === language)) {
    console.log('true')} else {console.log('false')};
};

languages(list, 'Ruby')
