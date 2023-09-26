let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let compChoice = Math.floor(Math.random() * choices.length);
  console.log("Comp. chooses:", choices[compChoice]);
  return choices[compChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerScore < 5 && computerScore < 5) {
    if (playerSelection === computerSelection) {
      return "It's a tie.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return "Player wins";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      playerScore++;
      return "Player wins";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore++;
      return "Player wins";
    } else {
      computerScore++;
      return "Computer wins";
    }
  } else {
    checkWinner();
  }
}

let rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  result = playRound("rock", getComputerChoice());
  let resultElement = document.querySelector(".result");
  if (result === "Player wins") {
    finalResult = handleResult("Player");
    resultElement.textContent = `Result: ${finalResult}`;
  } else if (result === "Computer wins") {
    finalResult = handleResult("Computer");
    resultElement.textContent = `Result: ${finalResult}`;
  } else {
    resultElement.textContent = "Result: It's a TIE!";
  }
});

let paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  result = playRound("paper", getComputerChoice());
  let resultElement = document.querySelector(".result");
  if (result === "Player wins") {
    finalResult = handleResult("Player");
    resultElement.textContent = `Result: ${finalResult}`;
  } else if (result === "Computer wins") {
    finalResult = handleResult("Computer");
    resultElement.textContent = `Result: ${finalResult}`;
  } else {
    resultElement.textContent = "Result: It's a TIE!";
  }
});

let scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  result = playRound("scissors", getComputerChoice());
  let resultElement = document.querySelector(".result");
  if (result === "Player wins") {
    finalResult = handleResult("Player");
    resultElement.textContent = `This round: ${finalResult}`;
  } else if (result === "Computer wins") {
    finalResult = handleResult("Computer");
    resultElement.textContent = `This round: ${finalResult}`;
  } else {
    resultElement.textContent = "This round: It's a TIE!";
  }
});

function handleResult(winner) {
  let compScore = document.querySelector(".computerScore");
  compScore.textContent = `Computer score: ${computerScore}`;

  let userScore = document.querySelector(".playerScore");
  userScore.textContent = `Player score: ${playerScore}`;

  return `${winner} WINS!!`;
}

function gameOver() {
  // write something to handle final result and winner?
}

function checkWinner() {
  let winner = playerScore > computerScore ? "Player" : "Computer";
  let resultElement = document.querySelector(".finalResult");
  resultElement.textContent = `Final result: ${winner} WINS`;
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
