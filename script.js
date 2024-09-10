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
    console.log(computerChoice);
}

function getHumanChoice() {
    const humanChoice = prompt("Choose Rock, Paper, or Scissors");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    
}


