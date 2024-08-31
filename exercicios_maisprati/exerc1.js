//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require ("prompt-sync")()

let number = Number(prompt("Digite um número:"))

if (typeof number !== "number" || isNaN(number)){
	console.error("Apenas números.")
} else if (number % 2 === 0){
	console.log("Este número é par!")
} else{
	console.log("Este número é ímpar!")
} 


