let humanScore, computerScore;
humanScore = 0;
computerScore = 0;

function getComputerChoice(){
  let randomNumber;
  randomNumber = Math.floor(Math.random()*3);
  if (randomNumber === 0){
    return "rock";
  }
  else if (randomNumber === 1){
    return "paper";
  }
  else {
    return "scissors";
  }
}

function getHumanChoice(){
  let humanChoice;
  humanChoice = prompt("Choose an option:\nrock\npaper\nscissors");
  humanChoice = humanChoice.toLowerCase(); //convert the string to lowercase
  humanChoice = humanChoice.trim(); //remove whitespaces before and after
  return humanChoice;
}

function playRound(humanChoice, computerChoice){
  if (humanChoice==="rock"&&computerChoice==="scissors"){
    console.log("Player wins! Rock beats scissors.");
    humanScore += 1;
  }
  else if (humanChoice==="paper"&&computerChoice=="rock"){
    console.log("Player wins! Paper beats rock.");
    humanScore += 1;
  }
  else if (humanChoice==="scissors"&&computerChoice==="paper"){
    console.log("Player wins! Scissors beats paper.");
    humanScore += 1;
  }
  else if (computerChoice==="rock"&&humanChoice==="scissors"){
    console.log("Computer wins! Rock beats scissors.");
    computerScore += 1;
  }
  else if (computerChoice==="paper"&&humanChoice=="rock"){
    console.log("Computer wins! Paper beats rock.");
    computerScore += 1;
  }
  else if (computerChoice==="scissors"&&humanChoice==="paper"){
    console.log("Computer wins! Scissors beats paper.");
    computerScore += 1;
  }
  else {
    console.log("It is a tie! Player and computer choose the same option.");
  }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
