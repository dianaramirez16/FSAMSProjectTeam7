// lightpath styles
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
const room6List = document.querySelectorAll('.kitchenGrid');
const room7List = document.querySelectorAll('.meeting1Grid');
const room8List = document.querySelectorAll('.classroomGrid');
const room9List = document.querySelectorAll('.computerLabGrid');
const room10List = document.querySelectorAll('.middleRoomGrid');
const room11List = document.querySelectorAll('.mainRoomGrid');
const room12List = document.querySelectorAll('.girlGrid');
const room13List = document.querySelectorAll('.boyGrid');
const room14List = document.querySelectorAll('.workAreaGrid');

// arrays saved to objects for rooms
var arrayRoom1 = Array.from(room1List);
var arrayRoom2 = Array.from(room2List);
var arrayRoom3 = Array.from(room3List);
var arrayRoom4 = Array.from(room4List);
var arrayRoom5 = Array.from(room5List);
var arrayRoom6 = Array.from(room6List);
var arrayRoom7 = Array.from(room7List);
var arrayRoom8 = Array.from(room8List);
var arrayRoom9 = Array.from(room9List);
var arrayRoom10 = Array.from(room10List);
var arrayRoom11 = Array.from(room11List);
var arrayRoom12 = Array.from(room12List);
var arrayRoom13 = Array.from(room13List);
var arrayRoom14 = Array.from(room14List);
//room objects
var ChristinesOffice = {
    grids: arrayRoom1,
    size: arrayRoom1.length,
    zone: 1,
    maxCapacity: 8,
    isEmpty: false,
    humanPresence: 1,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: true,
    sprinklerStatus: true,
    phone: true // phone is callable
}
var GordonsOffice = {
    grids: arrayRoom2,
    size: arrayRoom2.length,
    zone: 1,
    maxCapacity: 8,
    isEmpty: false,
    humanPresence: 1,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: true,
    sprinklerStatus: true,
    phone: true // phone is callable
}
var ArtRoom = {
    grids: arrayRoom3,
    size: arrayRoom3.length,
    zone: 1,
    maxCapacity: 8,
    isEmpty: false,
    humanPresence: 4,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: true,
    sprinklerStatus: true,
    phone: true // phone is callable
}
var CarolsOffice = {
    grids: arrayRoom4,
    size: arrayRoom4.length, //how many grid squares inside
    zone: 3,
    maxCapacity: 8,
    isEmpty: false,
    humanPresence: 1,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: true,
    sprinklerStatus: true,
    phone: true // phone is callable
}
var Office = {
    grids: arrayRoom5,
    size: arrayRoom5.length, //how many grid squares inside
    zone: 4,
    maxCapacity: 8,
    isEmpty: true,
    humanPresence: 0,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: true,
    sprinklerStatus: true,
    phone: true // phone is callable
}
var Kitchen = {
    grids: arrayRoom6,
    size: arrayRoom6.length, //how many grid squares inside
    zone: 1,
    maxCapacity: 8,
    isEmpty: false,
    humanPresence: 2,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: true,
    sprinklerStatus: true,
    phone: false // phone is callable
}
var MeetingRoom = {
    grids: arrayRoom7,
    size: arrayRoom7.length, //how many grid squares inside
    zone: 1,
    maxCapacity: 8,
    isEmpty: true,
    humanPresence: 0,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: false,
    sprinklerStatus: false,
    phone: true // phone is callable
}
var Classroom = {
    grids: arrayRoom8,
    size: arrayRoom8.length, //how many grid squares inside
    zone: 2,
    maxCapacity: 20,
    isEmpty: true,
    humanPresence: 0,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: false,
    sprinklerStatus: false,
    phone: true // phone is callable
}
var ComputerLab = {
    grids: arrayRoom9,
    size: arrayRoom9.length, //how many grid squares inside
    zone: 2,
    maxCapacity: 20,
    isEmpty: true,
    humanPresence: 0,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: false,
    sprinklerStatus: false,
    phone: true // phone is callable
}
var MiddleRoom = {
    grids: arrayRoom10,
    size: arrayRoom10.length, //how many grid squares inside
    zone: 4,
    maxCapacity: 50,
    isEmpty: false,
    humanPresence: 5,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: false,
    sprinklerStatus: false,
    phone: true // phone is callable
}
var MainRoom = {
    grids: arrayRoom11,
    size: arrayRoom11.length, //how many grid squares inside
    zone: 4,
    maxCapacity: 50,
    isEmpty: false,
    humanPresence: 8,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: false,
    sprinklerStatus: false,
    phone: true // phone is callable
}
var GirlBathroom = {
    grids: arrayRoom12,
    size: arrayRoom12.length, //how many grid squares inside
    zone: 2,
    maxCapacity: 6,
    isEmpty: true,
    humanPresence: 0,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: false,
    sprinklerStatus: false,
    phone: false // phone is callable
}
var BoyBathroom = {
    grids: arrayRoom13,
    size: arrayRoom13.length, //how many grid squares inside
    zone: 2,
    maxCapacity: 6,
    isEmpty: true,
    humanPresence: 0,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: false,
    sprinklerStatus: false,
    phone: false // phone is callable
}
var workAreas = {
    grids: arrayRoom14,
    size: arrayRoom14.length, //how many grid squares inside
    zone: 2,
    maxCapacity: 10,
    isEmpty: true,
    humanPresence: 0,
    lockStatus: false,
    heatSensor: true, //contains heat sensor
    heatSensorStatus: true, //heat sensor is working
    motionSensor: true,
    motionSensorStatus: true,
    fumesSensor: true,
    fumesSensorStatus: true,
    sprinklers: false,
    sprinklerStatus: false,
    phone: true // phone is callable
}

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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function sprinklerStatus(room){
    const status = true;
    const message = "Sprinklers are operational in "
    sendText()
return status;
// Checks the state of the sprinkler
}
function heatSensorStatus(room){
return status;
// Checks the state of the heat sensor
}
function fumesSensorStatus(room){
return status;
// Checks the state of the smoke sensor
}
function motionSensorStatus(room){
return status;
// Checks the state of the motion sensor
}
function alarmStatus(room){
    if (status == true ) {
        return true;
    } else {
        return false;
    }
// Checks the state of the alarm
}
function pathwayStatus(){
    if(alarmStatus(room) == true || sprinklerStatus(room) == true) {
        return true;
    } else {
    return false;
    }
// Checks to see state of light pathway
}






function setRoomOnFire(room, seconds) {
    var message = room + ""
    sendText()
  document.head.appendChild(styleSheet)   //this turns on the lightpath dynamically, insert into call911 method
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

//console.log("innerh " + controlPanel.textContent);
function sendText(message) {
    var node = document.createElement("P")
    //var textnode = document.createTextNode(message);
    node.innerHTML = message;
    document.getElementById("commandContainer").appendChild(node);
}
