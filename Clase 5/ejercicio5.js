// // Hay un arreglo con varios números donde todos son iguales excepto uno. 
// Haga una función que encuentre qué número es el distinto.
// findUniq([1,1,1,1,2,1,1,1]) ==> return (2)

const find = [2, 6, 2, 2, 2, 2]

const findUniq = (arr) => {
    let uniq = arr.find(
        (number) => arr.indexOf(number) === arr.lastIndexOf(number));
    return uniq;
};

console.log(`El numero distinto es ${findUniq(find)}`);
