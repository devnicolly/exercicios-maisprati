//Implemente um programa que recebe uma nota de 0 a 10 e classifica como"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require ("prompt-sync")()

let grade = Number(prompt("Digite sua nota:"))

if(grade >= 0 && grade <= 10){
	if(grade >= 7){
		console.log("Aprovado")
	} else if(grade < 7 && grade >= 5){
		console.log("Recuperação")
	} else if (grade < 5) {
		console.log("Reprovado")
	}
} else {
	console.error("Nota inválida.")
}