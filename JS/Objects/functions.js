let user = {
    name: "Iván",
    age: 21,
    job: "student",
    languages: {
        native: "spanish",
        otherLanguages: {
            english: "C1",
            germany: "B2"
        }
    }
};

document.write(`<div class="container">My name is ${user.name}, i am ${user.age} years old and I am a ${user.job}.</div>`);


// Adding properties
user.location = "Lugo";

document.write(`<div class="container">My name is ${user.name}, i am ${user.age} years old and I am a ${user.job}. I live in ${user.location}.</div>`);


// Deleting properties
delete user.location;

document.write(`<div class="container">My name is ${user.name}, I am ${user.age} years old and I am a ${user.job}. I live in ${user.location !== undefined ? user.location : "???"}.</div>`);


// hasOwnProperties
document.write(`<div class="container">${user.hasOwnProperty("name")}</div>`);

document.write(`<div class="container">${user.hasOwnProperty("location")}</div>`);


// Constructors
function Song(name, artist, year, album) {
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.album = album;
}

let antesDePerderte = new Song("Antes de perderte OG", "Duki", 2023, "Antes de Ameri");

document.write(`<div class="container">Title: ${antesDePerderte.name}, Artist: ${antesDePerderte.artist}, Year: ${antesDePerderte.year}, Album: ${antesDePerderte.album}</div>`);