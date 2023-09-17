const gameChoices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

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
            ++playerScore;
            alert(`Player: ${playerScore}, Computer: ${computerScore}`); 
            return win;
    }   else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
            ++computerScore;
            alert(`Player: ${playerScore}, Computer: ${computerScore}`); 
            return lose;
    }   else {
            return "Invalid input! Try again.";
    }
}

function game() {
    // LOOPING PLAYROUND UNTIL SOMEONE WINS
    // While playerPoints or computerPoints is not equal to 5
    // We continuously call the function playRound()
    // If player wins, +1 to playerPoints. Else if computer wins, +1 to computerPoints. Else don't add anything and play another round.
    // When either playerPoints or computerPoints gets to 5, we call the winner and terminate the program
    playerSelection = prompt("Rock, paper, or scissors?");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("Rock, paper, or scissors?");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("Rock, paper, or scissors?");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

game();
