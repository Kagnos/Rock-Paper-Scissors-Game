function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice());

function getHumanChoice() {
    return "Rock, paper, or scissors?";
}

prompt(getHumanChoice());