$(function () {
    let itemData;
    let oUl = $("#s_goods_list ul");

    let ipage = 1; // 第几页
    let num = 24;

    $.ajax({
        type: "get",
        dataType: "json",
        url: "../api/list.php",
        success: function (data) {
            itemData = data;
            data.forEach(function (item, i) {
                // console.log(item, i);

                let product = `<li goods-code="62520" data-is-boutique="${i}">
                <a target="_blank" href="" class="s_goods_img">
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
                        <a href="javascript:void(0);" class="add_to_cart">加入购物车</a>
                    </div>
                </div>
            </li>`;
                // console.log(product);

                oUl.append(product);

            })


        }
    })
})