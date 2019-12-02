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
    name: "Christine's Office",
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
    alarm: true,
    sprinklerStatus: true,
    phone: true // phone is callable
}
var GordonsOffice = {
    name: "Gordon's Office",
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
    alarm: true,
    fumesSensorStatus: true,
    sprinklers: true,
    sprinklerStatus: true,
    phone: true // phone is callable
}
var ArtRoom = {
    name: "Art Room/ Outreach Classroom",
    grids: arrayRoom3,
    size: arrayRoom3.length,
    zone: 1,
    maxCapacity: 8,
    isEmpty: false,
    humanPresence: 4,
    alarm: true,
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
    name: "Carol's Office",
    grids: arrayRoom4,
    size: arrayRoom4.length, //how many grid squares inside
    zone: 3,
    maxCapacity: 8,
    isEmpty: false,
    humanPresence: 1,
    alarm: true,
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
    name: "General Use Office",
    grids: arrayRoom5,
    size: arrayRoom5.length, //how many grid squares inside
    zone: 4,
    maxCapacity: 8,
    isEmpty: true,
    humanPresence: 0,
    alarm: true,
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
    name: "Kitchen",
    grids: arrayRoom6,
    size: arrayRoom6.length, //how many grid squares inside
    zone: 1,
    maxCapacity: 8,
    isEmpty: false,
    alarm: true,
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
    name: "Meeting/Tutoring Room",
    grids: arrayRoom7,
    size: arrayRoom7.length, //how many grid squares inside
    zone: 1,
    maxCapacity: 8,
    isEmpty: true,
    humanPresence: 0,
    alarm: true,
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
var Classroom = {
    name: "Outreach Classroom",
    grids: arrayRoom8,
    size: arrayRoom8.length, //how many grid squares inside
    zone: 2,
    maxCapacity: 20,
    isEmpty: true,
    humanPresence: 0,
    lockStatus: false,
    alarm: true,
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
var ComputerLab = {
    name: "Outreach/Computer Lab",
    grids: arrayRoom9,
    size: arrayRoom9.length, //how many grid squares inside
    zone: 2,
    maxCapacity: 20,
    isEmpty: true,
    humanPresence: 0,
    lockStatus: false,
    alarm: true,
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
var MiddleRoom = {
    name: "Middle Room & Music Room",
    grids: arrayRoom10,
    size: arrayRoom10.length, //how many grid squares inside
    zone: 4,
    maxCapacity: 50,
    isEmpty: false,
    humanPresence: 5,
    alarm: true,
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
var MainRoom = {
    name: "Main Room",
    grids: arrayRoom11,
    size: arrayRoom11.length, //how many grid squares inside
    zone: 4,
    maxCapacity: 50,
    isEmpty: false,
    alarm: true,
    humanPresence: 8,
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
var GirlBathroom = {
    name: "Ladies Bathroom",
    grids: arrayRoom12,
    size: arrayRoom12.length, //how many grid squares inside
    zone: 2,
    maxCapacity: 6,
    alarm: true,
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
    phone: false // phone is callable
}
var BoyBathroom = {
    name: "Lad's Bathroom",
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
    sprinklers: true,
    sprinklerStatus: true,
    phone: false,
    alarm: true
}
var workAreas = {
    name: "Student work areas",
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
    sprinklers: true,
    sprinklerStatus: true,
    phone: true,
    alarm: true
}
var lightPathObject = {
    name: "emergency lightpath",
    grids: arrayRoom13,
    size: arrayRoom13.length, //how many grid squares inside
    status: true // lightpath is working
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
  setRoomOnFire(room1List, seconds, ChristinesOffice)
  call911(seconds)
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
function lightPathStatus() {
  const status = lightPathObject.status;
  if (status===true) {
      var message = "-Emergency lightpath is operational ...";
  } else {
      var message = "-Emergency lightpath is not operational ...";
  }
  sendText(message);
return status;

  }
function sprinklerStatus(room){
    const status = room.sprinklerStatus;
    if (status ==true) {
        var message = "-Sprinklers are operational in " + room.name + "...";
    } else {
        var message = "-Sprinklers are non-operational in " + room.name + "...";
    }
    sendText(message);
return status;
// Checks the state of the sprinkler
}
function heatSensorStatus(room){
  const status = room.heatSensorStatus;
  if (status ==true) {
      var message = "-Heat sensors are operational in " + room.name + "...";
  } else {
      var message = "-Heat sensors are non-operational in " + room.name + "...";
  }
  sendText(message);
  return status;
}
function fumesSensorStatus(room){
  const status = room.fumesSensorStatus;
  if (status ==true) {
      var message = "-Fume sensors are operational in " + room.name + "...";
  } else {
      var message = "-Fume sensors are non-operational in " + room.name + "...";
  }
  sendText(message);
  return status;

}
function motionSensorStatus(room){
  const status = room.motionSensorStatus;
  if (status ==true) {
      var message = "-Motion sensors are operational in " + room.name + "...";
  } else {
      var message = "-Motion sensors are non-operational in " + room.name + "...";
  }
  sendText(message);
  return status;
}
function alarmStatus(room){
  const status = room.alarm;
  if (status ==true) {
      var message = "-Alarms are operational in " + room.name + "...";
  } else {
      var message = "-Alarms are non-operational in " + room.name + "...";
  }
  sendText(message);
  return status;
}
function call911(seconds){
  if (seconds===30){
    run911Modal()
  }
}
function setRoomOnFire(room, seconds, rmObj) {
    const message = rmObj.name + " has ellevated heat levels. call room to \n confirm emergency or override alarm procedures"
    sendText(message)
     document.getElementById('emergencyContent').style.display="block";
      document.getElementById('nonEmergencyContent').style.display="none";
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
function callRoomText(){
  const message = "Calling Christine's Office"
  sendText(message)

  var delayInMilliseconds = 5000; //1 second per 1000

  setTimeout(function() {
    const message = "Christine's Office is not answering. Emergency Services will be called"
    sendText(message)
  }, delayInMilliseconds);

}
function sendText(message) {
    var node = document.createElement("P")
    var commandLine = document.getElementById("commandContainer")
    node.innerHTML = message;
    commandLine.insertBefore(node, commandLine.childNodes[0]);
}

function runDiagnostics(){
  lightPathStatus();
  sprinklerStatus(ChristinesOffice);
  sprinklerStatus(GordonsOffice);
  sprinklerStatus(ArtRoom);
  sprinklerStatus(CarolsOffice);
  sprinklerStatus(Office);
  sprinklerStatus(Kitchen);
  sprinklerStatus(MeetingRoom);
  sprinklerStatus(Classroom);
  sprinklerStatus(ComputerLab);
  sprinklerStatus(MiddleRoom);
  sprinklerStatus(MainRoom);
  sprinklerStatus(GirlBathroom);
  sprinklerStatus(BoyBathroom);
  sprinklerStatus(workAreas);
  heatSensorStatus(ChristinesOffice);
  heatSensorStatus(GordonsOffice);
  heatSensorStatus(ArtRoom);
  heatSensorStatus(CarolsOffice);
  heatSensorStatus(Office);
  heatSensorStatus(Kitchen);
  heatSensorStatus(MeetingRoom);
  heatSensorStatus(Classroom);
  heatSensorStatus(ComputerLab);
  heatSensorStatus(MiddleRoom);
  heatSensorStatus(MainRoom);
  heatSensorStatus(GirlBathroom);
  heatSensorStatus(BoyBathroom);
  heatSensorStatus(workAreas);
  fumesSensorStatus(ChristinesOffice)
  fumesSensorStatus(GordonsOffice)
  fumesSensorStatus(ArtRoom)
  fumesSensorStatus(CarolsOffice)
  fumesSensorStatus(Office)
  fumesSensorStatus(Kitchen)
  fumesSensorStatus(MeetingRoom)
  fumesSensorStatus(Classroom)
  fumesSensorStatus(ComputerLab)
  fumesSensorStatus(MiddleRoom)
  fumesSensorStatus(MainRoom)
  fumesSensorStatus(GirlBathroom)
  fumesSensorStatus(BoyBathroom)
  fumesSensorStatus(workAreas)
  motionSensorStatus(ChristinesOffice)
  motionSensorStatus(GordonsOffice)
  motionSensorStatus(ArtRoom)
  motionSensorStatus(CarolsOffice)
  motionSensorStatus(Office)
  motionSensorStatus(Kitchen)
  motionSensorStatus(MeetingRoom)
  motionSensorStatus(Classroom)
  motionSensorStatus(ComputerLab)
  motionSensorStatus(MiddleRoom)
  motionSensorStatus(MainRoom)
  motionSensorStatus(GirlBathroom)
  motionSensorStatus(BoyBathroom)
  motionSensorStatus(workAreas)
  alarmStatus(ChristinesOffice)
  alarmStatus(GordonsOffice)
  alarmStatus(ArtRoom)
  alarmStatus(CarolsOffice)
  alarmStatus(Office)
  alarmStatus(Kitchen)
  alarmStatus(MeetingRoom)
  alarmStatus(Classroom)
  alarmStatus(ComputerLab)
  alarmStatus(MiddleRoom)
  alarmStatus(MainRoom)
  alarmStatus(GirlBathroom)
  alarmStatus(BoyBathroom)
  alarmStatus(workAreas)
}

$(function(){
  var overlay = $('<div id="overlay"></div>');
  overlay.show();
  overlay.appendTo(document.body);
  $('.popup').show();
  $('.close').click(function(){
  $('.popup').hide();
  overlay.appendTo(document.body).remove();
  return false;
});

$('.x').click(function(){
  $('.popup').hide();
  overlay.appendTo(document.body).remove();
  return false;
  });
});

$('.popup911').hide();

function run911Modal(){
  document.head.appendChild(styleSheet)   //this turns on the lightpath dynamically, insert into call911 method
  const message = "lightpath has been activated";o
  sendText(message);
  var overlay2 = $('<div id="overlay"></div>');
  overlay2.show();
  overlay2.appendTo(document.body);
  $('.popup911').show();
/*  $('.close2').click(function(){
  $('.popup911').hide();
  overlay2.appendTo(document.body).remove();
  return false;*/
}



var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+"";
document.getElementById('clockbox').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);
