//Assiging array of rps
const choices = ["rock", "paper", "scissors"]

//Assign score variable
let humanScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();


function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random(choices) * choices.length)]
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoiceChoice() {
    return;
}

function playRound(humanChoice, computerChoice) {
    return;
}


getComputerChoice();
