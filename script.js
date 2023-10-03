const gameChoices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const container = document.querySelector('#score-container');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset-button');
const content = document.querySelector('.content-container');
const div = document.querySelector('div');
const wrapper = document.querySelector('#button-wrapper');

// Start
content.removeChild(reset);

function getComputerChoice() {
  // Computer picks a game choice (rock, paper, scissors)
  let index = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[index];
  // First, we multiply Math.random() * gameChoices.length. Math.random() is between 0 and 1 multiplied by gameChoices.length 
  // which is the index of the array 'gameChoices'.
}

function playRound(playerSelection, computerSelection) {
    let win = "You win!";
    let winAgain = 'On a roll!';
    let lose = "You lose!";
    let loseAgain = 'Oh, you lost again.';
    let tie = "Tie! One more!";
    if (playerSelection === computerSelection) {
        result.textContent = tie;
    }   else if ((playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper") & 
            (playerScore === 0 || playerScore === 1)) {
            result.textContent = win;
            gameScore('player');
    }   else if ((playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper") & playerScore === 2) {
            result.textContent = winAgain;
            gameScore('player');
    }   else if ((playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper") & playerScore === 3) {
            result.textContent = "We're getting closer!";
            gameScore('player');
    }   else if ((playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper") & playerScore === 4) {
            result.textContent = 'Last one!';
            gameScore('player');
    }   else if ((playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock") & 
            (computerScore === 0 || computerScore === 1)) {
            result.textContent = lose;
            gameScore('computer');        
    }   else if ((playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock") & computerScore === 2) {
            result.textContent = loseAgain;
            gameScore('computer');
    }   else if ((playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock") & computerScore === 3) {
            result.textContent = 'Careful!';
            gameScore('computer');
    }   else if (computerScore = 4) {
            result.textContent = 'This is scary!';
            gameScore('computer');
    }
}


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playerScore === 5) {
      result.textContent = 'You beat the computer!';
      content.removeChild(wrapper);
      content.appendChild(reset);
      reset.textContent = 'One more?';
      resetGame();
    } else if (computerScore === 5) {
      result.textContent = 'You lost! Nice try!';
      content.removeChild(wrapper);
      content.appendChild(reset);
      reset.textContent = 'Try again?';
      resetGame();
    } else if (playerScore >= 5 || computerScore >= 5) {
      button.disabled = true;
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

function resetGame() {
  reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    container.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    reset.textContent = '';
    result.textContent = '';
    content.removeChild(reset);
    content.insertBefore(wrapper, result);
  })
}
