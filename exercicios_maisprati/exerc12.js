//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require ("prompt-sync")()

let num = Number(prompt("Digite a tabuada que deseja visualizar (1-10): "))

if(num > 10){
	console.error("Digite um número entre 1 e 10!")
} else {
	for(let i = 1; i <= 10; i++){
	console.log(num + " x " + i + " = " + (num * i))
}
}



