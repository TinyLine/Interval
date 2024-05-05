var element = document.getElementById("movingElement");

element.addEventListener("click", function () {
  clearInterval(element.intervalId);
  element.intervalId = setInterval(function () {
    var randomX = Math.floor(Math.random() * window.innerWidth);
    var randomY = Math.floor(Math.random() * window.innerHeight);

    element.style.left = randomX + "px";
    element.style.top = randomY + "px";
  }, 1000);
});
