// Player Side:
// verficar se já está ocupado
// se n estiver ocupado, marcar com X a casa

//verifica se ainda tem casa para o computador jogar

// Computer Side:
// escolher um numero aleatório de 1 a 9 para encaixar um "O" na cedula
// verificar a existencia de já estar ocupado
// marcar

// game function:
// se formar 3 "X" ou "O" consecutivos
// se valor da cedula consecutiva for igual, verificar se é X ou O, ganhar ou perder
// sequencias: 1,2,3 ou 4,5,6 ou 7,8,9 ou 1,5,9 ou 3,5,7

// a cada botao clicado, 1 jogada sua e uma do computador,
// verificar se ainda tem espaços sobrando para o computador

// Adicionar um botao de reinicializar, resetado todas as cedulas com " "

const cedulas = [];
let end = 1;

for (let i = 1; i <= 9; i++) {
  cedulas.push(document.querySelector(`#cedula${i}`));
}

for (let i = 0; i < cedulas.length; i++) {
  cedulas[i].addEventListener("click", () => playGame(cedulas[i]));
}


function playGame(posicao) {
    result = verifyWinner(cedulas);
    if (result === 1) { return; }
    for (let i = 0; i < cedulas.length; i++) {
        // se alguma cedula tiver em branco ainda, retorna 0
        if(cedulas[i].innerHTML === '') { 
            end = 0;
        }
        };
        // Deu velha
        if (end === 1) {
            console.log('Deu velha')
            return ;
    }
    playerMove(posicao);
    computerMove();
};

function playerMove (cedula) {

    if (cedula.innerHTML === "" && !cedula.disabled)
    {
        cedula.innerHTML = 'X';
        cedula.disabled = true;
    } else {
        return 0;
    }
}

 function computerMove() {
    //pega um numero de 1 a 9 
    let random;
    let cedula;

    // se for diferente de X e não tiver sido desabilitada
    while(true) {
        // troca valor do random e faz denovo
        random = Math.floor(Math.random() * 9 + 1);
        cedula = document.querySelector(`#cedula${random}`);
        if (cedula.innerHTML !== 'X' && !cedula.disabled) {
            cedula.innerHTML = 'O';
            cedula.disabled = true;
            break; // stops the loop
        }
    }
};

function verifyWinner(cedulas) {
    let winner;
    const wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for (const [a,b,c] of wins) {
        if (
            cedulas[a].innerHTML &&
            cedulas[a].innerHTML === cedulas[b].innerHTML &&
            cedulas[a].innerHTML === cedulas[c].innerHTML
        ) {
            winner = cedulas[a].innerHTML === 'X' ? 'player' : 'computer';
            showMessage(winner)
            return 1;
        }
    }
    return 0;
}

function showMessage (winner) {
    console.log(`Congrats ${winner}!`);
}

         