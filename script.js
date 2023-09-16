const gameChoices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    // Computer picks a game choice (rock, paper, scissors)
    let index = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[index];
    // First, we multiply Math.random() * gameChoices.length. Math.random() is between 0 and 1 multiplied by gameChoices.length which is the index of the array 'gameChoices'.
}

function playRound(playerSelection, computerSelection) {
    let win = "You win!";
    let lose = "You lose!";
    let tie = "Tie! One more!";
    if (playerSelection === computerSelection) {
        return tie;
    }   else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
            return win;
    }   else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
            return lose;
    }   else {
            return "Invalid input! Try again.";
    }
}

