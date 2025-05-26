let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Type 'rock', 'paper', or 'scissors'");
  return userInput.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice === "scissors") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log(`It's a draw! ${humanChoice} doesn't beat ${computerChoice}`);
    humanScore = humanScore;
    computerScore = computerScore;
  }
  let roundResults = `You score ${humanScore} and your opponent score ${computerScore}`;
  return roundResults;
}

function playGame() {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  let finalResults = `Final Results: 
  You scored: ${humanScore}. Your opponent scored: ${computerScore}. ${
    humanScore > computerScore ? "You Won!" : "You Lost"
  }`;
  return finalResults;
}

console.log(playGame());
