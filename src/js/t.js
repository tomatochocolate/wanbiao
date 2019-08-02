var lis = $(".s_goods_list li");
console.log(lis);
var arrT = [];
lis.each(function (index, ele) {
    var o = {};
    o.src = "https" + $(ele).children("a").find("img").attr("src");
    o.active = $(ele).find(".promotionTag img").attr("src");
    o.name = $(ele).find(".s_goods_name").html();

    arrT.push(o)
})
console.log(arrT);
