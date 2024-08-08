// Arithmetic
console.log(3+5);
console.log(3-5);
console.log(3*5);
console.log(3/5);

console.log(5%3);
console.log(5**3);

let op1 = 3;

console.log(op1++); // print 3 before adding 1
console.log(op1)

console.log(++op1); // print op1 + 1
console.log(op1)


// Asignation
let x = 5;

let y=3;
y += 5;

console.log(`X value = ${x}, Y value = ${y}`);


// Comparation
console.log(2 < 3);
console.log(4 >= 4);

console.log(3 != 8);
console.log(3 == "3"); //true
console.log(3 === "3"); //false


// Logic comparation
console.log(true && false); //false
console.log(true && true); //true

console.log(true || false); //true
console.log(false || false); //false


// Ternary operator
(30 === "30") ? console.log("Yes") : console.log("No");