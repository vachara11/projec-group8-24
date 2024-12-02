<?php
include('config.db.php'); // ดึงไฟล์เชื่อมต่อฐานข้อมูลมาใช้งาน
header("Content-Type: application/json");

$message = [];

try {
    if (!isset($_FILES['image']) || $_FILES['image']['error'] != UPLOAD_ERR_OK) {
        throw new Exception("รูปภาพไม่ถูกต้อง");
    }

    $image = $_FILES['image'];
    $imagePath = 'uploads/' . basename($image['name']);

    if (!move_uploaded_file($image['tmp_name'], $imagePath)) {
        throw new Exception("อัปโหลดรูปภาพไม่สำเร็จ");
    }

    $dataJSON = $_POST;
    $name = $dataJSON['name'];
    $price = $dataJSON['price'];
    $detail = $dataJSON['detail'];

    $sql = "INSERT INTO `products` (`name`, `price`, `detail`, `image`, `created_at`) VALUES ('$name', '$price', '$detail', '$imagePath', NOW());";

    $qr_insert = mysqli_query($conn, $sql);

    if ($qr_insert) {
        http_response_code(201);
        $message['status'] = "เพิ่มข้อมูลสำเร็จ";
    } else {
        throw new Exception("เพิ่มข้อมูลไม่สำเร็จ: " . mysqli_error($conn));
    }
} catch (Exception $e) {
    http_response_code(422);
    $message['status'] = $e->getMessage();
}

echo json_encode($message);
?>
