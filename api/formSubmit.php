<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');

// Check request method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
    exit();
}

// Get the data from the request
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';


// Validate the data
// if (empty($name) || empty($email) || empty($message)) {
//     echo json_encode(["success" => false, "message" => "All fields are required"]);
//     exit();
// }

// Prepare the email
$to = "cokoroji@usf.edu";
$subject = "Contact Form Submission";
$body = "Name: {$name}\nEmail: {$email}\nMessage: {$message}";
$headers = "From: {$email}\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";

// Send the email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "Message sent successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Error sending message"]);
}

?>