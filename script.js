//Assiging array of rps
const choices = ["rock", "paper", "scissors"]

//Assign score variable
let humanScore = 0;
let computerScore = 0;

//Assign variables for functions
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();


function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random(choices) * choices.length)]
    return computerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("Choose Rock, Paper, or Scissors");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    switch (true) {
        case (humanChoice == "rock" && computerChoice == "scissors"):
            console.log("You win! Rock beats scissors!");
            break;

        case (humanChoice == "scissors" && computerChoice == "paper"):
            console.log("You win! Scissors beats paper!");
            break;

        case (humanChoice == "paper" && computerChoice == "rock"):
            console.log("You win! paper beats rock!");
            break;

        case (humanChoice == computerChoice):
            console.log("draw!")
            break;

        default: 
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        
    }
}

playRound(humanSelection, computerSelection);


