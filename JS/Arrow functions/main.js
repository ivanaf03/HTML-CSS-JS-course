function sayHello(name) {
    return "Hello " + name;
}

// Anonymous function
let bye = function(name) {
    return "Bye " + name;
}

// Arrow function
let sayHello2 = (name) => {
    return "Hello " + name;
} // let sayHello2 = name => "Hello " + name;

let sum = (a,b) => a + b;

// Objects inside '(' ')'
let obj = () => ({name: "Iván", age: 21});

document.write(`<div class="container">Example: ${sayHello2("Iván")}</div>`);
