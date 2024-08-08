let hour = prompt("What time is it?");

if(hour>=6 && hour<=12) {
    document.write("<div class=time>Buenos días!</div>")
} else if(hour>12 && hour <=20) {
    document.write("<div class=time>Buenas tardes!</div>")
} else if(hour>20 && hour<=24 || hour>=0 && hour<6) {
    document.write("<div class=time>Buenas noches!</div>")
} else {
    alert("ERROR!⚠️");
}