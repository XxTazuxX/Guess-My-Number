"use strict";
// Html query select (DOM)
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let highScore = document.querySelector(".highscore");
let body = document.querySelector("body");

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

//InIt Value
let scoreValue = 20;
let highScoreValue = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Number guess check
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage("⛔ No Number!");

    //  When guess is right
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    number.textContent = secretNumber;

    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    if (scoreValue > highScoreValue) {
      highScoreValue = scoreValue;
      highScore.textContent = highScoreValue;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (scoreValue > 1) {
      displayMessage(guess > secretNumber ? "📈 To High" : "📉 To Low");
      scoreValue--;
      displayScore(scoreValue);
    } else {
      displayMessage("💥 You lost the game");
      displayScore(0);
    }
  }
});

// Again play
againBtn.addEventListener("click", function () {
  scoreValue = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  number.textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  displayScore(scoreValue);

  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
});
