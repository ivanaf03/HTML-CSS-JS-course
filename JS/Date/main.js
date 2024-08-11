let actualDate = new Date();

document.write(`<div class="container">${actualDate}</div>`);

//date
document.write(`<div class="container">${actualDate.getDate()}</div>`);

//month (0---11)
document.write(`<div class="container">${actualDate.getMonth()+1}</div>`);

//year
document.write(`<div class="container">${actualDate.getFullYear()}</div>`);

//day (0 sunday --- 6 saturday)
document.write(`<div class="container">${actualDate.getDay()}</div>`);

//timestamp
document.write(`<div class="container">${Date.now()}</div>`);


// String to Date
let stringToDate = new Date("2024 01 01");
document.write(`<div class="container">${stringToDate}</div>`);

// Date (y, m, d, h, min, s, ms)
let paramsDate = new Date(2024, 0, 1, 13, 30, 0, 0);
document.write(`<div class="container">${paramsDate}</div>`);

paramsDate.setFullYear(2025);
document.write(`<div class="container">${paramsDate}</div>`);


// Array tip
let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let day = week[actualDate.getDay()];
document.write(`<div class="container">${day}</div>`);


// Format
let hour = new Date();
document.write(`<div class="container">${hour.toLocaleTimeString()}</div>`);