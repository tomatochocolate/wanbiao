<?php
    header("Content-Type: text/html;charset=utf-8"); 
    $price=$_REQUEST["price"];
    $goodid=$_REQUEST["goodid"];
    $num=$_REQUEST["num"];
    $src=$_REQUEST["src"];  
    $total=$price*$num;

    $conn=new mysqli("127.0.0.1","root","","wanbiao");
    $sql="SELECT * FROM w_cart WHERE goodid='$goodid'";
    $res=mysqli_query($conn,$sql);
    $row=mysqli_num_rows($res);
    echo "已有行".$row;
    if($row==0){
        $insetSql="INSERT INTO `w_cart`(`goodid`, `cartid`, `num`, `price`, `total`, `isActive`) VALUES ('$goodid',NULL,$num,'$price','$total',1)";
        $res=mysqli_query($conn, $insetSql);
    }else{
     /* 先查询先前的内容 + 个数 */
        $data = mysqli_fetch_all($res,MYSQLI_ASSOC);
        $nums = $data[0]["num"] + $num;
        $totals = $data[0]["price"] * $nums;
        /* 更新 */
        $updateSql = "UPDATE w_cart SET num='$nums',total='$totals' WHERE goodid='$goodid'"; 
        $res=mysqli_query($conn,$updateSql);
    }
    if($res){
        echo "success";
    }else{
        echo "error";
    }
?>