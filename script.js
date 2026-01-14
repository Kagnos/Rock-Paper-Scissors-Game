let computerChoice;
let humanChoice;

let computerScore = 0;
let humanScore = 0;

function playGame() {
    function playRound(computerChoice, humanChoice) {
        function getHumanChoice() {
            humanChoice = prompt("Rock, paper, or scissors?");

            if (humanChoice === null) {
                console.log(humanChoice = "Human cancelled.");
                return;
            } else if (humanChoice.toLowerCase() === "rock") {
                console.log("Human chooses rock.");
                getComputerChoice();
                return humanChoice = 0;
            } else if (humanChoice.toLowerCase() === "paper") {
                console.log("Human chooses paper.");
                getComputerChoice();
                return humanChoice = 1;
            } else if (humanChoice.toLowerCase() === "scissors" || humanChoice.toLowerCase() === "scissor") {
                console.log("Human chooses scissors.");
                getComputerChoice();
                return humanChoice = 2;
            } else {
                console.log(humanChoice = "Human can't spell.");
                return;
            }
        }
    
        function getComputerChoice() {
            computerChoice = Math.floor(Math.random() * 3);

            if (computerChoice === 0) {
                console.log("Computer chooses rock.");
                return;
            } else if (computerChoice === 1) {
                console.log("Computer chooses paper.");
                return;
            } else if (computerChoice === 2) {
                console.log("Computer chooses scissors.");
                return;
            }
        }

        getHumanChoice();
    
    if (humanChoice === null) {
            return;
        } else if (computerChoice === 0 && humanChoice === 1 || computerChoice === 1 && humanChoice === 2 || computerChoice === 2 && humanChoice === 0) {
            ++ humanScore;
            console.log("You win!");
            console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
        } else if (computerChoice === 0 && humanChoice === 2 || computerChoice === 1 && humanChoice === 0 || computerChoice === 2 && humanChoice === 1) {
            ++ computerScore;
            console.log("You lose!");
            console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
        } else if (computerChoice === humanChoice) {
            console.log("It's a tie!");
            console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
        } else {
            return;
        }
    }

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

playGame()

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", (event) => {
    alert("testing rock");
    function playRound(computerChoice, humanChoice) {
        function getHumanChoice() {
            console.log("Human chooses rock.");
            getComputerChoice();
        }
    
        function getComputerChoice() {
            computerChoice = Math.floor(Math.random() * 3);

            if (computerChoice === 0) {
                console.log("Computer chooses rock.");
                return;
            } else if (computerChoice === 1) {
                console.log("Computer chooses paper.");
                return;
            } else if (computerChoice === 2) {
                console.log("Computer chooses scissors.");
                return;
            }
        }

        getHumanChoice();
    
    if (computerChoice === 2) {
            ++ humanScore;
            console.log("You win!");
            console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
        } else if (computerChoice === 1) {
            ++ computerScore;
            console.log("You lose!");
            console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
        } else if (computerChoice === 0) {
            console.log("It's a tie!");
            console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
        }
    }
    playRound(computerChoice, humanChoice);
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", (event) => {
    alert("testing paper");
    function playRound(computerChoice, humanChoice) {
        function getHumanChoice() {
            console.log("Human chooses paper.");
            getComputerChoice();
        }
    
        function getComputerChoice() {
            computerChoice = Math.floor(Math.random() * 3);

            if (computerChoice === 0) {
                console.log("Computer chooses rock.");
                return;
            } else if (computerChoice === 1) {
                console.log("Computer chooses paper.");
                return;
            } else if (computerChoice === 2) {
                console.log("Computer chooses scissors.");
                return;
            }
        }

        getHumanChoice();
    
    if (computerChoice === 0) {
            ++ humanScore;
            console.log("You win!");
            console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
        } else if (computerChoice === 2) {
            ++ computerScore;
            console.log("You lose!");
            console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
        } else if (computerChoice === 1) {
            console.log("It's a tie!");
            console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
        }
    }
    playRound(computerChoice, humanChoice);
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", (event) => {
    alert("testing scissors");
    function playRound(computerChoice, humanChoice) {
        function getHumanChoice() {
            console.log("Human chooses scissors.");
            getComputerChoice();
        }
    
        function getComputerChoice() {
            computerChoice = Math.floor(Math.random() * 3);

            if (computerChoice === 0) {
                console.log("Computer chooses rock.");
                return;
            } else if (computerChoice === 1) {
                console.log("Computer chooses paper.");
                return;
            } else if (computerChoice === 2) {
                console.log("Computer chooses scissors.");
                return;
            }
        }

        getHumanChoice();
    
    if (computerChoice === 1) {
            ++ humanScore;
            console.log("You win!");
            console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
        } else if (computerChoice === 0) {
            ++ computerScore;
            console.log("You lose!");
            console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
        } else if (computerChoice === 2) {
            console.log("It's a tie!");
            console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
        }
    }
    playRound(computerChoice, humanChoice);
});