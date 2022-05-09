// Pensemos que tenemos que hacer un juego. Y lo primero que necesitamos es que se puedan crear héroes en el juego.
// Haga una función que utilice una clase para crear nuestro objeto “héroe”
// Debe tener las siguientes propiedades y valores.
// hecho

class Hero {
    constructor(position, health, experience, name = "hero") {
        this.name = name;
        this.position = position;
        this.health = health;
        this.damage = 5;
        this.experience = experience;
    }
}

function heroMaker (name, position, health, experience) {
    const hero = new Hero(name, position, health, experience);
    return hero
}

const number1 = heroMaker('00', 100, 0);
number1.name = "SuperHero";
const number2 = heroMaker('01',100, 0);

console.table([number1,number2]);