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
                return console.log(humanChoice = "Human can't spell.");
            }
        }
    
        function getComputerChoice() {
            computerChoice = Math.floor(Math.random() * 3);

            if (computerChoice === 0) {
                return console.log("Computer chooses rock.");
            } else if (computerChoice === 1) {
                return console.log("Computer chooses paper.");
            } else if (computerChoice === 2) {
                return console.log("Computer chooses scissors.");
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

// playGame()

const human = document.querySelector("#human");
const computer = document.querySelector("#computer");
const results = document.querySelector("#roundResult")

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", (event) => {

    function playRound(computerChoice, humanChoice) {
        function getHumanChoice() {
            human.textContent = "Human chooses rock.";
            getComputerChoice();
        }
    
        function getComputerChoice() {
            computerChoice = Math.floor(Math.random() * 3);

            if (computerChoice === 0) {
                return computer.textContent = "Computer chooses rock.";
            } else if (computerChoice === 1) {
                return computer.textContent = "Computer chooses paper.";
            } else if (computerChoice === 2) {
                return computer.textContent = "Computer chooses scissors.";
            }
        }

        getHumanChoice();
    
    if (computerChoice === 2) {
            ++ humanScore;
            roundResult.textContent = `You win! Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (computerChoice === 1) {
            ++ computerScore;
            roundResult.textContent = `You lose! Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (computerChoice === 0) {
            roundResult.textContent = `It's a tie! Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        }
    }
    playRound(computerChoice, humanChoice);
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", (event) => {

    function playRound(computerChoice, humanChoice) {
        function getHumanChoice() {
            human.textContent = "Human chooses paper.";
            getComputerChoice();
        }
    
        function getComputerChoice() {
            computerChoice = Math.floor(Math.random() * 3);

            if (computerChoice === 0) {
                return computer.textContent = "Computer chooses rock.";
            } else if (computerChoice === 1) {
                return computer.textContent = "Computer chooses paper.";
            } else if (computerChoice === 2) {
                return computer.textContent = "Computer chooses scissors.";
            }
        }

        getHumanChoice();
    
    if (computerChoice === 0) {
            ++ humanScore;
            roundResult.textContent = `You win! Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (computerChoice === 2) {
            ++ computerScore;
            roundResult.textContent = `You lose! Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (computerChoice === 1) {
            roundResult.textContent = `It's a tie! Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        }
    }
    playRound(computerChoice, humanChoice);
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", (event) => {

    function playRound(computerChoice, humanChoice) {
        function getHumanChoice() {
            human.textContent = "Human chooses scissors.";
            getComputerChoice();
        }
    
        function getComputerChoice() {
            computerChoice = Math.floor(Math.random() * 3);

            if (computerChoice === 0) {
                return computer.textContent = "Computer chooses rock.";
            } else if (computerChoice === 1) {
                return computer.textContent = "Computer chooses paper.";
            } else if (computerChoice === 2) {
                return computer.textContent = "Computer chooses scissors.";
            }
        }

        getHumanChoice();
    
    if (computerChoice === 1) {
            ++ humanScore;
            roundResult.textContent = `You win! Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (computerChoice === 0) {
            ++ computerScore;
            roundResult.textContent = `You lose! Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (computerChoice === 2) {
            roundResult.textContent = `It's a tie! Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        }
    }
    playRound(computerChoice, humanChoice);
});