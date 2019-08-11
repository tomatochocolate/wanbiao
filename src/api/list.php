<?php
    $con = mysqli_connect("127.0.0.1", "root", "", "wanbiao");

    
    $sql = "SELECT * FROM w_list";  
    
    $result = mysqli_query($con,$sql);
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($data);
    

//     $page = isset($_GET['page']) ? $_GET['page'] : '';//第几页
//     $num = isset($_GET['num']) ? $_GET['num'] : '';//每页多少条
//     $type = isset($_GET['type']) ? $_GET['type'] : '';
//     $order = isset($_GET['order']) ? $_GET['order'] : '';
   
    
//     //1.写sql语句
//     $index = ($page - 1) * $num;
//     //没有排序之前只需要获取第一页
//     if($type) {
//         //有排序
//         $sql = "SELECT * FROM w_list ORDER BY $type $order LIMIT $index,$num";
//     }else {
//         //没有排序
//         $sql = "SELECT * FROM w_list LIMIT $index,$num";
//     }

//     $res = $conn->query($sql);
    
// //  var_dump($res);//结果集，想要内容
    
//     //3.获取结果集里面的内容
//     $content = $res->fetch_all(MYSQLI_ASSOC);
    
// //  var_dump($content);//结果集，想要内容
// //  echo json_encode($content,JSON_UNESCAPED_UNICODE);
    
//     //2.获取总条数
//     $sql2 = 'SELECT * FROM w_list';
    
//     //执行语句
//     $res2 = $conn->query($sql2);


//     // $res3=$conn->query($sql3);
    

// //  var_dump($res2);

//     //关联数组：存多一点数据再给前端
//     $data = array(
//         'total' => $res2->num_rows,//总条数
//         'goodslist' => $content,
//         'page' => $page,
//         'num' => $num,
//     );
    
//     echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>