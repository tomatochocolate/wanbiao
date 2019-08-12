$(function () {
    function getCatInfo() {
        $.ajax({
            type: "post",
            url: "../api/getCatData.php",
            dataType: "json",
            success: function (data) {
                itemData = data
                let count = 0;
                console.log(data);
                let res = data.map((ele, index) => {
                    if (ele.isActive == 1) {
                        count++;
                    }
                    return `<div class="goods_floor clearfix" data-goods-code="65568" data-cart-id="0">
                    <div class="goods_info fl clearfix">
                        <div class="goods_right clearfix">
                            <span class="select_tik ${ele.isActive == 1 ? "on" : ""}">
                                <i class="icon-a-c-check01-1"></i>
                                <i class="icon-a-c-check01-2 "></i>
                            </span>
                            <a href="/goods/65568" target="_blank">
                                <div class="goods_img fl">
                                    <img src="${ele.src}" alt="">
                                </div>
                                <div class="goods_txt fl">
                                    <div class="goods_a">
                                        <p class="p1">${ele.name}</p>
                                        <p class="specifications">钢 黑色 PVD镀金 不锈钢</p>
                                    </div>
                                </div>
                            </a>
                            <ul class="fr">
                                <li class="unit_price"> ¥
                                    <em>${ele.price}</em>
                                </li>
                                <li class="goods_num">
                                    <span class="reduce calc-btns">-</span>
                                    <input type="text" class="num" value="${ele.num}" data-stock="1" readonly="">
                                    <span class="add calc-btns">+</span>
                                </li>
                                <li class="total_price">¥
                                    <em class="subTotal">${ele.total}</em>
                                </li>
                                <li class="others">
                                    <a href="javascript:void(0);" class="delete_goods">删除</a>
                                    <a href="javascript:void(0);" class="to_collection">移入收藏</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                }).join("");
                $(".W_store_floor").html(res);
                getTotalPrice(data);
                $("#selectedQuantity").text(count);
                // if (count == data.length) {
                //     $(".check-all").addClass("checkbox-checked");
                // } else {
                //     $(".check-all").removeClass("checkbox-checked");
                // }

                // $(".my-cart-tit").children("span").text(data.length);
                // getTotalPrice(data);
                // $(".pieces").children("em").text(count);
                // if (count == 0) {
                //     $(".cart-gopay-btn").children("a").removeClass("done");
                // } else {
                //     $(".cart-gopay-btn").children("a").addClass("done");
                // }
            }
        })
    }
    getCatInfo();

    $(".W_store_floor").on("click", ".select_tik ", function (e) {
        let index = $('.select_tik').index($(this));
        // console.log(index);

        goodid = itemData[index - 1].goodid;
        let flag = $(this).hasClass("on");
        console.log(flag);

        if (flag) {
            isActive = 0;
        } else {
            isActive = 1;
        }
        updateSelect();
    })

    function updateSelect() {
        $.ajax({
            type: "get",
            url: "../api/updateselect.php",
            dataType: "json",
            data: `goodid=${goodid}&isActive=${isActive}`,
            success: function (data) {
                getCatInfo();

            }
        })
    }

    function getTotalPrice(data) {
        var res = 0;
        data.forEach(element => {
            if (element.isActive == 1) {
                res += element.total * 1;
            }
        });
        $("#payableAmount").text(res.toFixed(1));
        $("#goodsAmount").text(res.toFixed(1));

    }



    // 加
    $(".W_store_floor").on("click", ".add", function () {
        console.log("add");

        let index = $(".add").index($(this));
        num = $(this).prev().val();
        console.log(num);

        num++;
        price = itemData[index].price;
        goodid = itemData[index].goodid;
        addwithcut();
    })

    // 减
    $(".W_store_floor").on("click", ".reduce", function () {
        console.log("reduce");

        let index = $(".reduce").index($(this));

        num = $(this).next().val();
        if (num > 1) {
            num--;
            price = itemData[index].price;
            goodid = itemData[index].goodid;
            addwithcut();
        }
    })

    //删除
    $(".W_store_floor").on("click", ".delete_goods", function () {
        let index = $(".delete_goods").index($(this));
        console.log(index);

        goodid = itemData[index].goodid;
        isActive = -1;
        updateSelect();
    })

    // addwithcut
    function addwithcut() {
        $.ajax({
            type: "get",
            url: "../api/addwithcut.php",
            dataType: "json",
            data: `goodid=${goodid}&price=${price}&num=${num}`,
            success: function (data) {
                getCatInfo();
                // console.log(data);

            }
        })
    }
})