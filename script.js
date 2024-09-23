//Assign score variable
let humanScore = 0;
let computerScore = 0;

//selects all the buttons
const buttons = document.querySelectorAll(".btn")
buttons.forEach(button => {
    button.addEventListener('click', getHumanChoice);
});

//fetching choice from random
function getComputerChoice() {
    const computerSelection = choices[Math.floor(Math.random(choices) * choices.length)]
    return computerSelection;
}

//retrieving the human choice from the buttons and playing 
function getHumanChoice() {
    //const humanChoice = prompt("Choose Rock, Paper, or Scissors");
    console.log("You have chosen" + this.value);
    let humanSelection = this.value;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

}

//the game itself
function playRound(humanChoice, computerChoice) {
    switch (true) {
        case (humanChoice == "rock" && computerChoice == "scissors"):
            console.log("You win! Rock beats scissors!");
            humanScore++;
            break;

        case (humanChoice == "scissors" && computerChoice == "paper"):
            console.log("You win! Scissors beats paper!");
            humanScore++;
            break;

        case (humanChoice == "paper" && computerChoice == "rock"):
            console.log("You win! paper beats rock!");
            humanScore++
            break;

        case (humanChoice == computerChoice):
            console.log("draw!")
            break;

        default: //anything that the player doesn't win
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
            break;
    }       
}









