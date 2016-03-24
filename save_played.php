<?php
//include_once("config.php");

if (isset($_POST['data'])) {
	$value = $_POST['data'];
	$ex = explode("|", $value);
	$mysqli->query("INSERT INTO song_played(track_id,genre,title,keyword) VALUES('$ex[0]','$ex[1]','$ex[2]','$ex[3]')");
}

?>