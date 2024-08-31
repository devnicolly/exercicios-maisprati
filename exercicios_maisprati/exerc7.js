//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require ("prompt-sync")()

let macas = Number(prompt("Quantas maçãs deseja comprar? "))
let total = 0

if(macas < 12){
	total = macas * 0.30
	console.log(`O valor total da compra é igual a R$ ${total}`)
} else if (macas >= 12){
	total = macas * 0.25
	console.log(`O valor total da compra é igual a R$ ${total}`)
}