const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");
const RESULTS = document.querySelector(".results");
const SCORE = document.querySelector(".score");
let humanScore = Number(localStorage.getItem("humanScore") || 0);
let computerScore = Number(localStorage.getItem("computerScore") || 0);
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
      humanScore++;
      localStorage.setItem("humanScore",humanScore);
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    else if (humanChoice==="paper"&&computerChoice=="rock"){
      RESULTS.textContent = "Player wins! Paper beats rock.";
      humanScore++;
      localStorage.setItem("humanScore",humanScore);
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    else if (humanChoice==="scissors"&&computerChoice==="paper"){
      RESULTS.textContent = "Player wins! Scissors beats paper.";
      humanScore++;
      localStorage.setItem("humanScore",humanScore);
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    else if (computerChoice==="rock"&&humanChoice==="scissors"){
      RESULTS.textContent = "Computer wins! Rock beats scissors.";
      computerScore++;
      localStorage.setItem("computerScore",computerScore);
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    else if (computerChoice==="paper"&&humanChoice=="rock"){
      RESULTS.textContent = "Computer wins! Paper beats rock.";
      computerScore++;
      localStorage.setItem("computerScore",computerScore);
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    else if (computerChoice==="scissors"&&humanChoice==="paper"){
      RESULTS.textContent = "Computer wins! Scissors beats paper.";
      computerScore++;
      localStorage.setItem("computerScore",computerScore);
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }
    else {
      RESULTS.textContent = "It is a tie! Player and computer choose the same option.";
      SCORE.textContent = `${humanScore}(Player)X${computerScore}(Computer)`;
      }

    if (Number(localStorage.getItem("humanScore"))>=5||Number(localStorage.getItem("computerScore"))>=5){
      if (Number(localStorage.getItem("humanScore"))>Number(localStorage.getItem("computerScore"))){
      RESULTS.textContent = `Player wins!\nScore:${localStorage.getItem("humanScore")}(Player)X${localStorage.getItem("computerScore")}(Computer)`
      }
      else {
        RESULTS.textContent = `Computer wins!\nScore:${localStorage.getItem("humanScore")}(Player)X${localStorage.getItem("computerScore")}(Computer)`
      }
      humanScore = 0;
      computerScore = 0;
      localStorage.setItem("humanScore",0);
      localStorage.setItem("computerScore",0);
    }

    }

    if (Number(localStorage.getItem("humanScore"))>=5||Number(localStorage.getItem("computerScore"))>=5){
      if (Number(localStorage.getItem("humanScore"))>Number(localStorage.getItem("computerScore"))){
      RESULTS.textContent = `Player wins!\nScore:${localStorage.getItem("humanScore")}(Player)X${localStorage.getItem("computerScore")}(Computer)`
    }
    else {
      RESULTS.textContent = `Computer wins!\nScore:${localStorage.getItem("humanScore")}(Player)X${localStorage.getItem("computerScore")}(Computer)`
    }
    humanScore = 0;
    computerScore = 0;
    localStorage.setItem("humanScore",0);
    localStorage.setItem("computerScore",0);
  }