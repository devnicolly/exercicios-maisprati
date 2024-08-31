//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require ("prompt-sync")()

let message = prompt("Digite sua mensagem: ")

let option = Number(prompt("Digite uma opção de moldura (1-3): "))

switch(option){
	case 1: 
		console.log("*'..´*:¨*.'*'..´*:¨*.'")
		console.log(message)
		console.log("*'..´*:¨*.'*'..´*:¨*.'")
		break;
	case 2:
		console.log("-:-:-:--:-:-:--:-:-:-")
		console.log(message)
		console.log("-:-:-:--:-:-:--:-:-:-")
		break
	case 3:
		console.log("[[[[[[[[[[]]]]]]]]]]]]")
		console.log(message)
		console.log("[[[[[[[[[[]]]]]]]]]]]]")
		break
}