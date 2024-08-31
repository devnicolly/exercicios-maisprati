//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require ("prompt-sync")()

let numFatorial = Number(prompt("Digite o número que deseja calcular o fatorial: "))
let fatorial = 1


for (let i = 1; i <= numFatorial; i++){
	fatorial *= i
}

 console.log(`O fatorial do número ${numFatorial} é igual a: ${fatorial}`)