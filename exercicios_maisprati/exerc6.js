//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidosformam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

const prompt = require ("prompt-sync")()

let ladoA = Number(prompt("Digite o valor do primeiro lado:"))
let ladoB = Number(prompt("Digite o valor do segundo lado:"))
let ladoC = Number(prompt("Digite o valor do terceiro lado:"))

if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB) === true){
	if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
		console.log("Este é um triângulo isósceles!")
	} else if(ladoA !== ladoB && ladoB !== ladoC){
		console.log("Este triângulo é escaleno!")
	} else if(ladoA === ladoB && ladoB === ladoC){
		console.log("Este triângulo é equilátero!")
	} 
} else {
	console.log("Este triângulo é inválido!")
}