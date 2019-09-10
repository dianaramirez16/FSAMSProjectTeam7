function displayTime() { //creates timer
  const minutes = Math.floor(time/60);
  const seconds = time % 60;
  const clock = document.querySelector('.clock');
  clock.innerHTML = time;
  if (seconds<10) {
    clock.innerHTML =  `${minutes}:0${seconds}`;
  } else {
    clock.innerHTML = `${minutes}:${seconds}`;
  }
}

function startClock() {
  clockID = setInterval(() => {
    time++;
    displayTime();
  }, 1000);
}

function stopClock() {
  clearInterval(clockID);
  clockOff =true;
}:
