<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');

// MySQL database credentials
$servername = "sql109.epizy.com";
$username = "epiz_33391306";
$password = "Q367ZgUZrYOc2M";
$dbname = "epiz_33391306_CyberBridge_Initiative";
$dbport = "3306";

ini_set('mysqli.connect_timeout', 60);

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname, $dbport);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the data from the request
$data = json_decode(file_get_contents('php://input'), true);

// Get the data from the request
$productName = $data['productName'];
$price = $data['price'];
$cardName = $data['cardName'];
$cardNumber = $data['cardNumber'];
$expiryDate = $data['expiryDate'];
$cvc = $data['cvc'];

// Insert the data into the database
$sql = "INSERT INTO payments (productName, price, cardName, cardNumber, expiryDate, cvc) 
        VALUES ('$productName', '$price', '$cardName', '$cardNumber', '$expiryDate', '$cvc')";

if ($conn -> query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Payment successful"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();

?>