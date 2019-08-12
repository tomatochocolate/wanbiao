$(function () {
    let itemData;
    let oUl = $(".W_detail");
    let id = decodeURI(location.search).slice(1)
    console.log(id);


    $.ajax({
        type: "get",
        dataType: "json",
        url: "../api/detail.php",
        data: "goodid=" + id,
        success: function (data) {
            itemData = data;
            console.log(itemData);
            console.log(id);

            data.forEach(function (item, i) {
                // console.log(item, i);

                let product = `<div class="detail_upper">
                <div class="detail_upper_left fl">
                    <div class="content">
                        <div class="content_zoom">
                            <div class="content_img_wrap" style="z-index: 103;">
                                <img id="zoom" src="${item.src}" data-zoom-image="//image8.wbiao.co/shop/076063912b4a4292b76d95f876372576.JPG?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center" alt=""> </div>
                            <div class="tag icon-a-g-enlarge01" id="enlarge" style="z-index: 104;"></div>
                            <div class="promotionTag" style="z-index: 104;">
                                <img src="//image8.wbiao.co/shop/edaa62e768a54b51aa71598ecc4eda89.png?x-oss-process=image/resize,m_pad,w_80,h_80,color_ffffff" alt="">
                            </div>
                            <div class="videoClose icon-d-vieo-close h"></div>
                            <div class="video videoContent h" id="videoContent" data-src="//image8.wbiao.co/" data-is-has-video="false">
                                <div class="play" id="video" style="background-color: rgb(0, 0, 0); overflow: hidden; position: relative;">
                                    <div class="ckplayerchsjopfvloqxququyk" style="background-color: rgb(0, 0, 0); width: 100%; height: 100%;">
                                        <object pluginspage="http://www.macromedia.com/go/getflashplayer" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=11,3,0,0" id="chwwbmcvkxrclgzqsq" name="chwwbmcvkxrclgzqsq" width="100%" height="100%" align="middle">
                                            <param name="allowScriptAccess" value="always">
                                            <param name="allowFullScreen" value="true">
                                            <param name="quality" value="high">
                                            <param name="bgcolor" value="#000">
                                            <param name="movie" value="https://static.wbiao.co/p/pc/js/ckplayer/1.0.1/ckplayer.swf">
                                            <param name="flashvars" value="variable=player&amp;volume=0.8&amp;autoplay=1&amp;video=%2F%2Fimage8.wbiao.co%2F&amp;playbackrate=1">
                                            <embed allowscriptaccess="always" allowfullscreen="true" quality="high" bgcolor="#000" src="https://static.wbiao.co/p/pc/js/ckplayer/1.0.1/ckplayer.swf" flashvars="variable=player&amp;volume=0.8&amp;autoplay=1&amp;video=%2F%2Fimage8.wbiao.co%2F&amp;playbackrate=1" id="chwwbmcvkxrclgzqsq" name="chwwbmcvkxrclgzqsq" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="100%" align="middle">
                                        </object>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" id="brandType" value="1">
                        <div class="content_bottom">
                            <div class="zoom_left fl">
                                <a class="bx-prev" href="">
                                    <img src="../img/icon-a-g-left01.png">
                                </a>
                            </div>
                            <div class="bottom_nr fl">
                                <div class="bx-wrapper" style="max-width: 3670px;">
                                    <div class="bx-viewport" aria-live="polite" style="width: 100%; overflow: hidden; position: relative; height: 80px;">
                                        <ul class="bxslider" style="width: 8215%; position: relative; transition-duration: 0s; transform: translate3d(0px, 0px, 0px);">
                                            <li class="" style="float: left; list-style: outside none none; position: relative; width: 80px; margin-right: 10px;" aria-hidden="false">
                                                <div>
                                                    <img src="//image8.wbiao.co/shop/ab4a1e3b1d2f422b9ce85986b9aba946.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff" data-zoom-image="//image8.wbiao.co/shop/ab4a1e3b1d2f422b9ce85986b9aba946.jpg?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center" alt="">
                                                </div>
                                            </li>
                                            <li style="float: left; list-style: outside none none; position: relative; width: 80px; margin-right: 10px;" aria-hidden="false" class="">
                                                <div>
                                                    <img src="//image8.wbiao.co/shop/6f37c1f3f94d442f92b1f8bee44bd515.JPG?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff" data-zoom-image="//image8.wbiao.co/shop/6f37c1f3f94d442f92b1f8bee44bd515.JPG?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center" alt="">
                                                </div>
                                            </li>
                                            <li style="float: left; list-style: outside none none; position: relative; width: 80px; margin-right: 10px;" aria-hidden="false" class="">
                                                <div>
                                                    <img src="//image8.wbiao.co/shop/ecfebfeaf69b48969cc018aa8965f9be.JPG?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff" data-zoom-image="//image8.wbiao.co/shop/ecfebfeaf69b48969cc018aa8965f9be.JPG?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center" alt="">
                                                </div>
                                            </li>
                                            <li style="float: left; list-style: outside none none; position: relative; width: 80px; margin-right: 10px;" aria-hidden="false" class="">
                                                <div>
                                                    <img src="//image8.wbiao.co/shop/cc094d65dbbf44d1844863d8f15b2ffc.JPG?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff" data-zoom-image="//image8.wbiao.co/shop/cc094d65dbbf44d1844863d8f15b2ffc.JPG?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center" alt="">
                                                </div>
                                            </li>
                                            <li style="float: left; list-style: outside none none; position: relative; width: 80px; margin-right: 10px;" aria-hidden="false" class="opacity">
                                                <div>
                                                    <img src="//image8.wbiao.co/shop/076063912b4a4292b76d95f876372576.JPG?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff" data-zoom-image="//image8.wbiao.co/shop/076063912b4a4292b76d95f876372576.JPG?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center" alt="">
                                                </div>
                                            </li>
                                            <li style="float: left; list-style: outside none none; position: relative; width: 80px; margin-right: 10px;" aria-hidden="true">
                                                <div>
                                                    <img src="//image8.wbiao.co/shop/55088f6737bc4292b2facb04d990826a.JPG?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff" data-zoom-image="//image8.wbiao.co/shop/55088f6737bc4292b2facb04d990826a.JPG?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center" alt="">
                                                </div>
                                            </li>
                                            <li style="float: left; list-style: outside none none; position: relative; width: 80px; margin-right: 10px;" aria-hidden="true">
                                                <div>
                                                    <img src="//image8.wbiao.co/shop/b0cbcb6ff16c46c2999056e7592d1714.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff" data-zoom-image="//image8.wbiao.co/shop/b0cbcb6ff16c46c2999056e7592d1714.jpg?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center" alt="">
                                                </div>
                                            </li>
                                            <li style="float: left; list-style: outside none none; position: relative; width: 80px; margin-right: 10px;" aria-hidden="true">
                                                <div>
                                                    <img src="//image8.wbiao.co/shop/51aaa79b632744a1b5565e4805523e02.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff" data-zoom-image="//image8.wbiao.co/shop/51aaa79b632744a1b5565e4805523e02.jpg?x-oss-process=image/resize,m_pad,w_1000,h_1000,color_ffffff/watermark,image_c2hvcC9sb2dvLWljb24ucG5n,t_100,g_center" alt="">
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="bx-controls bx-has-pager">
                                        <div class="bx-pager bx-default-pager">
                                            <div class="bx-pager-item">
                                                <a href="" data-slide-index="0" class="bx-pager-link active">1</a>
                                            </div>
                                            <div class="bx-pager-item">
                                                <a href="" data-slide-index="1" class="bx-pager-link">2</a>
                                            </div>
                                            <div class="bx-pager-item">
                                                <a href="" data-slide-index="2" class="bx-pager-link">3</a>
                                            </div>
                                            <div class="bx-pager-item">
                                                <a href="" data-slide-index="3" class="bx-pager-link">4</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="zoom_right fr">
                                <a class="bx-next" href="">
                                    <img src="../img/icon-a-g-right01.png">
                                </a>
                            </div>
                        </div>
                        <div class="content_collection">
                            <span class="js_share" data-index="66576">收藏</span>
                            <span class="content_collection_a">分享</span>
                        </div>
                    </div>
                </div>
                <div class="detail_upper_right fr">
                    <div class="upper_title">${item.name}</div>
                    <div class="upper_xuyan">${item.stitle}
                        <span class="js_more CUSTOMER-SERVICE">了解更多&gt;&gt;</span>
                    </div>
                    <div class="upper_model clearfix">
                        <div class="fl upper_model_a">
                            <span>型号:</span>
                            <span>T006.407.36.263.00</span>
                        </div>
                        <div class="fl upper_model_b">
                            <span>编号:</span>
                            <span>66576</span>
                        </div>
                        <div class="fl upper_model_c">
                            <span>品牌:</span>
                            <span>天梭</span>
                        </div>
                        <div class="fr upper_model_d">
                            <span>销量:</span>
                            <span>191</span>
                        </div>
                    </div>
                    <div class="activityId h" data-value="false"></div>
                    <div class="upper_price">
                        <div class="upper_stages  clearfix">
                            <div class="upper_stages_left fl">分期</div>
                            <div class="upper_stages_right fl">
                                <span class="upper_stages_a CUSTOMER-SERVICE">
                                    <em>￥</em>
                                    <i class="js_stages">336.7</i>x12期</span>
                                <span class="upper_stages_b poundage">
                                    <i class="icon-a-doubt"></i> 免息免手续费</span>
                            </div>
                            <div class="upper_stages_flaw" style="display: none;">
                                <p class="title-a">信用卡分期付款服务</p>
                                <p class="title-b">部分银行免息免手续费分期，详情请咨询客服</p>
                                <div class="icon clearfix">
                                    <li class="fl">
                                        <p class="icon-d-bank-1"></p>
                                        <p>招行</p>
                                    </li>
                                    <li class="fl">
                                        <p class="icon-d-bank-2"></p>
                                        <p>建行</p>
                                    </li>
                                    <li class="fl">
                                        <p class="icon-d-bank-3"></p>
                                        <p>农行</p>
                                    </li>
                                    <li class="fl">
                                        <p class="icon-d-bank-4"></p>
                                        <p>中行</p>
                                    </li>
                                    <li class="fl">
                                        <p class="icon-d-bank-5"></p>
                                        <p>广发</p>
                                    </li>
                                    <li class="fl">
                                        <p class="icon-d-bank-6"></p>
                                        <p>工行</p>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div class="upper_price_jiage clearfix">
                            <div class="upper_price_jiage_left fl">万表价</div>
                            <div class="upper_price_jiage_right fl">
                                <span class="upper_price_jiage_a">￥</span>
                                <span class="upper_price_jiage_b js_price">${item.s_price}</span>
                                <span class="upper_price_jiage_c">
                                    <em>市场价</em>
                                    <i>￥${item.y_price}</i>
                                </span>
                            </div>
                        </div>
                        <div class="upper_stages tc_stages clearfix">
                            <div class="upper_stages_left fl">领劵</div>
                            <div class="upper_stages_right fl">
                                <div class="upper_coupon_a fl">
                                    <div class="icon-d-coupon-left fl item"></div>
                                    <div class="fl item"> ¥100 七夕平台津贴</div>
                                    <div class="icon-d-coupon-right fl item"></div>
                                </div>
                                <span class="upper_coupon_text">更多</span>
                                <div class="jiao_upper_coupon icon-a-g-triangle"></div>
                                <div class="tc_upper_coupon">
                                    <div class="juan_content clearfix" data-index="false" data-value="true">
                                        <span class="tc_upper_coupon_a icon-d-coupon fl">¥100</span>
                                        <span class="tc_upper_coupon_b fl">
                                            <div class="text">七夕平台津贴</div>
                                            <div class="text2">2019.07.26-2019.08.09</div>
                                        </span>
                                        <span class="tc_upper_coupon_c fr js_coupon_juan" data-index="1953">领取</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="upper_give clearfix">
                        <div class="upper_give_left fl">配送</div>
                        <div class="upper_give_right fl">
                            <i>（顺丰包邮）</i> 16:45前支付，预计1-3个工作日内发货，支持货到付款 </div>
                    </div>
                    <div class="promise clearfix">
                        <div class="left fl">承诺</div>
                        <div class="right fl">
                            <li class="fl">
                                <i></i>
                                <span class="">正品保障</span>
                                <div class="popup" style="display: none;">全站自营直采，高于瑞士国家标准的进出仓全检机制，万表7年零假货投诉。</div>
                            </li>
                            <li class="fl">
                                <i></i>
                                <span>正规发票</span>
                                <div class="popup" style="display: none;">提供国家税务局认可的正规发票，具有售后维权法律效力。</div>
                            </li>
                            <li class="fl">
                                <i></i>
                                <span class="">假一赔三</span>
                                <div class="popup" style="display: none;">已售出名表超过45万枚，正品无假货，如有售假三倍赔偿。</div>
                            </li>
                            <li class="fl">
                                <i></i>
                                <span class="">7天退换</span>
                                <div class="popup" style="display: none;">无理由退换：除特殊商品外（特卖、私人定制、预售等）质量退换：非人为机芯故障或商品制造缺陷。</div>
                            </li>
                            <li class="fl">
                                <i></i>
                                <span class="">全球联保</span>
                                <div class="popup" style="display: none;">800+家售后服务点，完善的售后保障，可享受品牌全球联保服务。</div>
                            </li>
                            <li class="fl">
                                <i></i>
                                <span class="">免息分期</span>
                                <div class="popup" style="display: none;">与15家银行合作，招商、中行等提供免息分期购表服务。</div>
                            </li>
                            <li class="fl">
                                <i></i>
                                <span class="">实体店体验</span>
                                <div class="popup" style="display: none;">多家线下体验中心，互联网+新零售。</div>
                            </li>
                            <li class="fl">
                                <i></i>
                                <span class="">闪电发货</span>
                                <div class="popup" style="display: none;">每天16：45前下单，可当天发货。</div>
                            </li>
                            <li class="fl">
                                <i></i>
                                <span>货到付款</span>
                                <div class="popup" style="display: none;">收到货验货后再支付，可刷卡、现金、转账。</div>
                            </li>
                        </div>
                    </div>
                    <div class="service clearfix">
                        <div class="left fl">服务</div>
                        <div class="right fl">
                            <a class="fl" href="https://m.wbiao.cn/mingjiang/?from=pc_spsq" target="_blank">
                                <span>“特惠” 购表延保服务</span>
                                <i class="icon-d-choice"></i>
                            </a>
                            <a class="fl" href="https://www.wbiao.cn/wbshare/brand/?from=pc_sx" target="_blank">
                                <span>100%正品二手表库</span>
                                <i class="icon-d-choice"></i>
                            </a>
                        </div>
                        <div class="servicePopup" style="display: none;">该产品享有2年名匠保修服务</div>
                    </div>
                    <div class="upper_style clearfix">
                        <div class="upper_style_left fl">款式</div>
                        <div class="upper_style_right fl">
                            <a href="/goods/66576" class="fl upper_style_right_action">
                                <span class="upper_style_right_img fl">
                                    <img src="//image6.wbiao.co/shop/ab4a1e3b1d2f422b9ce85986b9aba946.jpg?x-oss-process=image/resize,w_50,h_50" alt="">
                                </span>
                                <span class="upper_style_right_text fl">真皮 其它</span>
                                <div class="tag icon-a-o-arrow-black"></div>
                            </a>
                            <a href="/goods/65568" class="fl ">
                                <span class="upper_style_right_img fl">
                                    <img src="//image6.wbiao.co/shop/6e8879f27e064088a0bc905ec0c6a350.jpg?x-oss-process=image/resize,w_50,h_50" alt="">
                                </span>
                                <span class="upper_style_right_text fl">钢 黑色 PVD镀金 不锈钢</span>
                            </a>
                            <a href="/goods/61286" class="fl ">
                                <span class="upper_style_right_img fl">
                                    <img src="//image6.wbiao.co/shop/027797e77336470b994ceaa36812fbec.jpg?x-oss-process=image/resize,w_50,h_50" alt="">
                                </span>
                                <span class="upper_style_right_text fl">真皮 黑色 牛皮</span>
                            </a>
                            <a href="/goods/61222" class="fl ">
                                <span class="upper_style_right_img fl">
                                    <img src="//image6.wbiao.co/shop/00027ee065b1490abbabb2d21642afe5.jpg?x-oss-process=image/resize,w_50,h_50" alt="">
                                </span>
                                <span class="upper_style_right_text fl">钢 黑色 精钢</span>
                            </a>
                            <a href="/goods/62518" class="fl ">
                                <span class="upper_style_right_img fl">
                                    <img src="//image6.wbiao.co/shop/174b825c83bc4ac3bdc4e5a7d90db9a6.jpg?x-oss-process=image/resize,w_50,h_50" alt="">
                                </span>
                                <span class="upper_style_right_text fl">真皮 银色</span>
                            </a>
                            <a href="/goods/62520" class="fl ">
                                <span class="upper_style_right_img fl">
                                    <img src="//image6.wbiao.co/shop/c7b1285ee380485f9b9743f3495c07c7.jpg?x-oss-process=image/resize,w_50,h_50" alt="">
                                </span>
                                <span class="upper_style_right_text fl">钢 银色 精钢</span>
                            </a>
                        </div>
                    </div>
                    <div class="upper_number clearfix">
                        <div class="upper_number_left fl">数量</div>
                        <div class="upper_number_right fl">
                            <div class="upper_number_right_a fl">
                                <span class="fl reduce" data-type="subtract">-</span>
                                <input type="text" value="1" class="cont fl" id="count" data-realcount="3" data-virtualcount="100" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'')">
                                <span class="fl plus" data-type="add" data-saletype="3">+</span>
                            </div>
                        </div>
                    </div>
                    <div class="upper_button clearfix">
                        <div class="upper_button_a page fl js_purchase">立即购买</div>
                        <div class="upper_button_b page fl" id="js_cart">加入购物车</div>
                        <div class="qr-code fl">
                            <p class="icon-d-goods-ma icon"></p>
                            <p class="text">手机购买</p>
                            <div class="qr-code-popup">
                                <img src="/pub/qr/?content=https://m.wbiao.cn/goods/66576.html" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detailsAd" id="detailsAd" data-code="45" data-name="名匠列表页广告_t1" data-url="https://www.mjwatch.cn/" style="cursor: pointer;margin-top: 50px;">
                <img src="//image8.wbiao.co/mall/2903481becf6497dbc23e83757dc50cb.jpg" alt="">
            </div>`;
                // console.log(product);

                oUl.append(product);

            })


        }
    });


    $(oUl).on("click", "#js_cart", function () {
        let price = $(".js_stages").text();
        console.log(price);
        let src = $("#zoom")[0].src;
        console.log(src);
        let num = $("#count")[0].value;
        console.log(num);

        $.ajax({
            type: "get",
            url: "../api/addCart.php",
            data: `goodid=${id}&price=${price}&src=${src}&num=${num}`,
            success: function (response) {
                console.log(response);

                // $(".showBox").css("display", "block");
                // var time = setInterval(function () {
                //     $(".showBox").hide();
                // }, 3000)

                // $(".u-buy-close").click(function () {
                //     $(".showBox").hide();
                //     clearInterval();
                // })
            }
        });

    })

    oUl.on("click", ".upper_button_a", function () {
        window.open("../html/cart.html")

    })
})