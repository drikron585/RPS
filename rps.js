function getComputerChoice(){
    let randomNum = Math.random()*10;
    let choice = Math.floor(randomNum) % 3
    console.log(choice);
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "rps selector is broken";
    }
}


function singleRound(playerSelection, computerSelection) {
    switch(true) {
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
function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; ++i){
        let playerSelection = prompt("Please enter \"rock\" ,\"paper\" or \"scissors\"");
        let computerSelection = getComputerChoice();
        let roundResult = singleRound(playerSelection, computerSelection);
        if(roundResult.includes("beat")){
            playerWins++;
        }
        else if(roundResult.includes("lost")){
            computerWins++;
        }
        console.log(roundResult);
    }
    if(playerWins > computerWins){
        // you win, points
        console.log("You win the game!");
    }
    else if(computerWins > playerWins){
        // you lose,points
        console.log("You lose the game!");
    }
    else{
        console.log("Tie game!");
    }
}
console.log(game());