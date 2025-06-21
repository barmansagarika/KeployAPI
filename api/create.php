<?php
include 'db.php';
$data = json_decode(file_get_contents("php://input"));
$stmt = $conn->prepare("INSERT INTO books (title, author, year) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $data->title, $data->author, $data->year);
$stmt->execute();
?>