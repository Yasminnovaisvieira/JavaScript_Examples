/* .value serve para puxar o VALOR daquele elemento
        createElement serve para criar um novo elemento pré determinado
        appendChild serve para criar elemento-filho dentro de outro
        trim() = Tira os espaços em branco no início e no final
        const = constantes que não poderão ter seu valor alterado durante a execução do código
        .style.color = adicionar cor ao texto
        innerHTML = permite acessar e modificar o HTML de um elemento, incluindo seus elementos-filhos
        splice = permite mudar conteúdo de um array, seja remover ou substituindo e/ou adicionar novos elementos
        */
let tarefas = [];

function adicionarTarefa() {
  let alerta = "Tarefa adicionada com sucesso!";
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();
  const mostrarAlerta = document.getElementById("alerta");

  if (tarefa) {
    mostrarAlerta.textContent = alerta;
    mostrarAlerta.style.color = "#009929";

    tarefas.push(tarefa);

    renderizarTarefas();
  } else {
    alerta = "Não foi escrito nenhuma tarefa. Tente Novamente.";
    mostrarAlerta.textContent = alerta;
    mostrarAlerta.style.color = "#7b0000";
  }

  inputTarefa.value = ""; // Limpa o input após clicar no botão
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = ""; //Apaga todos os li para imprimir a lista atualizada

  // Faz com que comece desde de o início da lista
  // Iterador, Condição (Acaba quando o interador foi menor que length) e "modo" (Incremento, Decremento...)
  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];

    let botaoRemover = document.createElement("button");
    let botaoEditar = document.createElement("button");

    novaTarefa.appendChild(botaoRemover);
    botaoRemover.className = "remover"; //Criar classe para o botão
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerTarefa(i); //"i" é o elemento que quero que essa função nova tenha acesso
    /*Como se fosse:
                function() {
                    removerTarefa();
                }*/

    novaTarefa.appendChild(botaoEditar);
    botaoEditar.className = "editar";
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = () => editarTarefa(i);

    listaTarefas.appendChild(novaTarefa);

    const botaoLimpar = document.getElementById("btnLimpar");

    if (tarefas.length > 0) {
      botaoLimpar.style.display = "inline-block"; //Mostrar botão
    } else {
      botaoLimpar.style.display = "none"; //Esconder botão
    }
  }
}

function removerTarefa(i) {
  tarefas.splice(i, 1); //Quantos elementos serão deletados a partir do "i". No caso, 1
  renderizarTarefas();
}

function editarTarefa(i) {
  let tarefaEditada = prompt("Edite a tarefa:");

  if (tarefaEditada.trim() != "") {
    tarefas[i] = tarefaEditada;
    renderizarTarefas();
  }
}

function limparListas() {
  tarefas.length = 0;
  renderizarTarefas();
  alerta.textContent = "Lista de tarefas limpa com sucesso!";
  alerta.style.color = "#383838";
}
