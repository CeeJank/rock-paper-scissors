//choices for rps
choices = ["rock", "paper", "scissors"]

//Assign score variable
let humanScore = 0;
let computerScore = 0;

const submitbtn = document.querySelector("#submitbtn");
const howManyRounds = document.querySelector("#roundsPlayed");


//rounds to be played
const form = document.querySelector("#form") 
form.addEventListener("submit", function(event) {
    event.preventDefault();
    submitbtn.addEventListener("click", function (){
        
        console.log("you want to play " + howManyRounds.value + " rounds");
        playGame(howManyRounds);
    })
})


//getting selections
async function playGame(games){
    for (i = 0; i < games; i++){
        const humanSelection = await selection();
        const computerSelection = await getComputerChoice();
        await playRound(humanSelection, computerSelection);
    }
    findWinner();
    if (humanScore > computerScore) {
        console.log("congratulations! player wins!")
    }
}

//selects all the buttons
const buttons = document.querySelectorAll(".btn")
function selection() {
    buttons.forEach(button => {
    button.addEventListener('click', getHumanChoice);
})};

//retrieving the human choice from the buttons and playing 
async function getHumanChoice() {
    //const humanChoice = prompt("Choose Rock, Paper, or Scissors");
    console.log("You have chosen " + this.value);
    let humanSelection = this.value;
    return humanSelection;
}

//fetching choice from random
function getComputerChoice() {
    const computerSelection = choices[Math.floor(Math.random(choices) * choices.length)]
    return computerSelection;
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

function findWinner() {
    if (humanScore > computerScore){
        console.log("You Win!");
    } else {
        console.log("better luck next time!");
    }
}







