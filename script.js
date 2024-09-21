//Assiging array of rps
const choices = ["rock", "paper", "scissors"]

//Assign score variable
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener('click', getHumanChoice);
});

//fetching choice from random
function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random(choices) * choices.length)]
    return computerChoice;
}

function getHumanChoice() {
    //const humanChoice = prompt("Choose Rock, Paper, or Scissors");
    console.log($(this).val());
    let humanChoice = $(this).val();
    return humanChoice;
}

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

function playGame() { //assgning the selections inside function to execute code everytime playGame()
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
}

const howManyRounds = prompt("how many rounds?");

for (i = 0; i < howManyRounds; i++) {
    playGame();
}

console.log("Game Over");


const heading = document.querySelector("#heading");

const newChild = document.createElement("div");
newChild.classList.add("newChild");
newChild.textContent = "bruh moment";

heading.appendChild(newChild);





