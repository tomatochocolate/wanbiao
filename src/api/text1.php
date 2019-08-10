<?php
    $con = mysqli_connect("127.0.0.1", "root", "", "wanbiao");

    # 获取所有的商品信息
    $sql = "SELECT * FROM w_list";
    $result = mysqli_query($con,$sql);
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($data);
?>