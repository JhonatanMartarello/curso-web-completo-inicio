/* hoisting é quando ocorre o içamento de uma variável. 
 * No exemplo abaixo, "a" foi declarada depois do console.log, porém não ocorre ERRO.
*/

console.log("a =", a); // undefined
var a = 2;
console.log("a = ", a); // 2

// console.log("b = ", b); // ERROR. Não ocorre içamento com LET.
let b = 3;
console.log("b = ", b); // 3
