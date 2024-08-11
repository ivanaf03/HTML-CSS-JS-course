class Player {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        this._color = newColor;
    }

    jump(){
        return "Jumping...";
    }

    run(){
        return "Running";
    }

    sayHello(){
        return `Hello, I am ${this._name} and I am ${this._color}.`;
    }
}


let player1 = new Player("p1", "red");
let player2 = new Player("p2", "blue");

document.write(`<div class="container">${player1.sayHello()}</div>`);
document.write(`<div class="container">${player2.sayHello()}</div>`);

player1.name = "p11";
document.write(`<div class="container">${player1.sayHello()}</div>`);



// Subclass
class Pet extends Player {
    constructor(name, color, animal) {
        super(name, color);
        this._animal = animal;
    }

    get animal() {
        return this._animal;
    }

    set animal(animal) {
        this._animal = animal;
    }

    sayHello() {
        return `Hello, I am ${this._name} and I am ${this._color}. I am a ${this._animal}`;
    }
}


let pet1 = new Pet("Toby", "red", "dog");

document.write(`<div class="container">This pet is ${pet1.name} and it is ${pet1.color}. It is a ${pet1.animal}.</div>`);

document.write(`<div class="container">${pet1.sayHello()}</div>`);



