//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require ("prompt-sync")()

let valor1 = Number(prompt("Escreva o primeiro valor: "))
let valor2 = Number(prompt("Escreva o segundo valor: "))

if(valor1 === valor2){
	console.error("Erro! Digite valores diferentes!")
} else if (valor1 > valor2){
	console.log(valor2 + "," + valor1)
} else {
	console.log(valor1 + "," + valor2)
}