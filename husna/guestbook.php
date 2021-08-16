<?php

$link = mysqli_connect("localhost", "hipqgiqf_guest", "sFe712cB3U", "hipqgiqf_guest");

// Check connection
if ($link === false) {
	die("ERROR: Could not connect. " . mysqli_connect_error());
}

$nama = mysqli_real_escape_string($link, $_REQUEST['nama']);
$ucapan = mysqli_real_escape_string($link, $_REQUEST['ucapan']);

// Attempt insert query execution
$sql = "INSERT INTO buku_tamu (nama, ucapan, status) VALUES ('$nama', '$ucapan', 'Y')";
if (mysqli_query($link, $sql)) {
	header("Location:https://fare4z.tech/zattil");
	// echo "Records inserted successfully.";

} else {
	echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
	header("Location:https://fare4z.tech/zattil");
}

// Close connection
mysqli_close($link);
