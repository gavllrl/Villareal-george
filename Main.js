
// List of possible secret words
const words = ["apple", "banana", "grape", "orange", "peach", "kiwi"];
let secretWord = words[Math.floor(Math.random() * words.length)];
let attempts = 5;

console.log("Secret word (for testing):", secretWord); // For testing

function submitGuess() {
  const input = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const guess = input.value.trim().toLowerCase();

  if (guess === secretWord) {
    message.textContent = "Congratulations! You guessed the secret word!";
    document.body.className = "win";
  } else {
    attempts--;
    if (attempts > 0) {
      message.textContent = `Incorrect guess. You have ${attempts} attempts left. Try again!`;
    } else {
      message.textContent = `Game over! The secret word was '${secretWord}'.`;
      document.body.className = "lose";
    }
  }
  input.value = "";
}

function restartGame() {
  secretWord = words[Math.floor(Math.random() * words.length)];
  attempts = 5;
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
  document.body.className = "";
  console.log("New secret word (for testing):", secretWord);
}

// Allow Enter key to submit the guess
document.getElementById("guessInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    submitGuess();
  }
});

