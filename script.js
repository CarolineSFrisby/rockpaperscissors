

let humanScore = 0;
let computerScore = 0;

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


function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
  if (humanChoice == "Rock" && computerChoice == "Scissors"){
    humanScore += 1;
  }
  if (humanChoice == "Scissors" && computerChoice == "Paper"){
    humanScore += 1;
  }
  if (humanChoice == "Paper" && computerChoice == "Rock"){
    humanScore += 1;
  }
  if (computerChoice == "Rock" && humanChoice == "Scissors"){
    computerScore += 1;
  }
  if (computerChoice == "Scissors" && humanChoice == "Paper"){
    computerScore += 1;
  }
  if (computerChoice == "Paper" && humanChoice == "Rock"){
    computerScore += 1;
  }
}

function playGame(){
  for(let i = 0; i<5; i++){
    playRound(getHumanChoice(), getComputerChoice());
  }
}
playGame();

console.log(humanScore);
console.log(computerScore);

if (humanScore > computerScore){
  console.log("You Win!");
}
if (humanScore < computerScore){
  console.log("You Lose!");
}
if (humanScore == computerScore){
  console.log("You Tie!");
}
