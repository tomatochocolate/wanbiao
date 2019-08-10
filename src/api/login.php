<?php
    $con = mysqli_connect("127.0.0.1", "root", "", "wanbiao");

    $mobile = $_REQUEST["mobile"];
    $password = $_REQUEST["password"];
    # 获取所有的商品信息
    $sql = "SELECT * FROM  w_user WHERE mobile = '$mobile'";
    $result = mysqli_query($con,$sql);
    $data = array("status" => "", "msg" => "", "data" => "");
    if(mysqli_num_rows($result) == "0")
    {
      $data["status"] = "error";
      $data["msg"] = "登录失败：该用户不存在";
    }else{
      /* 检查密码是否正确 */
      if(mysqli_fetch_array($result)["password"] != $password)
      {
        $data["status"] = "error";
        $data["msg"] = "登录失败：密码不正确！";
      }else{
        $data["status"] = "success";
        $data["msg"] = "恭喜你，登录成功！";
      }
    }

    echo json_encode($data, true);
?>