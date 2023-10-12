let randomNumber = Math.floor(Math.random() * 100) + 1;

let userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

while (userGuess !== randomNumber) {
  if (userGuess < randomNumber) {
    alert("Too low! Guess again.");
  } else {
    alert("Too high! Guess again.");
  }
  userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
}

alert("Congratulations! You guessed the number.");