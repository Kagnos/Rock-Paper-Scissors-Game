let computerChoice;
let humanChoice;

function getComputerChoice() {
    return computerChoice = Math.floor(Math.random() * 3);
}

getComputerChoice();
console.log(computerChoice);

function getHumanChoice() {
    humanChoice = prompt("Rock, paper, or scissors?");
    if (humanChoice.toLowerCase() === "rock") {
        return humanChoice = 0;
    } else if (humanChoice.toLowerCase() === "paper") {
        return humanChoice = 1;
    } else if (humanChoice.toLowerCase() === "scissors" || humanChoice.toLowerCase() === "scissor") {
        return humanChoice = 2;
    } else {
        return humanChoice = "player can't spell lmao";
    }
}

getHumanChoice();
console.log(humanChoice);

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === 0 && humanChoice === 1 || computerChoice === 1 && humanChoice === 2 || computerChoice === 2 && humanChoice === 1) {
        console.log("You win!");
    } else if (computerChoice === 0 && humanChoice === 2 || computerChoice === 1 && humanChoice === 0 || computerChoice === 2 && humanChoice === 1) {
        console.log("You lose!");
    } else {
        console.log("It's a tie");
    }
}

playRound(computerChoice, humanChoice);