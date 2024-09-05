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

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playRound(humanChoice, computerChoice){
    console.log(computerChoice);
    if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore = computerScore+1;
        let result = "you lose";
        console.log(result);
    } 

    if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore = computerScore+1;
        let result = "you lose";
        console.log(result);
    }

    if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore = computerScore+1;
        let result = "you lose";
        console.log(result);
    }

    if (humanChoice == "scissors" && computerChoice == "paper"){
        computerScore = computerScore+1;
        let result = "you win";
        console.log(result);
    }

    if (humanChoice == "paper" && computerChoice == "rock"){
        computerScore = computerScore+1;
        let result = "you win";
        console.log(result);
    }

    if (humanChoice == "rock" && computerChoice == "scissors"){
        computerScore = computerScore+1;
        let result = "you win";
        console.log(result);
    }




}

playRound(humanSelection, computerSelection);



