//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética  desses números.

const prompt = require ("prompt-sync")()
let i = 0
let soma = 0
let media = 0
let numb

do {
	numb = Number(prompt(`Digite o ${i + 1}º número: (Digite 0 para sair.) `))

	if (numb !== 0){
		soma += numb
		i++
	}	
} while (numb !== 0)


if (i > 0){
	media = soma / i
	console.log(`A média desses números é igual a: ${media}`)
} else {
	console.error("Nenhum numéro válido foi digitado.")
}
