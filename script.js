

let humanScoreCounter = 0;
let computerScoreCounter = 0;

// function to return 0/1/3 to randomly choose computer option
function getRandomInt(maxNum){
  return Math.floor(Math.random() * maxNum);
}

// computer choice - randomly returns rock/paper/scissors
function getComputerChoice(){
  let computerChoice = getRandomInt(3);
  if (computerChoice == 0){
    return("Rock");
  }
  else if (computerChoice == 1){
    return("Paper");
  }
  else if (computerChoice == 2){
    return("Scissors");
  }
}

// human choice - user chooses rock/paper/scissors
function getHumanChoice(){
  let humanChoice = prompt("Choose Rock Paper or Scissors");
  if (humanChoice.toLowerCase() == "rock"){
    return("Rock")
  }
  else if (humanChoice.toLowerCase() == "paper"){
    return("Paper")
  }
  else if (humanChoice.toLowerCase() == "scissors"){
    return("Scissors")
  }
}

const humanScore = document.getElementById("humanScore");
const computerScore = document.getElementById("computerScore");
const currentComputerChoice = document.getElementById("currentComputerChoice");
const popResult = document.getElementById("popResult");
const popupWindow = document.getElementById("popupWindow");
function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
  if (humanChoice == "Rock" && computerChoice == "Scissors"){
    humanScoreCounter += 1;
  }
  if (humanChoice == "Scissors" && computerChoice == "Paper"){
    humanScoreCounter += 1;
  }
  if (humanChoice == "Paper" && computerChoice == "Rock"){
    humanScoreCounter += 1;
  }
  if (computerChoice == "Rock" && humanChoice == "Scissors"){
    computerScoreCounter += 1;
  }
  if (computerChoice == "Scissors" && humanChoice == "Paper"){
    computerScoreCounter += 1;
  }
  if (computerChoice == "Paper" && humanChoice == "Rock"){
    computerScoreCounter += 1;
  }
  humanScore.innerHTML = `Your Score: ${humanScoreCounter}`;
  computerScore.innerHTML = `Computer Score: ${computerScoreCounter}`;
  currentComputerChoice.innerHTML = `Computer Choice: ${computerChoice}`;

  if (humanScoreCounter == 5){
    popResult.innerHTML = "You Won!";
  }
  else if (computerScoreCounter == 5){
    popResult.innerHTML = "You Lost :(";
  }
}

function hideMessage(){
  popupWindow.style.display = "none";
}
