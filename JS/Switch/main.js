let dayNumber = prompt("Insert week day number:");

switch (dayNumber) {
    case '1':
        document.write('<div class="container">Today is Monday!</div>');
        break;
    case '2':
        document.write('<div class="container">Today is Tuesday!</div>');
        break;
    case '3':
        document.write('<div class="container">Today is Wednesday!</div>');
        break;
    case '4':
        document.write('<div class="container">Today is Thursday!</div>');
        break;
    case '5':
        document.write('<div class="container">Today is Friday!</div>');
        break;
    case '6':
        document.write('<div class="container">Today is Saturday!</div>');
        break;
    case '7':
        document.write('<div class="container">Today is Sunday!</div>');
        break;
    default:
        document.write('<div class="container">Invalid day number! Please enter a number between 1 and 7.</div>');
        break;
}
