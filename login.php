<?php

  session_start();

  $username = "user";
  $password = "password";

  if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
    header("Location: success.php");
  }

  if(isset($_POST['username']) && isset($_POST['password'])) {
    if($_POST['username'] == $username && $_POST['password'] == $password)
    {
      $_SESSION['loggedin'] == true;
      header("Location: success.php");
    }
  }
 ?>


<!Doctype HTML>
<h1>Access Denied, try again in <a href="index.php">index.php</a></h1>
