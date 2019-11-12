// Your CSS as text
var styles = `
    .lightPath::after {
        content: '';
        display: block;
        height: 10px;
        width: 10px;
        border: 13px solid yellow;
        border-width: 7px 7px 0 0;
        transform: translate(5px, 2px);

    }
`

var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
//document.head.appendChild(styleSheet)   //this turns on the lightpath dynamically, insert into call911 method




//clock variables
let time = 0;
let clockOff = true;
let clockID;

//const cardsList = document.querySelectorAll('.top-panel');
function evaluateClick(clickTarget) {
    return (
        clickTarget.classList.contains('simFire')
    );
}
const clock = document.querySelector('.clock');
const setFire = document.querySelector(".simFire");
setFire.addEventListener('click', event => {
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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setRoomOnFire(room, seconds) {
    var randomStart = getRandomInt(room.length)
    var secondSquare = randomStart+4
    var secondSquare2 = randomStart-4
    var thirdSquare = secondSquare+1
console.log("variables:" + randomStart+ "-"+ secondSquare+ "-" + secondSquare2+ "-" + thirdSquare)
    if ( seconds===5){
        (room[randomStart].style.backgroundColor = "Red")
    }
    if (seconds===10 && randomStart<8 ) {
        room[secondSquare].style.backgroundColor = "orange"
    } else if ( seconds===10 && randomStart>7){
        room[secondSquare2].style.backgroundColor = "orange"
    }
    if (seconds===15) {
        room[thirdSquare].style.backgroundColor = "yellow"
    }


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
/*     let borderNone = document.getElementsByClassName('lightPath');
    let i;
    for (i = 0; i < borderNone.length; i++) {
        borderNone[i].style.display = "inherit" ;
        console.log('b' +borderNone[i])
    }

 */
