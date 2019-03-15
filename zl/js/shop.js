var shop_show;
var i = 1;
var n = 1;
$(function () {
    shop_show = window.setInterval("start_shop()", 2500);
});
function start_shop() {
    var imgObj = document.getElementById("img");
    var butObj = document.getElementById("but_" + i);
    imgObj.src = "images/img" + i + ".jpg";
    color();
    butObj.style.background = "#fff";
    i++;
    if (i > 8) {
        i = 1;
    }
}
function color() {
    $("#button>div").css({background: "rgba(0,0,0,0.4)"});
}
function but_stop(n, t) {
    i = n;
    var obj = document.getElementById("img");
    obj.src = "images/img" + i + ".jpg";
    color();
    window.clearTimeout(shop_show);
    t.style.background = "#fff";
}
function but_left(t) {
    i -= 1;
    if (i <= 0) {
        i = 8;
    }
    n = i;
    var obj = document.getElementById("img");
    obj.src = "images/img" + i + ".jpg";
    color();
    $("#but_" + n + "").css({background: "#fff"});
    window.clearTimeout(shop_show);
}
function but_right(t) {
    i += 1;
    if (i > 8) {
        i = 1;
    }
    n = i;
    var obj = document.getElementById("img");
    obj.src = "images/img" + i + ".jpg";
    color();
    $("#but_" + n + "").css({background: "#fff"});
    window.clearTimeout(shop_show);
}
function stop_img() {
    window.clearTimeout(shop_show);
}
function start_i() {
    shop_show = window.setInterval("start_shop()", 2500);
}
//右侧菜单显示
function show_menu(n) {
    $("#right_Min_mune").css({display: "block"});
    $("#text"+n+"").css({display: "block"});
    $("#mune01>li").css({border:"none"});
    //$("#mune" + n + "").css({borderBottom: "2px solid red"});
}
function show_text(s,t) {
    $("#mune01>li").css({border:"none"});
    $("#right_Min_text>div").css({display: "none"});
    $("#text"+s+"").css({display:"block"});
    //t.style.borderBottom="2px solid red";
}
function none() {
    $("#right_Min_mune").css({display: "none"});
}