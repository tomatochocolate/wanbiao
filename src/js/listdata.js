var lis = $(".s_goods_list li");
var arrT = [];
lis.each(function (index, ele) {
    var o = {};
    o.src = "https" + $(ele).children("a").find("img").attr("src");
    o.y_price = $(ele).find(".fenqi_price").text();
    o.s_price = $(ele).find(".s_price").children().html();
    o.name = $(ele).find(".s_goods_name").html();
    o.stitle = $(ele).find(".goods_sale").children("span").html();
    o.sale = $(ele).find(".goods_sale").children("em").html();
    o.s_shop = $(ele).find(".s_shop").html();

    arrT.push(o)
})
console.log(arrT);
