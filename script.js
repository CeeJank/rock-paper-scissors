console.log('hello world');

const arr = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = arr[Math.floor((Math.random() * arr.length))];
    return computerChoice;
}

function getHumanChoice() {
    const humanSelection = prompt("Choose");
    return humanSelection;
}

function playRound(humanChoice, computerChoice){
    console.log(computerChoice);
    if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore+=1;
        let result = "You lose! Paper beats Rock!";
        console.log(result);
    } 

    if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore+=1;
        let result = "You lose! Scissors beats Paper!";
        console.log(result);
    }

    if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore+=1;
        let result = "You lose! Rock beats Scissors!";
        console.log(result);
    }

    if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore+=1;
        let result = "You win! Scissors beats paper!";
        console.log(result);
    }

    if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore+=1;
        let result = "You win! Paper beats rock!";
        console.log(result);
    }

    if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore+=1;
        let result = "You win! Paper beats rock!";
        console.log(result);
    }

    if (humanChoice === computerChoice){
        console.log("draw")
    }
}

function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
}

for (i = 5; i > 0; i--) {
    playGame();
}


if (humanScore > computerScore){
    console.log("congratulations you win!")
} else {
    console.log("too bad you lost!")
}




