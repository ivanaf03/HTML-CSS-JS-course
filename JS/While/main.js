let cnt = 1;
let content = '';

while(cnt <= 100) {
    content += cnt + ' ';
    cnt++;
}

document.write(`<div class="container">${content}</div>`);

cnt = 1;
content = '';

do {
    content += cnt + ' ';
    cnt++;
} while(cnt <= 100);

document.write(`<div class="container">${content}</div>`);