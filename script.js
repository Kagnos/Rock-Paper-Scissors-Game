let computerChoice;
let humanChoice;

let computerScore = 0;
let humanScore = 0;

const human = document.querySelector("#human");
const computer = document.querySelector("#computer");
const roundResult = document.querySelector("#roundResult");
const runningScore = document.querySelector("#runningScore");

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", (event) => {

    function playRound(computerChoice, humanChoice) {
        function getHumanChoice() {
            if (computerScore === 5 || humanScore === 5) {
                human.textContent = "Human chooses..."
                computer.textContent = "Computer chooses..."
                roundResult.textContent = "First to 5 points!"
                runningScore.textContent = "";
                computerScore = 0;
                humanScore = 0;
                return;
            } else {
                human.textContent = "Human chooses rock.";
                getComputerChoice();
            }
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
    
    if (computerScore === 4) {
            ++ computerScore;
            roundResult.textContent = "You lost the game!";
            runningScore.textContent = `Final Computer Score: ${computerScore} | Final Human Score: ${humanScore}`;
        } else if (humanScore === 4) {
            ++ humanScore;
            roundResult.textContent = "You won the game!";
            runningScore.textContent = `Final Computer Score: ${computerScore} | Final Human Score: ${humanScore}`;
        } else if (computerChoice === 2) {
            ++ humanScore;
            roundResult.textContent = "You win!";
            runningScore.textContent = `Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (computerChoice === 1) {
            ++ computerScore;
            roundResult.textContent = "You lose!";
            runningScore.textContent = `Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (computerChoice === 0) {
            roundResult.textContent = "It's a tie!";
            runningScore.textContent = `Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        }
    }
    playRound(computerChoice, humanChoice);
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", (event) => {

    function playRound(computerChoice, humanChoice) {
        function getHumanChoice() {
            if (computerScore === 5 || humanScore === 5) {
                human.textContent = "Human chooses..."
                computer.textContent = "Computer chooses..."
                roundResult.textContent = "First to 5 points!"
                runningScore.textContent = "";
                computerScore = 0;
                humanScore = 0;
                return;
            } else {
                human.textContent = "Human chooses paper.";
                getComputerChoice();
            }
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
    
    if (computerScore === 4) {
            ++ computerScore;
            roundResult.textContent = "You lost the game!";
            runningScore.textContent = `Final Computer Score: ${computerScore} | Final Human Score: ${humanScore}`;
        } else if (humanScore === 4) {
            ++ humanScore;
            roundResult.textContent = "You won the game!";
            runningScore.textContent = `Final Computer Score: ${computerScore} | Final Human Score: ${humanScore}`;
        } else if (computerChoice === 0) {
            ++ humanScore;
            roundResult.textContent = "You win!";
            runningScore.textContent = `Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (computerChoice === 2) {
            ++ computerScore;
            roundResult.textContent = "You lose!";
            runningScore.textContent = `Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (computerChoice === 1) {
            roundResult.textContent = "It's a tie!";
            runningScore.textContent = `Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        }
    }
    playRound(computerChoice, humanChoice);
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", (event) => {

    function playRound(computerChoice, humanChoice) {
        function getHumanChoice() {
            if (computerScore === 5 || humanScore === 5) {
                human.textContent = "Human chooses..."
                computer.textContent = "Computer chooses..."
                roundResult.textContent = "First to 5 points!"
                runningScore.textContent = "";
                computerScore = 0;
                humanScore = 0;
                return;
            } else {
                human.textContent = "Human chooses scissors.";
                getComputerChoice();
            }
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
    
        if (computerScore === 4) {
            ++ computerScore;
            roundResult.textContent = "You lost the game!";
            runningScore.textContent = `Final Computer Score: ${computerScore} | Final Human Score: ${humanScore}`;
        } else if (humanScore === 4) {
            ++ humanScore;
            roundResult.textContent = "You won the game!";
            runningScore.textContent = `Final Computer Score: ${computerScore} | Final Human Score: ${humanScore}`;
        } else if (computerChoice === 1) {
            ++ humanScore;
            roundResult.textContent = "You win!";
            runningScore.textContent = `Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (computerChoice === 0) {
            ++ computerScore;
            roundResult.textContent = "You lose!";
            runningScore.textContent = `Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        } else if (computerChoice === 2) {
            roundResult.textContent = "It's a tie!";
            runningScore.textContent = `Computer Score: ${computerScore} | Human Score: ${humanScore}`;
        }
    }
    playRound(computerChoice, humanChoice);
});