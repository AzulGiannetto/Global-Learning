// Teniendo en cuenta la misma conferencia anterior, necesitamos saber el nombre y país de el primer 
// desarrollador de cierto lenguaje que se haya inscripto.

const list = [
    { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
  ];

  const languages = (array, language) => {
    const arr = array.find((item) => item.language === language) 
    if (arr) {
      console.log(`${arr.firstName} from ${arr.country} was the first ${language} developer in the conference`)
    } else {console.log(`there are no ${language} developers in the conference`)};
  };
languages(list, 'Python');

