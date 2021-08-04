const escola = "Cod3r";

console.log(escola.charAt(4)); // resultado: r
console.log(escola.charAt(5)); // resultado: vazio e não dá erro
console.log(escola.charCodeAt(3)); // codigo relacionado a tabela unicode = 51
console.log(escola.indexOf("d"));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(3, "e"));

console.log("Ana, Maria, Pedro".split(", "));
console.log(escola.toUpperCase());