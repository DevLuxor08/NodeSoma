let readlineSync = require('readline-sync')


// VERSION 1
// let n1 = parseFloat(readlineSync.question("Informe o Primeiro numero: "));
// let n2 = parseFloat(readlineSync.question("informe o Segundo numero: "));
// let n3 =parseFloat(readlineSync.question("informe o Terceiro numero: "));
// let n4 = parseFloat(readlineSync.question("informe o Quarto numero: "));
// result = 0;

// console.log("Programa que soma 4 numeros");
// result = n1 + n2 + n3 + n4;
// console.log(`total = ${result}`);


//VERSION 2
// let n = 0;
// let result = 0;

// console.log("Programa que soma 4 numeros");

// n = parseFloat(readlineSync.question("informe o 1 numero: "));
// result += n;
// n = parseFloat(readlineSync.question("informe o 2 numero: "));
// result += n;
// n = parseFloat(readlineSync.question("informe o 3 numero: "));
// result += n;
// n = parseFloat(readlineSync.question("informe o 4 numero: "));
// result += n;
// console.log(`total = ${result}`);


// VERSION 3 - Laço de repetição FOR
// let num = []
// let result = 0;

// for(let i = 0; i <= 10; i++){
//     let input = parseFloat(readlineSync.question(`Informe o ${i+1} numero: `))
//     num.push(input);
//     result += input;
// }
// console.log(result);


// VERSION 4 - Laço de repetição
let n = 1;
let total = 0;

console.log('Programa que soma 10 Numeros');
let i = 0;
while(n != 0){
    n = parseFloat(readlineSync.question(`Informe o numero ${i+1}: `));
    total = total + n;
    i++
}
console.log(`Total = ${total}`);
