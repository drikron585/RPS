const selectionButtons = document.querySelectorAll(".selection");
selectionButtons.forEach(button => {// and for each one we add a 'click' listener
    button.addEventListener('click', function () { onClickRoundFunction(button.innerHTML) });
});

let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;

function onClickRoundFunction(selection) {
    let roundResult = (singleRound(selection));
    addResult(roundResult);
    if(roundsPlayed == 5){
        declareWinner();
        resetGame();
    }
}

function declareWinner(){
    if (playerWins > computerWins) {
        alert("You win the game!");
    }
    else if (computerWins > playerWins){
        alert("You lose the game!");
    }
}

function resetGame(){
    playerWins = 0;
    computerWins = 0;
    roundsPlayed = 0;
    document.getElementById("results").innerHTML = "";
}



function addResult(roundResult) {
    let result = document.getElementById("results");
    if (roundResult.includes("beat")) {
        playerWins++;
    }
    else if (roundResult.includes("lost")) {
        computerWins++;
    }
    result.innerHTML = result.innerHTML + roundResult + "<br>";
    ++roundsPlayed;
}


function getComputerChoice() {
    let randomNum = Math.random() * 10;
    let choice = Math.floor(randomNum) % 3
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Rps selector is broken";
    }
}


function singleRound(playerSelection) {
    computerSelection = getComputerChoice();
    switch (true) {
        case (playerSelection === computerSelection):
            return `You both picked ${playerSelection}`;
        case ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "scissors" && computerSelection === "rock") ||
            (playerSelection === "paper" && computerSelection === "scissors")):
            return `You picked ${playerSelection} and lost to ${computerSelection}!`;
        default:
            return `You picked ${playerSelection} and beat ${computerSelection}!`;
    }
}
// five round game
function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; ++i) {
        let playerSelection = prompt("Please enter \"rock\" ,\"paper\" or \"scissors\"");
        let computerSelection = getComputerChoice();
        let roundResult = singleRound(playerSelection, computerSelection);
        if (roundResult.includes("beat")) {
            playerWins++;
        }
        else if (roundResult.includes("lost")) {
            computerWins++;
        }
        console.log(roundResult);
    }
    if (playerWins > computerWins) {
        // you win, points
        console.log("You win the game!");
    }
    else if (computerWins > playerWins) {
        // you lose,points
        console.log("You lose the game!");
    }
    else {
        console.log("Tie game!");
    }
}