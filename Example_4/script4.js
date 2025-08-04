console.log ("Yasmin Novais Vieira - Teste 1");

var yasmin = 1000;
let layslla = 10
let julya = 0;
const leticia = 100;

console.log ("Yasmin vale: ", yasmin);
console.log ("Letícia vale: ", leticia);
console.log ("Layslla vale: ", layslla);
console.log ("Julya vale: ", julya);

alert("Yasmin Ganhou!");

let nome = prompt("Digite o seu nome completo: ");
console.log ("Nome completo: ", nome)

senai = confirm("Estamos no SENAI!!");
console.log ("Realmente estamos no SENAI: ", senai);

/* RELACIONAIS */
let num1 = 3;
let num2 = "3";

console.log(num1 === num2);

/* ARRAYS */
let array = ["Yasmin", "Julya", "Layslla", "Letícia"]
console.log(array[0]);

/* OBJETOS */
let objetos = {nome: "Yasmin", idade: 20};
console.log(objetos);
console.log(objetos.nome); // Para de aparecer em formato objeto para mostrar, em formato comum, a informação desejada.

let nomeString = "Yasmin";
console.log(nome[0]);
console.log(nomeString.charAt(6)) // Função para encontrar a letra da posição desejada.

/* RELACIONAIS - ALFABETO */
let letra1 = "C";
let letra2 = "B";
let letra3 = 25;
console.log(letra1 > letra2) //Java Script vê como se o Z fosse o "maior" do alfabeto.

/* TIPO DA VARIÁVEL */
console.log(typeof(letra1));
console.log(typeof(letra3.toString())); // Transformar em String.
console.log(array.toString());
console.log(array.length()); // Tamanho.
console.log(nome.slice(3)); // Será mostrada da posição para frente.
console.log(nome.slice(3,5)); // Será mostrada da posição inicial até a posição final.
console.log(nome.toLocaleLowerCase); // Mostrar tudo em minúsculo.
console.log(nome.toLocaleUpperCase); // Mostrar tudo em maiúsculo.
console.log(nome.replace("min", "men")); // Troca um pelo outro.

let lista = "Yasmin Julya Layslla Letícia";
console.log(lista);
lista = lista.split(","); // Separa em um array, separando pelos espaços.
console.log(lista);
lista = lista.join(" "); // Transforma novamente em uma lista.
console.log(lista);

array.push("Solange"); // Adicionou esse nome no final da lista.
console.log(array);

array.unshift("Sandra"); // Adicionou esse nome no início da lista.
console.log(array);

array.pop(); // Tira do final da lista.
console.log(lista);

array.shift(); // Tira do início da lista.
console.log(lista);

/* CONDICIONAIS */
// && = AND
// || = OR
// ! = NOT

if ((3 > 4) && (5 > 6)){
    console.log("É maior!");
} 
else if ((3 == 4) && (5 == 6)){
    console.log("É igual!");
}
else {
    console.log("É menor!");
}

let cor = prompt("Digite uma cor: ");

switch (cor){
    case "Roxo":
        console.log("A cor escolhida é: " + cor);
        break;
    case "Rosa":
        console.log("A cor escolhida é: " + cor);
        break;
    case "Azul":
        console.log("A cor escolhida é: " + cor);
        break;
    case "Vermelho":
        console.log("A cor escolhida é: " + cor);
        break;
    default: // Como se fosse um ELSE
        console.log("Digite uma cor!");
        break;
}

let idade = prompt("Digite a sua idade: ");
let maiorIdade = idade > 18 ? "É maior de idade!" : "Não é maior de idade!";
console.log(maiorIdade);