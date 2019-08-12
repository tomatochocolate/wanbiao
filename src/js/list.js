$(function () {
    let itemData;
    let oUl = $("#s_goods_list ul");

    // let ipage = 1; // 第几页
    // let num = 24;

    // init();

    // function init(page) {
    //     $.ajax({
    //         type: "get",
    //         dataType: "json",
    //         url: "../api/list.php",
    //         data: {
    //             "page": page,
    //             "num": num,
    //             // "types": types,
    //             // "order": order,
    //             // "type": type,
    //             // "content1": $(".mohu").val(),
    //             // "text1": text1,
    //             // "text2": text2

    //         },
    //         success: function (res) {
    //             console.log(res);
    //             // create(res);
    //             // console.log(res);
    //         }

    //     })
    // }


    // $.ajax({
    //     type: "get",
    //     dataType: "json",
    //     url: "../api/list.php",
    //     success: function (data) {
    //         itemData = data;
    //         data.forEach(function (item, i) {
    //             // console.log(item, i);

    //     let product = `<li goods-code="62520" data-is-boutique="${i}">
    //     <a target="_blank" href="" data-id="${i + 1}" class="s_goods_img">
    //         <img class=" lazy-load" src="${item.src}" alt=""> </a>
    //     <div class="promotionTag">
    //         <img src="//image8.wbiao.co/shop/edaa62e768a54b51aa71598ecc4eda89.png?x-oss-process=image/resize,m_pad,w_50,h_50,color_ffffff" alt="">
    //     </div>
    //     <div class="goods_txt">
    //         <p class="tPrc">
    //             <em class="month_tag">月付</em>
    //             <span class="fenqi_price">
    //                 <em>￥</em>${item.y_price}</span>
    //             <span class="s_price">¥
    //                 <em>${item.s_price}</em>
    //             </span>
    //         </p>
    //         <a target="_blank" href="https://www.wbiao.cn/goods/62520.html" class="s_goods_name elps2">${item.name}</a>
    //         <div class="goods_sale">
    //             <span class="sale_tips elps1">${item.stitle}</span> /
    //             <em class="s_sale_num">${item.sale}</em>
    //         </div>
    //         <a href="https://www.wbiao.cn/shop/13" class="s_shop">${item.s_shop}</a>
    //         <p class="sale_tags">
    //             <span>免息分期</span>
    //         </p>
    //         <div class="goods_hover">
    //             <a href="javascript:void(0);" class="add_to_keep">加入收藏</a>
    //             <a href="javascript:void(0);" class="already_keep h">已收藏</a>
    //             <a href="javascript:void(0);" class="add_to_cart">加入购物车</a>
    //         </div>
    //     </div>
    // </li>`;
    //             // console.log(product);

    //             oUl.append(product);

    //         })


    //     }
    // });
    $(oUl).on("click", ".s_goods_img", function () {
        var id = $(this).data("id");
        // console.log(id);
        window.open("../html/detail.html?" + id)
    })

    // $(oUl).on("click", ".add_to_cart", function () {
    //     $.ajax({
    //         type: "get",
    //         url: "../js/addCart.php",
    //         data: `goodid=${goodid}&price=${price}&src=${src}&num=${num}`,
    //         success: function (response) {
    //             $(".showBox").css("display", "block");
    //             var time = setInterval(function () {
    //                 $(".showBox").hide();
    //             }, 3000)

    //             $(".u-buy-close").click(function () {
    //                 $(".showBox").hide();
    //                 clearInterval();
    //             })
    //         }
    //     });

    // })


    // 分页
    var currPage = 1;
    var order = '';
    var types = '';

    function getListData(currPage, order, val1, val2) {
        $.ajax({
            type: 'get',
            url: "../api/list.php", // ajax请求路径
            dataType: "json",
            data: {
                page: currPage, //当前页数
                num: 10,
                order: order,
                type: types,
                val1: val1,
                val2: val2
            },
            success: function (data) {
                itemData = data;
                data.forEach(function (item, i) {
                    // console.log(item, i);

                    let product = `<li goods-code="62520" data-is-boutique="${i}">
                <a target="_blank" href="" data-id="${i + 1}" class="s_goods_img">
                    <img class=" lazy-load" src="${item.src}" alt=""> </a>
                <div class="promotionTag">
                    <img src="//image8.wbiao.co/shop/edaa62e768a54b51aa71598ecc4eda89.png?x-oss-process=image/resize,m_pad,w_50,h_50,color_ffffff" alt="">
                </div>
                <div class="goods_txt">
                    <p class="tPrc">
                        <em class="month_tag">月付</em>
                        <span class="fenqi_price">
                            <em>￥</em>${item.y_price}</span>
                        <span class="s_price">¥
                            <em>${item.s_price}</em>
                        </span>
                    </p>
                    <a target="_blank" href="https://www.wbiao.cn/goods/62520.html" class="s_goods_name elps2">${item.name}</a>
                    <div class="goods_sale">
                        <span class="sale_tips elps1">${item.stitle}</span> /
                        <em class="s_sale_num">${item.sale}</em>
                    </div>
                    <a href="https://www.wbiao.cn/shop/13" class="s_shop">${item.s_shop}</a>
                    <p class="sale_tags">
                        <span>免息分期</span>
                    </p>
                    <div class="goods_hover">
                        <a href="javascript:void(0);" class="add_to_keep">加入收藏</a>
                        <a href="javascript:void(0);" class="already_keep h">已收藏</a>
                        <a href="" onclick="return false;" class="add_to_cart">加入购物车</a>
                    </div>
                </div>
            </li>`;
                    // console.log(product);

                    oUl.append(product);
                    paged(data.total);

                })
            }
            // success: function (data) {
            //     var data = JSON.parse(data);

            //     var res = data.goodslist.map(function (item) {
            //         return `<li goods-code="62520" data-is-boutique="${i}">
            //         <a target="_blank" href="" data-id="${i + 1}" class="s_goods_img">
            //             <img class=" lazy-load" src="${item.src}" alt=""> </a>
            //         <div class="promotionTag">
            //             <img src="//image8.wbiao.co/shop/edaa62e768a54b51aa71598ecc4eda89.png?x-oss-process=image/resize,m_pad,w_50,h_50,color_ffffff" alt="">
            //         </div>
            //         <div class="goods_txt">
            //             <p class="tPrc">
            //                 <em class="month_tag">月付</em>
            //                 <span class="fenqi_price">
            //                     <em>￥</em>${item.y_price}</span>
            //                 <span class="s_price">¥
            //                     <em>${item.s_price}</em>
            //                 </span>
            //             </p>
            //             <a target="_blank" href="https://www.wbiao.cn/goods/62520.html" class="s_goods_name elps2">${item.name}</a>
            //             <div class="goods_sale">
            //                 <span class="sale_tips elps1">${item.stitle}</span> /
            //                 <em class="s_sale_num">${item.sale}</em>
            //             </div>
            //             <a href="https://www.wbiao.cn/shop/13" class="s_shop">${item.s_shop}</a>
            //             <p class="sale_tags">
            //                 <span>免息分期</span>
            //             </p>
            //             <div class="goods_hover">
            //                 <a href="javascript:void(0);" class="add_to_keep">加入收藏</a>
            //                 <a href="javascript:void(0);" class="already_keep h">已收藏</a>
            //                 <a href="javascript:void(0);" class="add_to_cart">加入购物车</a>
            //             </div>
            //         </div>
            //     </li>`;
            //     }).join('');
            //     $('#s_goods_list ul').html(res);
            //     console.log(data);
            //     paged(data.total);

            // }
        })
    }
    getListData(currPage, order);

    function paged(data) {
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage,
                layer = layui.layer;
            laypage.render({
                elem: 'demo2' // 容器id
                //console.log(data.total);
                ,
                count: data //总数
                ,
                limit: 10,
                curr: currPage,
                theme: '#1E9FF',
                jump: function (obj, first) {
                    currPage = obj.curr; //这里是后台返回给前端的当前页数
                    if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr  ajax 再次请求
                        getListData(currPage, order);
                    }
                }
            });
        });
    }
})