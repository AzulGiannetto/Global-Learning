// Se necesita crear una función que reciba como parámetro dos arreglos de números ( array1,
// array2 ). La función deberá eliminar del arreglo 1 todos los números que estén presentes en el
// arreglo 2 ( incluído si el número se repite ), finalmente, deberá devolver un nuevo arreglo con los
// números restantes de la operación . Ejemplo:
// [1, 1, 1, 2, 3, 3, 4, 5] , [1, 4] => [2, 3, 3, 5]

const exercise1 = [1, 1, 1, 2, 3, 3, 4, 5];
const exercise2 = [1, 4];

const problem = (arrayOne, arrayTwo) => {
    // filtro los numeros del arrayOne que sean iguales al arrayTwo
    const elimination = arrayOne.filter((item) => !arrayTwo.includes(item));
    return elimination;
}

console.log(problem(exercise1, exercise2))