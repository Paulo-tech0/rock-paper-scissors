const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");
const RESULTS = document.querySelector(".results");
const SCORE = document.querySelector(".score");
let humanScore = 0;
let computerScore = 0;
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

function playRound(event){
    let computerChoice = getComputerChoice();
    let humanChoice = event.target.getAttribute("class");
    if (humanChoice==="rock"&&computerChoice==="scissors"){
      RESULTS.textContent = "Player wins! Rock beats scissors.";
      humanScore += 1;
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    else if (humanChoice==="paper"&&computerChoice=="rock"){
      RESULTS.textContent = "Player wins! Paper beats rock.";
      humanScore += 1;
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    else if (humanChoice==="scissors"&&computerChoice==="paper"){
      RESULTS.textContent = "Player wins! Scissors beats paper.";
      humanScore += 1;
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    else if (computerChoice==="rock"&&humanChoice==="scissors"){
      RESULTS.textContent = "Computer wins! Rock beats scissors.";
      computerScore += 1;
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    else if (computerChoice==="paper"&&humanChoice=="rock"){
      RESULTS.textContent = "Computer wins! Paper beats rock.";
      computerScore += 1;
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    else if (computerChoice==="scissors"&&humanChoice==="paper"){
      RESULTS.textContent = "Computer wins! Scissors beats paper.";
      computerScore += 1;
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    else {
      RESULTS.textContent = "It is a tie! Player and computer choose the same option.";
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    }