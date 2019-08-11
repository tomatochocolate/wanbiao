<?php
    $con = mysqli_connect("127.0.0.1", "root", "", "wanbiao");
    $gooid = isset($_REQUEST["goodid"])?$_REQUEST["goodid"]:'2';


     $sql = "SELECT * FROM w_list WHERE goodid = $gooid" ; 
     $result = mysqli_query($con,$sql);
     $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
     echo json_encode($data);
// 
?>