<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/styles.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet">
    <!--script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
    <title>Fire Safety Alarm Management System</title>

  </head>
  <body>
        <!--code for login popup-->


    <div class='popup'>
      <div class='popupStyles'>
      <h1>Access: Log In</h1>
      <p>
      you must login to access control panel
      <br/>
      <br/>
      <a href='' class='close'>Close</a>
      </p>
      </div>
    </div>
    <!--div class='popup911'>
      <div class='stylesE'>
      <h1>EMERGENCY SERVICES HAVE BEEN CALLED</h1>
      <h1>PLEASE EVACUATE THE BUILDING</h1>
      </div>
    </div-->
    <!--END code for login popup-->


    <div id="container"
      <nav>
        <section class="top-panel">

          <div id="clockbox"></div>
          <a id="systemStatus">System Status: On</a> |
          <a class="simFire" href="#">Simulate Fire</a> |
          <a href="#">Emergency Drill</a> |
          <a href="#">ACCESS</a>
          <a href="login.php">Login</a>
          <div class="clock-panel">
            <span>Time Elapsed Since Alert:</span>
            <span class="clock">0:00</span>
          </div>
        </section>

      </nav>
      <div class="bottom">




        <div id ="left-side">
          <div id="commandContainer" class="commandContainer">
            <p>Goodmorning, authorized user you have been logged in.</p>

          </div>
          <div class="spacer"></div> <!-- creates blank space between divs-->
          <div class="override-panel">
            <h3>Override Panel</h3>

            <button id="call911" onclick="run911Modal();">Call 911</button>
            <button id ="lockDownButton">Lock All</button>
            <button id="shutOffButton" onclick="stopClock();">Shut OFF</button>
          </div>
        </div> <!-- end left sidebar-->


        
    </div>
    <script src="JS/scripts.js"></script>
  </body>
</html>
