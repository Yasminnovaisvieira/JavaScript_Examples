/* Exercício 1 */

alert("Verificando se um número é ÍMPAR ou PAR, e se ele é múltiplo de 3 ou de 5.");
let numero = Number(prompt("Digite um número: "));

if (isNaN(numero)) { /* Verifica se o que foi colocado é um isNaN */
    alert("Você digitou um valor inválido! Tente novamente.");
}
else {
    if (numero % 2 == 0) {
        alert(numero + " é um número PAR!");
    }
    else {
        if (numero % 3 == 0) {
            alert(numero + " é um número ÍMPAR e múltiplo de 3!");
        }
        else if (numero % 5 == 0) {
            alert(numero + " é um número ÍMPAR e múltiplo de 5!");
        }
        else {
            alert(numero + " é um número ÍMPAR, porém não é múltiplo de 3 e nem 5!");
        }
    }
}


/* Exercício 2 */

alert("Verificando entre 3 números qual é o maior.");

let num1 = Number(prompt("Digite o 1º número: "));
let num2 = Number(prompt("Digite o 2º número: "));
let num3 = Number(prompt("Digite o 3º número: "));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Um dos valores digitados não é número! Tente novamente.")
}
else {
    if (num1 === num2 && num2 === num3) {
        alert("Os números digitados são IGUAIS!");
    } 
    else if (num1 >= num2 && num1 >= num3) {
        alert(num1 + " é o maior número!");
    } 
    else if (num2 >= num1 && num2 >= num3) {
        alert(num2 + " é o maior número!");
    } 
    else {
        alert(num3 + " é o maior número!");
    }
}


/* Exercício 3 */

alert("Classificação etária conforme sua idade.");
let idade = prompt("Digite a sua idade: ");

if (isNaN(idade)) {
    alert("A idade inserida é inválida! Tente novamente.");
}
else {
    if (idade < 2) {
        alert("Com " + idade + " anos, você é classificado(a) BEBÊ!");
    }
    else if (idade < 13) {
        alert("Com " + idade + " anos, você é classificado(a) CRIANÇA!");
    }
    else if (idade < 18) {
        alert("Com " + idade + " anos, você é classificado(a) ADOLESCENTE!");
    }
    else if (idade < 60) {
        alert("Com " + idade + " anos, você é classificado(a) ADULTO(A)!");
    }
    else if (idade >= 60) {
        alert("Com " + idade + " anos, você é classificado(a) IDOSO(A)!");
    }
}


/* Exercício 4 */

alert("Conversor de Unidades (Celsius e Fahrenheit).");

let escolha = Number(prompt("ESCOLHA ENTRE AS OPÇÕES:\n\n1 - Converter de Celsius para Fahrenheit\n2 - Fahrenheit para Celsius"));

if (isNaN(escolha)) {
    alert("Valor inválido! Tente novamente.");
}
else {
    if (escolha == 1) {
        let temperaturaCelsius = Number(prompt("Digite a temperatura em Celsius(ºC): "));
        let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
        alert("A temperatura " + temperaturaCelsius + "ºC é equivalente a " + temperaturaFahrenheit + "ºF.");
    }
    else {
        let temperaturaFahrenheit = Number(prompt("Digite a temperatura em Fahrenheit(ºF): "));
        let temperaturaCelsius = (fahrenheit - 32) * 5 / 9;
        alert("A temperatura " + temperaturaFahrenheit + "ºF é equivalente a " + temperaturaCelsius + "ºC.");
    }
}


/* Exercício 5 */

alert("Verificando multa conforme a velocidade do carro.");
let velocidade = Number(prompt("Digite em Km/h a velocidade do carro: "));

if (isNaN(velocidade)) {
    alert("Valor digitado é inválido! Tente novamente.");
}
else {
    if (velocidade > 80) {
        let kmAcima = velocidade - 80;
        let valorMulta = kmAcima * 5;
        alert("Você foi multado! O valor da multa é de: " + valorMulta);
    }
}


/* Exercício 6 */

alert("Calculando o preço da passagem conforme os Km.");
let km = Number(prompt("Digite os Kms que serão percorridos durante a viagem: "));

if (isNaN(km)) {
    alert("Valor informado é inválido! Tente novamente");
}
else {
    if (km <= 200) {
        let precoPassagem = km * 0.50;
        alert("O preço da passagem para essa viagem é R$ " + precoPassagem + " reais.");
    }
    else {
        let precoPassagem = km * 0.45;
        alert("O preço da passagem para essa viagem é R$ " + precoPassagem + " reais.");
    }
}


/* Exercício 7 */

alert("Calculando a idade conforme o ano de nascimento e verificando se está elegível a voto.");
let anoNascimento = Number(prompt("Digite o seu ano de nascimento: "));

if (isNaN(anoNascimento)) {
    alert("Valor informado é inválido! Tente novamente.");
}
else {
    conversaoIdade = 2025 - anoNascimento;

    if (conversaoIdade >= 18) {
        alert("Você com " + conversaoIdade + " está com obrigatoriedade para voto!");
    }
    else if (conversaoIdade >= 16) {
        alert("Você com " + conversaoIdade + " está elegível a voto!");
    }
    else {
        alert("Você com " + conversaoIdade + " não está elegível a voto!");
    }
}


/* Exercício 8 */

alert("Verificando se um ano é bissexto.");
let ano = Number(prompt("Digite um ano: "));

if (isNaN(ano)) {
    alert("Valor informado não é válido! Tente novamente.");
}
else {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        alert(ano + " é um ano BISSEXTO!");
    } 
    else {
        alert(ano + " NÃO é um ano bissexto!");
    }
}


/* Exercício 9 */

alert("Verificando se há alistamento militar.");

let sexo = Number(prompt("Informe o número que representa seu sexo:\n\n1 - Feminino\n2 - Masculino\n"));

if (isNaN(sexo)) {
    alert("Valor informado é inválido! Tente novamente.");
}
else {
    if (sexo == 1){
        alert("Você não tem a obrigatoriedade de realizar alistamento militar!");
    }
    else {
        let idadeRapaz = Number(prompt("Digite a sua idade: "));

        if (isNaN(idadeRapaz)) {
            alert("A idade informada é inválida! Tente novamente.");
        }
        else {
            if (idadeRapaz < 18) {
                let anosFaltantes = 18 - idadeRapaz;
                alert("Faltam " + anosFaltantes + " anos para que você tenha a obrigatoriedade de realizar alistamento militar!");
            }
            else if (idadeRapaz == 18) {
                alert("Você a obrigatoriedade de realizar o alistamento militar!");
            }
            else {
                let anosApos = idadeRapaz - 18;
                alert("Já passaram " + anosApos + " anos desde o seu alistamento militar!");
            }
        }
    }
}


/* Exercício 10 */

alert("Calculando a duração em horas de um jogo de Xadrez.");
let dias = Number(prompt("Digite quantos dias o jogo durou (mínimo 0):"));
let inicio = Number(prompt("Digite a hora de início do jogo (0 a 23):"));
let fim = Number(prompt("Digite a hora de fim do jogo (0 a 23):"));

if (isNaN(inicio) || isNaN(fim)) {
    alert("Pelo menos um dos valores informados é inválido! Tente novamente.");
}
else {
    let duracao = (dias * 24) + (fim - inicio);

    if (fim <= inicio) {
        duracao += 24;
    }

    alert("A duração total do jogo foi de " + duracao + " hora(s)!");
}


/* Exercício 11 */

alert("Calculando horas de trabalho extras.");
let horasTrabalhadasMes = Number(prompt("Digite as horas trabalhadas durante o mês: "));
let salarioHora = parseFloat(prompt("Digite o seu salário por hora:"));

if (isNaN(horasTrabalhadasMes) || isNaN(salarioHora) || horasTrabalhadasMes <= 0 || salarioHora <= 0) {
    alert("Pelo menos um dos valores informados é inválido! Tente novamente.");
}
else {
    let cargaMensal = 40 * 4;
    let horasExtras = horasTrabalhadasMes - cargaMensal;

    if (horasExtras < 0) {
        horasExtras = 0;
    }

    let horasNormaisPagas = horasTrabalhadasMes - horasExtras;
    let valorHoraExtra = salarioHora * 1.5;
    let salarioTotal = (horasNormaisPagas * salarioHora) + (horasExtras * valorHoraExtra);

    alert("Seu salário total é R$ " + salarioTotal.toFixed(2) + "!"); /* Deixando apenas duas casas decimais. */
}


/* Exercício 12 */

alert("Calculando salário total de vendedor.");
let salarioFixo = parseFloat(prompt("Digite seu salário fixo: "));
let valorVendas = parseFloat(prompt("Digite o valor total das vendas efetuadas: "));

if (isNaN(salarioFixo) || isNaN(valorVendas)) {
    alert("Pelo menos um dos valores informados é inválido! Tente novamente.");
}
else {
    let comissao = 0;

    if (valorVendas <= 1500.00) {
        comissao = valorVendas * 0.03;
    }
    else {
        comissao = 1500 * 0.03 + (valorVendas - 1500) * 0.05;
    }

    let salarioFinal = salarioFixo + comissao;

    alert("O seu salário final com a comissão pelas vendas é R$" + salarioFinal.toFixed(2) + "!");
}


/* Exercício 13 */

alert("Verificando saldo de conta bancária.");
let numeroConta = parseFloat(prompt("Digite o número da sua conta: "));
let saldo = parseFloat(prompt("Digite o saldo da sua conta: "));
let debito = parseFloat(prompt("Digite o seu débito: "));
let credito = parseFloat(prompt("Digite o seu crédito: "));

if (isNaN(numeroConta) || isNaN(saldo) || isNaN(debito) || isNaN(credito)) {
    alert("Pelo menos um dos valores informados é inválido! Tente novamente.");
}
else {
    let saldoAtual = saldo - debito + credito;

    if (saldoAtual >= 0) {
        alert("Saldo POSITIVO em: " + saldoAtual);
    }
    else {
        alert("Saldo NEGATIVO em: " + saldoAtual);
    }
}


/* Exercício 14 */

alert("Calculando a quantidade média de estoque.");
let quantidadeAtual = Number(prompt("Digite a quantidade atual do estoque: "));
let quantidadeMaxima = Number(prompt("Digite a quantidade máxima do estoque: "));
let quantidadeMinima = Number(prompt("Digite a quantidade mínima do estoque: "));

if (isNaN(quantidadeAtual) || isNaN(quantidadeMaxima) || isNaN(quantidadeMinima)) {
    alert("Pelo menos um dos valores informados é inválido! Tente novamente.");
}
else {
    let quantidadeMedia =  (quantidadeMaxima + quantidadeMinima) / 2;

    if (quantidadeAtual >= quantidadeMedia) {
        alert("Não efetuar compra!");
    }
    else {
        alert("Efetuar compra!");
    }
}


/* Desafio */

alert("Verificando reajuste salarial de acordo com alguns fatores");
let salarioAtual = parseFloat(prompt("Digite seu salário atual: "));
let genero = Number(prompt("Digite o número conforme seu gênero: \n\n1 - Feminino\n2 - Masculino"));
let anosEmpresa = Number(prompt("Digite quantos anos você tem de empresa: "));

if (isNaN(salarioAtual) || isNaN(genero) || isNaN(anosEmpresa)) {
    alert("Pelo menos um dos valores informados é inválido! Tente novamente.");
}
else {
    let salarioReajustado;

    if (genero == 1) {
        if (anosEmpresa < 15) {
            salarioReajustado = salarioAtual + (salarioAtual * (5/100));
        }
        else if (anosEmpresa => 15 && anosEmpresa <= 20) {
            salarioReajustado = salarioAtual + (salarioAtual * (12/100));
        }
        else {
            salarioReajustado = salarioAtual + (salarioAtual * (23/100));
        }
    }
    else if (genero == 2) {
        if (anosEmpresa < 20) {
            salarioReajustado = salarioAtual + (salarioAtual * (3/100));
        }
        else if (anosEmpresa => 20 && anosEmpresa <= 30) {
            salarioReajustado = salarioAtual + (salarioAtual * (13/100));
        }
        else {
            salarioReajustado = salarioAtual + (salarioAtual * (25/100));
        }
    }

    alert("O seu salário reajustado é R$" + salarioReajustado + "!");
}