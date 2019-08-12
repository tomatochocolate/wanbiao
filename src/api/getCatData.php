<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $conn=new mysqli("127.0.0.1","root","","wanbiao");
    $sql = "SELECT w_cart.*,w_list.name,w_list.src FROM  w_cart,w_list WHERE w_cart.goodid = w_list.goodid";
    // echo $sql;
    $res= mysqli_query($conn,$sql);
    $data = mysqli_fetch_all($res, MYSQLI_ASSOC);
    echo json_encode($data, true);
?>