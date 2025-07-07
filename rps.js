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
    
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

updateScore();

function playGame(playerMove) {
    const computerMove = randomNum();

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

function randomNum() {
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