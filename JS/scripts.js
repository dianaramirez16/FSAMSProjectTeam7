
//clock variables
let clockOff = true;
let time = 0;
let clockID;
const clock = document.querySelector('.clock');

const cardsList = document.querySelectorAll('.top-panel');
function evaluateClick(clickTarget) {
    return (
        clickTarget.classList.contains('top-panel')
    );
}



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

function displayTime() { //creates timer
  const minutes = Math.floor(time/60);
  const seconds = time % 60;

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

const room1List = document.querySelectorAll('.room1Grid');
var myArr = Array.from(room1List);
getRandomInt(myArr.length)
console.log(myArr.length)
myArr[(getRandomInt(myArr.length))].style.backgroundColor = "Red"
//prints all classes type and id's


//pass array to this function
function setRoomOnFire(room) {
  startClock()
  const seconds = clock.innerHTML;
  getRandomInt(room.length)
  var firstRed = (room[(getRandomInt(room.length))].style.backgroundColor = "Red")
  //firstRed.style.opacity = "0.5";
  console.log("first red=" + firstRed);
  console.log("seconds=" + seconds);
  if (seconds==5) //this will be seconds
  {
    var secondRed = room[(getRandomInt(room.length))].style.backgroundColor = "blue"
    console.log("secondred=" + secondRed);
  } else {

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

setRoomOnFire(room1List)
