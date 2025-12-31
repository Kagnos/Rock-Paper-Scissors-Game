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
        console.log("player can't spell lmao");
    }
}

getHumanChoice();
console.log(humanChoice);

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {

}