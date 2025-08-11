let nomes = ["Yasmin", "Julya", "Layslla", "Letícia"];
let texto1 = "Nós nos chamamos ";


// FOR

for (let i = 0; i < nomes.length; i++) {
texto1 += nomes [i] + ", ";
}

console.log(texto1);


// WHILE

let texto2 = "Nós nos chamamos ";

let i = 0;

while (i < nomes.length) {
	if (i == nomes.length - 1){
		texto2 += "and " + nomes[i] + ".";
	}
	else {
		texto2 += nomes[i] + ", ";
	}
	
	i++;
}

console.log(texto2);


// DO WHILE

let texto3 = "Nós nos chamamos ";

do {
	if (i == nomes.length - 1){
		texto3 += "and " + nomes[i] + ".";
	}
	else {
		texto3 += nomes[i] + ", ";
	}
	
	i++;
}
while (i < nomes.length);

console.log(texto3);


// FUNÇÃO

function saudacao() {
    alert("Olá! Seja bem vindo(a)!!");
}

saudacao();


// FUNÇÃO ANÔNIMA

const subtrair = function(num1, num2) {
	return num1 - num2;
}

alert(subtrair(10 - 5));



let saudacaoUsuario = function() {
	console.log("Olá, usuário!!");
}

saudacaoUsuario();