<?php
$row = 1;
if (($handle = fopen("hawkers.csv", "r")) !== FALSE) {
	while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
		$num = count($data);
		//echo "<p> $num fields in line $row: <br /></p>\n";
		$row++;
		for ($c=0; $c < $num; $c++) {
			// echo $data[$c] . "<br />\n";
		}
		//echo "WRITE: $data[0] " . $data[1] . "\n";
		$geodec = "http://maps.googleapis.com/maps/api/geocode/json?address=" . urlencode($data[1]) .  "&sensor=false";
		$test = json_decode(file_get_contents($geodec));
		//print_r($test);
		//echo $test->status;
		echo $data[0] . ":";
		if ($test->status == "OK") {
			echo $test->results[0]->geometry->location->lat . ":";
			echo $test->results[0]->geometry->location->lng;
		}
		echo "\n";
		//return;
	}
	fclose($handle);
}
?>
