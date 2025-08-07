let humanScore = 0;
let computerScore = 0;

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const messageDisplay = document.createElement("div");
const scoreDisplay = document.createElement("div");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);
document.body.appendChild(messageDisplay);
document.body.appendChild(scoreDisplay);

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

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  if (humanChoice === "rock" && computerChoice === "paper") {
    messageDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    messageDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    messageDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice === "scissors") {
    messageDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    messageDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    messageDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else {
    messageDisplay.textContent = `It's a draw! ${humanChoice} doesn't beat ${computerChoice}`;
  }

  scoreDisplay.textContent = `Your Score: ${humanScore}, Computer Score: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      messageDisplay.innerHTML += "<br> You reached 5 points and won!!!";
    } else {
      messageDisplay.innerHTML += "<br> Computer reached 5 points and won!!!";
    }
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}
