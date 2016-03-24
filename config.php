<?php
########## MySql details (Replace with yours) #############
$username = "username"; //mysql username
$password = "password"; //mysql password
$hostname = "localhost"; //hostname
$databasename = 'database'; //databasename

//connect to database
$mysqli = new mysqli($hostname, $username, $password, $databasename);

?>