//Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

const quantidade = 10

let n1 = 0
let n2 = 1

console.log("Primeiros 10 números da sequência de Fibonacci:")


for (let i = 0; i < quantidade; i++) {
    console.log(n1) 
    
    let proximo = n1 + n2
    
    n1 = n2
    n2 = proximo
}