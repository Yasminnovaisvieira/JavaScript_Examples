/* Exercício 1 */

console.log("EXERCÍCIO 1");
let nomeUsuario = prompt("Digite o seu nome: ");
alert("Olá, " + nomeUsuario + "!");
console.log("Olá, " + nomeUsuario + "!");

console.log("  ");


/* Exercício 2 */

console.log("EXERCÍCIO 2");
let disciplinaFavorita = prompt("Digite a sua disciplina favorita: ");
alert("A matéria " + disciplinaFavorita + " realmente é ótima!");
console.log("A matéria " + disciplinaFavorita + " realmente é ótima!");

console.log(" ");


/* Exercício 3 */

console.log("EXERCÍCIO 3");
let dataHoje = prompt("Digite a data de hoje: ");
alert("A data de hoje segundo o usuário é: " + dataHoje);
console.log("A data de hoje segundo o usuário é: " + dataHoje);

console.log("  ");


/* Exercício 4 */

console.log("EXERCÍCIO 4");
let preparado = prompt("Está preparado para o segundo semestre de Desenvolvimento de Sistemas? ");
alert("A resposta do usuário é: " + preparado);
console.log("A resposta do usuário é: " + preparado);

console.log("  ");


/* Exercício 5 */

console.log("EXERCÍCIO 5");
let numero1 = Number(prompt("Digite o 1º número: "));
let numero2 = Number(prompt("Digite o 2º número: "));
let resultadoSoma = numero1 + numero2;
let resultadoSubtracao = numero1 - numero2;
let resultadoMultiplicacao = numero1 * numero2;
let resultadoDivisao = numero1 / numero2;
// SOMA
alert("O resultado da soma de " + numero1 + " com " + numero2 + " é igual a: " + resultadoSoma);
console.log("O resultado da soma de " + numero1 + " com " + numero2 + " é igual a: " + resultadoSoma);

//SUBTRAÇÃO
alert("O resultado da subtração de " + numero1 + " com " + numero2 + " é igual a: " + resultadoSubtracao);
console.log("O resultado da subtração de " + numero1 + " com " + numero2 + " é igual a: " + resultadoSubtracao);

//MULTIPLICAÇÃO
alert("O resultado da multiplicação de " + numero1 + " com " + numero2 + " é igual a: " + resultadoMultiplicacao);
console.log("O resultado da multiplicação de " + numero1 + " com " + numero2 + " é igual a: " + resultadoMultiplicacao);

//DIVISÃO
alert("O resultado da divisão de " + numero1 + " com " + numero2 + " é igual a: " + resultadoDivisao);
console.log("O resultado da divisão de " + numero1 + " com " + numero2 + " é igual a: " + resultadoDivisao);

console.log("  ");


/* Exercício 6 */

console.log("EXERCÍCIO 6");
let prova1 = Number(prompt("Digite a nota da 1ª prova: "));
let prova2 = Number(prompt("Digite a nota da 2ª prova: "));
let prova3 = Number(prompt("Digite a nota da 3ª prova: "));
let mediaProvas = (prova1 + prova2 + prova3) / 3;
alert("A média das provas é igual a: " + mediaProvas);
console.log("A média das provas é igual a: " + mediaProvas);

console.log("  ");


/* Exercício 7 */

console.log("EXERCÍCIO 7");
let larguraParede = Number(prompt("Digite a largura da parede: "));
let alturaParede = Number(prompt("Digite a altura da parede: "));
let litrosNecessarios = (larguraParede * alturaParede) / 2;
alert("Serão necessários " + litrosNecessarios + " de tinta para pintar a parede.");
console.log("Serão necessários " + litrosNecessarios + " de tinta para pintar a parede.");