<?php
	header("Access-Control-Allow-Origin: *");

	include "login.php";

	$link = new mysqli($host, $username, $password, $dbname) or die("Unable to connect to MySQL");
	$sel = mysqli_query($link,"select * from envision");
	$data = array();
	while ($row = mysqli_fetch_array($sel)) {
	 $data[] = array(
	 	"ID"=>$row['ID'],
	 	"name"=>$row['name'],
	 	"desig"=>$row['desig'],
	 	"company"=>$row['company'],
	 	"img"=>$row['img']
	 	);
	}
	$result_json = json_encode($data);
	echo $result_json;
	$link->close();
?>