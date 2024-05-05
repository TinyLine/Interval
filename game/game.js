let score = 0;
let clicks = 0;
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const clicksDisplay = document.getElementById("clicks");

target.addEventListener("click", () => {
  score++;
  clicks++;
  scoreDisplay.textContent = score;
  clicksDisplay.textContent = clicks;
});

function generateRandomPosition() {
  const maxWidth = window.innerWidth - 100;
  const maxHeight = window.innerHeight - 100;
  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);
  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

function startGame(durationInSeconds) {
  let interval = setInterval(() => {
    generateRandomPosition();
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    target.style.display = "none";
    alert(`Game Over! Your Score: ${score}`);
  }, durationInSeconds * 1000);
}

startGame(30);
