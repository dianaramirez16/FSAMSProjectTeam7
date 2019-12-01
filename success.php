<?php
session_start();
if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] == false) {
  header("Location:admin.php");
}
 ?>

<h2> you have been logged in</h2>
