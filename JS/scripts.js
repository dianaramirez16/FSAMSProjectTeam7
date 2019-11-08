//clock variables
let time = 0;
let clockOff = true;
let clockID;
var minutes = Math.floor(time/60);
var seconds = time % 60;

//const cardsList = document.querySelectorAll('.top-panel');
function evaluateClick(clickTarget) {
    return (
        clickTarget.classList.contains('top-panel')
    );
}


const clock = document.querySelector('.clock');

const alarm = document.querySelector(".top-panel");
alarm.addEventListener('click', event => {
    const clickTarget = event.target;
    if (evaluateClick(clickTarget)) {
           if (clockOff) {
               startClock();
               clockOff = false;
           }
    }
})
//list of rooms turned into arrays
const room1List = document.querySelectorAll('.room1Grid');
const room2List = document.querySelectorAll('.room2Grid');
const room3List = document.querySelectorAll('.room3Grid');
const room4List = document.querySelectorAll('.room4Grid');
const room5List = document.querySelectorAll('.room5Grid');
const room6List = document.querySelectorAll('');


var arrayRoom1 = Array.from(room1List);
getRandomInt(arrayRoom1.length)
console.log("length array" + arrayRoom1.length)

function displayTime() { //creates timer

  clock.innerHTML = time;
  const minutes = Math.floor(time/60);
  const seconds = time % 60;
  if (seconds<10) {
    clock.innerHTML =  `${minutes}:0${seconds}`;
  } else {
    clock.innerHTML = `${minutes}:${seconds}`;
  }
  console.log("c" + seconds)
  setRoomOnFire(room1List, seconds)
}

function startClock() {
  const minutes = Math.floor(time/60);
  const seconds = time % 60;
    clockID = setInterval(() => {
        time++;
        displayTime();
    }, 1000);
}

function stopClock() {
  clearInterval(clockID);
  clockOff =true;
}
//end clock code
// being defining rooms
/*
class Room {
  constructor(name, onFire, lockedDown, sprinklers, emptyRoom)
}
*/
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setRoomOnFire(room, seconds) {
  var randomStart = getRandomInt(room.length)
  
  if ( seconds===5){
    var firstRed = (room[randomStart].style.backgroundColor = "Red")
  }

  if (seconds>8 && seconds < 12) //this will be seconds
  {
    var secondRed = room[randomStart].style.backgroundColor = "orange"

  }
    //declare array of grids contained in the room
    //randomize which grids get set on fire first
    //rooms will catch fire at different rates based on emergency type*

    //status output: heat sensor going off in room () temp rising abnormally
    //status output: checking motion sensors ...
    //status output: room is empty / room has occupants
      //if room is empty, status output: *** call emergency services
      //if room has occupants, instruct guard to call room
      //status output: CALL ROOM - give guard 5 seconds to call, if no call to room, call emergency services
      //status output: countdown timer to validate emergency while call is in progress 20,19,18,17,16,15...
        //if emergency is invalid, begin procedure to override alarm
        //if alarm is valid, but does not need fire department,
        //guard will override alarm systems and go to the room to check in person, or send someone else to check.
        //status output: SYSTEM OVERRIDE, manual restart required from site
        //if guard does not call room within 5 seconds, and room temp is still rising, turn on sprinklers
        //status output: GUARD INACTIVE: CALLING EMERGENCY SERVICES
          //if sprinklers are ineffective or do not work to stabilize fire alarms, call emergency services
          //if sprinklers are effective, still call emergency services?

}
