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

let c1 = document.querySelector("#cedula1");
let c2 = document.querySelector("#cedula2");
let c3 = document.querySelector("#cedula3");
let c4 = document.querySelector("#cedula4");
let c5 = document.querySelector("#cedula5");
let c6 = document.querySelector("#cedula6");
let c7 = document.querySelector("#cedula7");
let c8 = document.querySelector("#cedula8");
let c9 = document.querySelector("#cedula9");

c1.addEventListener("click",() => playGame(c1));
c2.addEventListener("click",() => playGame(c2));
c3.addEventListener("click",() => playGame(c3));
c4.addEventListener("click",() => playGame(c4));
c5.addEventListener("click",() => playGame(c5));
c6.addEventListener("click",() => playGame(c6));
c7.addEventListener("click",() => playGame(c7));
c8.addEventListener("click",() => playGame(c8));
c9.addEventListener("click",() => playGame(c9));


function playGame(posicao) {
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

// function computerMove() {
//     //pega um numero de 1 a 9 
//     let random = Math.floor(Math.random() * 9 + 1);
//     let cedula = document.querySelector(`#cedula${random}`);
//     procuraCasa(cedula, random);
//     //verifica se pode
//     //se puder, encaixa a letra O no lugar, se não puder, procura dnv e testa dnv
//     };
        
// function procuraCasa (cedula, random) {
//         if (cedula.innerHTML === "" && !cedula.disabled)
//         {
//         cedula.innerHTML = 'O';
//         cedula.disabled = true;
//         return 0;
//         } else {
//             //troca valor do random e chama a fuçãonovamente 
//             random = Math.floor(Math.random() * 10 + 1);
//             cedula = document.querySelector(`#cedula${random}`);
//             return procuraCasa(cedula, random);
//         }
//     };