<?php 
# 先连接数据库
$con = mysqli_connect("127.0.0.1", "root", "", "wanbiao");

$mobile = $_REQUEST["mobile"];
$password = $_REQUEST["password"];
# 获取所有的商品信息
$sql = "INSERT INTO `w_user` (`mobile`, `password`) VALUES ('$mobile', '$password')";
$result = mysqli_query($con,$sql);

# 转换为JSON数据返回
# 该方法返回PHP的数据，该数据中保存两份内容(数组 | 对象)
# mysqli_fetch_all($result, MYSQLI_NUM)   获得的数据是数组结构
# mysqli_fetch_all($result, MYSQLI_ASSOC) 获得的数据是对象结构
// $data = array("status" => "success", "msg" => "请求成功", "data" => mysqli_fetch_all($result, MYSQLI_ASSOC));
// echo json_encode($data, true);

$data = array("status"=>"", "msg"=>"", "data"=>"");
if($result)
{
  $data["status"] = "success";
  $data["msg"] = "恭喜你，注册成功！";
}else{
  $data["status"] = "error";
  $data["msg"] = "抱歉，用户名或者手机号码已经被注册了！";
}
echo json_encode($data,true);
?>