function startGame() {
  const timeInput = document.getElementById("timeInput");
  const durationInSeconds = parseInt(timeInput.value);

  if (isNaN(durationInSeconds) || durationInSeconds <= 0) {
    alert("введіть час таймера");
    return;
  }

  function endGame() {
    clearInterval(interval);
    alert(`Час вийшов`);
  }

  let interval = setInterval(() => {
    endGame();
  }, durationInSeconds * 1000);
}
