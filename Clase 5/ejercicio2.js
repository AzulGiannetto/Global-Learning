// Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3. 
// En caso de recibir un arreglo de menos de 5 elementos, mostrar en pantalla un mensaje de error.

const arra = [0, 1, 2, 3, 4, 5, 6]
const secondArra= [0, 1, 2]

const elimination = () => {
    if(arra.length > 5){
        arra.splice(-3, 3); 
        console.log(arra);
      }

    else {
        console.log("Hay un error, el arreglo debe recibir minimamente 5 elementos");
}
return arra.length
}

console.log(`El array tenia ${arra.length} espacios, ahora tiene ${elimination(arra)}`);

