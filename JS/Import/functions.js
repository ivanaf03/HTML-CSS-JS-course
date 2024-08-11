const PI = 3.14;

export function circleArea(radio) {
    return PI*radio**2;
}

// Only one default per document
export default function squareArea(l) {
    return l**2;
}