<?php
include 'db.php';
$data = json_decode(file_get_contents("php://input"));
$stmt = $conn->prepare("DELETE FROM books WHERE id = ?");
$stmt->bind_param("i", $data->id);
$stmt->execute();
?>