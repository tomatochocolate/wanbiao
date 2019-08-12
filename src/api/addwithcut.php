<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $goodid=$_REQUEST["goodid"];
    $num=$_REQUEST["num"];
    $price=$_REQUEST["price"];

    // echo $price;
    $total=$num*$price;
    // echo $total;
    $conn=new mysqli("127.0.0.1","root","","wanbiao");
    $sql="UPDATE `w_cart` SET `num`='$num',`total`='$total'WHERE goodid='${goodid}'";
    $res=mysqli_query($conn,$sql);
    echo $res;
?>