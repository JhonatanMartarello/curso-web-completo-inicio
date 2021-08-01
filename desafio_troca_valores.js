let a = 7;
let b = 94;

console.log("a: " + a + " b: " + b);

// depois da troca a = 94 e b = 7;

let temp = a;
a = b;
b = temp;

// [a, b] = [b, a]

console.log("a: " + a + " b: " + b);
