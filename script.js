let computerChoice;
let humanChoice;

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
    function getHumanChoice() {
    humanChoice = prompt("Rock, paper, or scissors?");

    if (humanChoice === null) {
        console.log(humanChoice = "Player cancelled.");
        return;
    } else if (humanChoice.toLowerCase() === "rock") {
        console.log("Player chooses rock.");
        getComputerChoice();
        return humanChoice = 0;
    } else if (humanChoice.toLowerCase() === "paper") {
        console.log("Player chooses paper.");
        getComputerChoice();
        return humanChoice = 1;
    } else if (humanChoice.toLowerCase() === "scissors" || humanChoice.toLowerCase() === "scissor") {
        console.log("Player chooses scissors.");
        getComputerChoice();
        return humanChoice = 2;
    } else {
        console.log(humanChoice = "Player can't spell.");
        return;
    }
}
    
    function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        console.log("Computer chooses rock.");
        return computerChoice = 0;
    } else if (computerChoice === 1) {
        console.log("Computer chooses paper.");
        return computerChoice = 1;
    } else if (computerChoice === 2) {
        console.log("Computer chooses scissors.");
        return computerChoice = 2;
    }
}

    getHumanChoice();
    

    if (humanChoice === null) {
        return;
    } else if (computerChoice === 0 && humanChoice === 1 || computerChoice === 1 && humanChoice === 2 || computerChoice === 2 && humanChoice === 1) {
        ++ humanScore;
        console.log("You win!");
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Human Score: ${humanScore}`);
    } else if (computerChoice === 0 && humanChoice === 2 || computerChoice === 1 && humanChoice === 0 || computerChoice === 2 && humanChoice === 1) {
        ++ computerScore;
        console.log("You lose!");
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Human Score: ${humanScore}`);
    } else if (computerChoice === humanChoice) {
        console.log("It's a tie!");
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Human Score: ${humanScore}`);
    } else {
        return;
    }
}

playRound(computerChoice, humanChoice);

function playGame (playRound) {
    playRound(computerChoice, humanChoice);
    playRound(computerChoice, humanChoice);
    playRound(computerChoice, humanChoice);
    playRound(computerChoice, humanChoice);
    playRound(computerChoice, humanChoice);
    
    if (computerScore < humanScore) {
        console.log(`${humanScore} - ${computerScore} You win the game!`);
    } else if (computerScore > humanScore) {
        console.log(`${humanScore} - ${computerScore} You lose the game!`);
    } else if (computerScore === 0 && humanScore === 0) {
        console.log(`${humanScore} - ${computerScore} Did you even try?`)
    } else if (computerScore === humanScore) {
        console.log(`${humanScore} - ${computerScore} You tied the game!`);
    }
}