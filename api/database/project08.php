<?php
    include('../config.db.php');  // นำไฟล์เชื่อมต่อกับฐานข้อมูลมาใช้
    $table = "CREATE TABLE products(
    id int(6) AUTO_INCREMENT COMMENT 'รหัสสินค้า',
    name varchar(100) COMMENT 'ชื่อสินค้า',
    price varchar(100) COMMENT 'ราคาสินค้า',
    detail varchar(100) COMMENT 'รายละเอียดสินค้า',
    image varchar(100) NULL COMMENT 'ภาพสินค้า',
    created_at TIMESTAMP NOT NULL COMMENT 'วันที่ทำรายการ',
    PRIMARY KEY (id)
    )";

    if($conn->query($table) === TRUE){
        echo "สร้างตารางสำเร็จ";
    }else{
        echo "สร้างตารางไม่สำเร็จ" .$conn->error;
    }
    $conn->close();
?>