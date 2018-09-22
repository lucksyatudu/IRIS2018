<?php
	header("Access-Control-Allow-Origin: *");

	include "login.php";

	$link = new mysqli($host, $username, $password, $dbname) or die("Unable to connect to MySQL");
	$sel = mysqli_query($link,"select * from event_details where type = 1");
	$data = array();
	while ($row = mysqli_fetch_array($sel)) {
	 $data[] = array(
	 	"ID"=>$row['ID'],
	 	"name"=>$row['name'],
	 	"tagline"=>$row['tagline'],
	 	"namePOC1"=>$row['POC1_name'],
	 	"contactPOC1"=>$row['POC1_contact'],
	 	"emailPOC1"=>$row['POC1_email'],
	 	"namePOC2"=>$row['POC2_name'],
	 	"contactPOC2"=>$row['POC2_contact'],
	 	"emailPOC2"=>$row['POC2_email'],
	 	"about"=>$row['about'],
	 	"format"=>$row['format'],
	 	"rules"=>$row['rules'],
	 	"logo"=>$row['logo'],
	 	"smURL"=>$row['social_media'],
	 	"regURL"=>$row['register_url'],
	 	"regStart"=>$row['register_start'],
	 	"regEnd"=>$row['register_end'],
	 	"type"=>$row['type']
	 	);
	}
	$result_json = json_encode($data);
	echo $result_json;
	$link->close();
?>