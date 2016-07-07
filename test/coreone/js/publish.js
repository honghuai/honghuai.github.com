/**
 * @module scroll
 * 初始化左侧伸缩菜单栏事件
 * */
if(document.getElementById( 'trigger')) {
    new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ) );
}

/**
 * @module mp-menu
 * 触发关闭/打开菜单按钮事件
 * @param {object} e - 触发该事件的对象
 */
$("#J_aside_close").click(function(e){
    $("#trigger").trigger(e).hide();
    setTimeout(function(){
        $("#trigger").show();
    },500);
})

/**
 * @module mp-menu
 * 显示菜单控制按钮
 * */
$("html,body").click(function(){
    setTimeout(function(){
        $("#trigger").show();
    },500);
})

/**
 * @module mp-menu
 * 隐藏菜单控制按钮
 * */
$("#trigger").click(function(){
    $("#trigger").hide();
})

/**
 * @module mp-menu
 * 显示左侧栏二级菜单内容
 * */
$("#aside_detail").delegate(".a_aLi","mouseover",function() {
    $(this).addClass("active");
})

/**
 * @module mp-menu
 * 隐藏左侧栏二级菜单内容
 * */
$("#aside_detail").delegate(".a_aLi","mouseout",function() {
    $(this).removeClass("active");
})

/**
 * @module detail.html
 * 隐藏详情内容
 * */
$("body").delegate("#work_close","click",function() {
    $("#iframe_detail").fadeOut();
})
/**
 * @module detail.html
 * @method 请求上一页数据的回调函数
 * 上一页
 * */
$("#detail_page .icon_left").click(function() {
    alert("执行上一页操作");
})

/**
 * @module detail.html
 * @method 请求下一页数据的回调函数
 * 下一页
 * */
$("#detail_page .icon_right").click(function() {
    alert("执行下一页操作");
})
$(".page_home .active").click(function() {
    $("#iframe_detail").show();
    $("#iframe_detail iframe").attr("src","detail.html");
    $(window).on("load",function(){

        $("#iframe_detail").mCustomScrollbar({
            axis:"yx",
            theme:"light-thick"
        });

    });
})
/**
 * @module detail.html
 * BACK按钮动画
 * */
$("#work_close").hover(function(){
    $("#work_close").html('<div class="work_closeT" style="animation: work_closeTout 0.4s ease 0.2s both;"></div>'+
        '<div class="work_closeC" style="opacity: 1;">BACK</div>'+
        '<div class="work_closeB" style="animation: work_closeBout 0.4s ease 0.2s both;"></div>');
},function(){
    $("#work_close").html('<div class="work_closeT""></div>'+
        '<div class="work_closeC" style="opacity: 0;">BACK</div>'+
        '<div class="work_closeB""></div>');
})

/**
 * @module index.html
 * loading动画
 * */
setTimeout(function() {
    $(".spinner").remove();
    $(".container_index").removeClass("hidden");
},1000);

/**
 * @module index.html
 * 搜索条件
 * */
$("#input_search").focus(function(){
    $(".search_icon_font").hide();
})
$("#input_search").blur(function(){
    if($(this).val().replace(/^\s+|\s+$/g,"") === "") {
        $(".search_icon_font").show();
    }
})

/**
 * @module about_us.html
 * 联系我们正则表达式
 * */
function trim(str) {
    return str.replace(/^\s+|\s+$/g,"");
}
var rePhone = new RegExp(/^1[34578][0-9]{9}$/);
var reEmail = new RegExp(/^[_a-z0-9]+@([_a-z0-9]+\.)+[a-z0-9]{2,3}$/);
$("#sub_info").click(function() {
    var userName = trim($("input[name=userName]").val());
    var phone = trim($("input[name=phone]").val());
    var email = trim($("input[name=email]").val());
    if(!userName) {
        alert("请输入您的姓名");
        return;
    }
    if(!rePhone.test(phone)) {
        alert("手机号码格式错误");
        return;
    }
    if(!reEmail.test(email)) {
        alert("邮箱格式错误");
        return;
    }
    alert("数据提交成功");
})

$("#aside_detail").delegate(".a_aLi","click",function(){
    $("#aside_detail").find("a").removeClass("cur");
    $(this).children("a").addClass("cur");
})
