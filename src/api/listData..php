<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $con = mysqli_connect("127.0.0.1","root","","wanbiao");
    
    // $query = "set names utf8";
    // $result = $con->query($query);

    $json = file_get_contents("listData.json");

    $data = json_decode($json,true);

    for($i = 0;$i < count($data);$i++)
    {
      $name = $data[$i]["name"];
      $src = $data[$i]["src"];
      $s_price = $data[$i]["s_price"];
      $y_price = $data[$i]["y_price"];
      $stitle = $data[$i]["stitle"];
      $sale = $data[$i]["sale"];
      $s_shop = $data[$i]["s_shop"];
      $sql = "INSERT INTO `w_list` (`goodid`, `src`, `y_price`, `s_price`, `name`, `stitle`, `sale`,`s_shop`) VALUES ('$i', '$src', '$y_price', '$s_price', '$name', '$stitle', '$sale','$s_shop')";
      $result = mysqli_query($con,$sql);
    }
?>