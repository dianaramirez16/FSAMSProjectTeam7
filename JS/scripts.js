let clockOff = true;
let time = 0;
let clockID;

/*
grid object
color:
motion-sensor:
sprinklers:

*/
const cardsList = document.querySelectorAll('.top-panel');

function evaluateClick(clickTarget) {
    return (
        clickTarget.classList.contains('top-panel')
    );
}


const alarm = document.querySelector('.top-panel');

alarm.addEventListener('click', event => {
    const clickTarget = event.target;
    if (evaluateClick(clickTarget)) {
           if (clockOff) {
               startClock();
               clockOff = false;
           }
    }
})

function displayTime() { //creates timer
  const minutes = Math.floor(time/60);
  const seconds = time % 60;
  const clock = document.querySelector(".clock");
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
}
//startClock();
