// Haga una función que elimine el primer elemento del arreglo.

const even = [0, 2, 4, 6];

const theFunction = (even) => {
    let remove = even.shift();
    console.log(even);
    return even.length
}

console.log(`El array tenia ${even.length} espacios, ahora tiene ${theFunction(even)}`);
