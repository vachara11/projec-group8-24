<?php

    //เข้ารหัส
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT, DETECT');
    header('Access-Control-Allow-Headers: token,Content-Type');
    header('Access-Control-Max-Age:1278000');
    header('Content-Length:0');
    header('Content-Type: text/plain');

    // ประกาศตัวแปร ในการเชื่อมต่อระบบฐานข้อมูล
    $hostAPI = "localhost"; //ชื่อ Host
    $userAPI = "root";  //username ของ Xampp
    $passAPI = ""; //รหัสผ่านของ Xampp
    $dbNameAPI = "project08"; //ชื่อฐานข้อมูล

    $conn = mysqli_connect($hostAPI, $userAPI, $passAPI,$dbNameAPI) or die(" ไม่สามารถเชื่อมต่อฐานข้อมูลได้");
    mysqli_set_charset($conn,"utf8");
?>