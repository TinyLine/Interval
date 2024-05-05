let count = 1;

const timerId = setInterval(() => {
  if (count <= 5) {
    alert(count);
    count++;
  } else {
    clearInterval(timerId);
  }
}, 1000);
