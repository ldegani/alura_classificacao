let players = [];

let elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  elementoTabela.innerHTML = '';
  players.forEach((player, index) => {
    elementoTabela.innerHTML += `
        <tr>
            <td>${player.nome}</td>
            <td>${player.vitoria}</td>
            <td>${player.empate}</td>
            <td>${player.derrota}</td>
            <td>${player.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
            <td><button onClick="removerJogador(${index})">Excluir</button></td>
        </tr>
    `;
  });
}

function adicionarJogador() {
  let playerName = prompt('Digite o nome do jogador: ')
  if (playerName === null || playerName.trim() === '') {
    alert('Nome inválido. Tente novamente!');
    return;
  }

  if (!/^[a-zA-Z]/.test(playerName)) {
    alert('O nome dos jogadores devem iniciar com letras!');
    return;
  }

    let novoJogador = {
      nome: playerName,
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    }

    players.push(novoJogador);
    console.log(players)
    exibirNaTela();
}

function adicionarVitoria(index) {
  players[index].vitoria++;
  players[index].pontos += 3;
  exibirNaTela();
}

function adicionarEmpate(index) {
  players[index].empate++;
  players[index].pontos++;
  exibirNaTela();
}

function adicionarDerrota(index) {
  players[index].derrota++;
  exibirNaTela();
}

function removerJogador(index) {
  let confirmaRemover = confirm(`Tem certeza que deseja excluir ${players[index].nome}`)

  if (confirmaRemover) {
    players.splice(index, 1);
    exibirNaTela();
  }
}