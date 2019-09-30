let clockOff = false;
let time = 0;
let clockId;

function displayTime() { //creates timer
  let minutes = Math.floor(time/60);
  let seconds = time % 60;
  let clock = document.querySelector('.clock');
  clock.innerHTML = time;
  if (seconds<10) {
    clock.innerHTML =  `${minutes}:0${seconds}`;
  } else {
    clock.innerHTML = `${minutes}:${seconds}`;
  }
}

function startClock() {
    if (clockOff) {
            startClock();
            clockOff = false;
        }
    clockID = setInterval(() => {
        time++;
        displayTime();
    }, 1000);
}

function stopClock() {
  clearInterval(clockID);
  clockOff =true;
}:
startClock();