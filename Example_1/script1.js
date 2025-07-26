/* Document é utilizado para que haja a interação do JS com o HTML
        getElementById = Puxar elemento pelo seu ID
        textContent = Cria um determinado texto dentro do HTML 
        É preciso que a function e o OnClick tenham o mesmo nome, para que puxe corretamente
        Para criar variáveis é preciso utilizar LET
        Prompt é utilizado para entrada de dados / Ele é um Alert
        Date() puxa o horário de agora
        get.Hours() = Puxa as HORAS
        get.Minutes() = Puxa os MINUTOS
        get.Day() = Puxa o DIA DA SEMANA (0 = Domingo)
        getDate() = Puxa o dia no MÊS
        new é obrigatório para criar objetos
        */

let nome = prompt("Digite o seu nome: ");

// Verificar se o usuário realmente colocou um nome
if (nome) {
  function mudarNome() {
    let agora = new Date(); // Cria o objeto da data de agora
    let hora = agora.getHours(); // Extrai apenas o hora do 'agora'. Ele pode ser de 0 a 23
    let saudacao = "";

    if (hora >= 6 && hora < 12) {
      saudacao = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
      saudacao = "Boa tarde";
    } else {
      saudacao = "Boa noite";
    }

    document.getElementById("mensagemSaudacao").textContent =
      saudacao + ", " + nome + "!";
  }
} else {
  alert("Você não digitou seu nome!");
}
