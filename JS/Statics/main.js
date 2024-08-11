class Pet {
    static tail = 10;
    static cnt = 0;

    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._cnt = ++Pet.cnt;
    }

    get cnt() {
        return this._cnt;
    }

    static hello() {
        return "Woof!!!!";
    }
}

let pet1 = new Pet("Thor", 6);
let pet2 = new Pet("Hallo", 7);

document.write(`<div class="container">Tail size = ${Pet.tail} cm</div>`);

document.write(`<div class="container">My pet's name is ${pet1._name} and it is ${pet1._age} years old</div>`);

document.write(`<div class="container">Tail size = ${Pet.tail} cm</div>`);


document.write(`<div class="container"> Thor's cnt = ${pet1.cnt}</div>`);

document.write(`<div class="container"> Hallo's cnt = ${pet2.cnt}</div>`);

document.write(`<div class="container"> <b>${Pet.hello()}</b></div>`);



