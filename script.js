const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");
ROCK.addEventListener("click", playRound);
PAPER.addEventListener("click", playRound);
SCISSORS.addEventListener("click", playRound);

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

function playRound(humanChoice, computerChoice){
  return function (event){
    humanChoice = event.target.getAttribute("class");
    computerChoice = getComputerChoice();
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
}

function playGame(){
  let humanScore, computerScore;
  humanScore = 0;
  computerScore = 0;
  
  for (i=1;i<=1;i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore>computerScore){
    console.log(`Player wins the game! ${humanScore}(Player)X${computerScore}(Computer)`);
  }
  else if (computerScore>humanScore){
    console.log(`Computer wins the game! ${humanScore}(Player)X${computerScore}(Computer)`);
  }
  else {
    console.log(`The game was a tie! ${humanScore}(Player)X${computerScore}(Computer)`);
  }
}

playGame();
