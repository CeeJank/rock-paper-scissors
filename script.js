//choices for rps
choices = ["rock", "paper", "scissors"]

//Assign score variable
let humanScore = 0;
let computerScore = 0;

let rounds = 0;
let roundsPlayed = 0;   

const submitbtn = document.querySelector(".submit"); 
const howManyRounds = document.querySelector("#roundsPlayed"); //to fetch rounds to play

//selects all the buttons
const buttons = document.querySelectorAll(".btn")
buttons.forEach(button => {
button.addEventListener('click', function() {playGame(this.value)});
});

//rounds to be played
const form = document.querySelector("#form") 

//setting up the input of rounds
submitbtn.addEventListener("click", function (event){ //clicking submit button to log the rounds
    event.preventDefault();
    console.log("you want to play " + howManyRounds.value + " rounds");
    let numRounds = howManyRounds.value;
    roundsToPlay(parseInt(numRounds));
})


function roundsToPlay(roundsPlayed){
    rounds = roundsPlayed;
}


//the game itself
function playRound(humanChoice, computerChoice) {
    roundsPlayed++;
    switch (true) {
        case (humanChoice == "rock" && computerChoice == "scissors"):
            console.log("You win! Rock beats scissors!");
            humanScore++;
            break;

        case (humanChoice == "scissors" && computerChoice == "ppaper"):
            console.log("You win! Scissors beats paper!");
            humanScore++;
            break;

        case (humanChoice == "paper" && computerChoice == "rock"):
            console.log("You win! paper beats rock!");
            humanScore++;
            break;

        case (humanChoice == computerChoice):
            console.log("draw!");
            break;

        default: //anything that the player doesn't win
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
            break;
    }       
}

//triggers the game upon player choice selection
function playGame(playerChoice){
    let computerChoice = choices[Math.floor(Math.random(choices) * choices.length)]
    playRound(playerChoice, computerChoice);
    if (rounds === roundsPlayed){
        console.log("game over!");
        rounds = 0;
        roundsPlayed = 0;
        humanScore = 0;
        computerScore = 0;
    }
    

}







