let folders = ["HTML", "CSS", "JS"];

document.write(`<div class="container">${folders}</div>`);


for (let cnt=0; cnt<3; cnt++) {
    document.write(`<div class="container">${folders[cnt]}</div>`);
}


// Adding in the end
folders.push("PHP");

document.write(`<div class="container">${folders}</div>`);

// Removing in the end
folders.pop();

document.write(`<div class="container">${folders}</div>`);


// Adding in the beginning
folders.unshift("PHP");

document.write(`<div class="container">${folders}</div>`);

// Removing in the beginning
folders.shift();

document.write(`<div class="container">${folders}</div>`);


// Matrix
let languages = [
    ["HTML", "CSS", "JS"],
    ["Java", "Python"]
];

document.write(`<div class="container">[${languages[0]}], [${languages[1]}]</div>`)

