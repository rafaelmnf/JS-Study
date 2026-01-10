document.getElementById("rock").addEventListener("click", () => playGame('rock'));
document.getElementById("paper").addEventListener("click", () => playGame('paper'));
document.getElementById("scissors").addEventListener("click", () => playGame('scissors'));
document.getElementById('resetScore').addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    
    localStorage.removeItem('score');
    updateScore();
});
document.querySelector('.auto-play-button').addEventListener('click', autoplay);

// Key is the name of key (tecla)
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    }
})

let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

updateScore();

function playGame(playerMove) {
    const computerMove = randomMove();

    let result = '';

    if(playerMove === 'rock'){
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else {
            result = 'You win';
        }

    } else if (playerMove === 'paper'){
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else {
            result = 'You lose';
        }

    } else {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else {
            result = 'Tie';
        }
    }

    if (result === 'You win'){
        score.wins ++;
    } else if (result === 'Tie'){
        score.ties ++;
    } else if (result === 'You lose') {
        score.losses ++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="images/${playerMove}-emoji.png"> <img class="move-icon" src="images/${computerMove}-emoji.png"> Computer`;
}

function randomMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove; 
}

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

let isAutoPlaying = false;
let intervalId;

function autoplay() {
    if (!isAutoPlaying) {
        // setInterval returns a number (id)
        intervalId = setInterval(() => playGame(randomMove()), 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    // arrow function é chamada primeiro, pq se n nao funciona, já que passa a referencia da função
    // O primeiro argumento TEM que ser uma função, não o resultado de uma função.
    // Então, ao chamar com "nome"() ela executa automaticamente a função, já ao passá-la somente pelo sem "nome", ela pesquisa pela referência dela e somente a executa na hora chamada
    
}