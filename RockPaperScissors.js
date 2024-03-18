
let score1 = 0; 
let score2 = 0; 


const paperBtn = document.querySelector('.paper');
const rockBtn = document.querySelector('.rock');
const scissorBtn = document.querySelector('.scissor');
const playBtn = document.querySelector('button');


paperBtn.addEventListener('click', () => playRound('paper'));
rockBtn.addEventListener('click', () => playRound('rock'));
scissorBtn.addEventListener('click', () => playRound('scissors'));



function playRound(playerSelection) {
    const computerSelection = computerPlay();
    let result;

   
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = "You win!";
        score1++;
    } else {
        result = "Computer wins!";
        score2++;
    }

    
    document.querySelector('.score p:nth-child(1)').textContent = `You: ${score1}`;
    document.querySelector('.score p:nth-child(2)').textContent = `Comp: ${score2}`;

    
    alert(`You played: ${playerSelection}\nComputer played: ${computerSelection}\n${result}`);
}





function computerPlay() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * 3)];
}
