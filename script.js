const gameChoices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const container = document.querySelector('#score-container');
const result = document.querySelector('#result');

function getComputerChoice() {
  // Computer picks a game choice (rock, paper, scissors)
  let index = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[index];
  // First, we multiply Math.random() * gameChoices.length. Math.random() is between 0 and 1 multiplied by gameChoices.length 
  // which is the index of the array 'gameChoices'.
}

function playRound(playerSelection, computerSelection) {
    let win = "You win!";
    let lose = "You lose!";
    let tie = "Tie! One more!";
    if (playerSelection === computerSelection) {
        result.textContent = tie;
    }   else if (playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper") {
            result.textContent = win;
            gameScore('player');
            
    }   else if (playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock") {
            result.textContent = lose;
            gameScore('computer');
    }
}


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playerScore === 5 && computerScore < 5) {
      result.textContent = 'You beat the computer!';
      return;
    } else if (computerScore === 5 && playerScore < 5) {
      result.textContent = 'Nice try!';
      return;
    }
  });
});

function gameScore(winner) {
  if (winner === 'player') {
    playerScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
  container.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
}