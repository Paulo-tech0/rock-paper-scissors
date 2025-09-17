//console.log("It's working!");
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
