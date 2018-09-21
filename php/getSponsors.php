<?php
	header("Access-Control-Allow-Origin: *");
/*
$myFile = 'logininfo.txt';
$lines = file($myFile);
$variables = array();
//echo "abs";
foreach ($lines as $line) {
	//echo $line;
    $tempArray = explode( ": ", $line );
    $variables[$tempArray[0]] = $tempArray[1];
}

$host = $variables[server];
$username =  $variables[username];
$password = $variables[password];
$dbname = $variables[dbname];
*/
include "login.php";

$link = new mysqli($host, $username, $password, $dbname) or die("Unable to connect to MySQL");
//$link = mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
//mysql_select_db("$dbname",$link)or die("cannot select DB");

//$sql="SELECT * FROM sponsors";

//$result = mysql_query();
//$result = $link->query($sql);
$sel = mysqli_query($link,"select * from sponsors");
$data = array();
while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("name"=>$row['name'],"url"=>$row['url'],"img"=>$row['img']);
}

$result_json = json_encode($data);
//$row = mysql_fetch_array($result);

echo $result_json;
//mysql_close($conn);
//mysql_close($link);
$link->close();

?>