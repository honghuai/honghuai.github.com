/**
 * Created by honghuai on 2016/5/11.
 */
function toShow(dom) {
    $(".page").hide();
    $(dom).show();
}
var imageAssets = [
    "img/loading_box.png",
    "img/bg_index.png",
    "img/btn_again.png",
    "img/btn_back.png",
    "img/btn_clean.png",
    "img/btn_create.png",
    "img/btn_flaunt.png",
    "img/btn_mask.png",
    "img/btn_revocation.png",
    "img/btn_start.png",
    "img/btn_toPlay.png",
    "img/btn_wall.png",
    "img/font_520_0.png",
    "img/font_520_2.png",
    "img/font_520_5.png",
    "img/loading_bg.png",
    "img/loading_box.png",
    "img/loading_upload.png",
    "img/tip_msg.png",
    "img/tip_wall520.png"
];
var imgLen = imageAssets.length;
var percent = 0;
console.log(imgLen);
for (var i=0; i<imageAssets.length; i++) {
    new Image().src = imageAssets[i];
    imgLen--;
    percent = parseInt((imageAssets.length-imgLen)/imageAssets.length*100);
    $(".progress").text(percent+ "%");
    if(imgLen === 0) {
        toShow(".page-index");
        console.log("显示第二个界面事件……");
    }
}
/*520动画*/
function a520Img() {
    $(".a520Img img").eq(0).animate({"opacity": 1},1000,"linear",function(){
        $(".a520Img img").eq(1).animate({"opacity": 1},1000,"linear",function(){
            $(".a520Img img").eq(2).animate({"opacity": 1},1000,"linear",function(){
                $(".a520Img img").css("opacity",0);
                a520Img();
            })
        })
    })
}
a520Img();
/*上滑动加载创作*/
var touchstart = 0;
var touchend = 0;
var handingEvent = {
    'touchstart':function(e){
        touchstart = e.originalEvent.touches[0].pageY;
    },
    'touchend':function(e){
        touchend = e.originalEvent.changedTouches[0].pageY;
        if(touchend-touchstart < 30) {
            console.log("此处写向上滑动加载更多创作");
            /*此处写向上滑动加载更多创作*/
        }
    },
    'touchmove':function(e){
        //console.log('touchmove = '+e.originalEvent.changedTouches[0].pageY);
    }

}
$(".wall-content").on('touchstart', handingEvent.touchstart);
$(".wall-content").on('touchend',handingEvent.touchend);
$(".wall-content").on('touchmove',handingEvent.touchmove);
/*进入第三屏-开始创作*/
$(".start").click(function() {
    toShow(".page-pintu");
});
/*进入第四屏-炫耀一下*/
$("#createImg").click(function() {
    toShow(".page-create");
});
/*进入分享蒙层*/
$(".flauntBtn").click(function() {
    toShow(".page-mask");
});
/*进入情书墙*/
$(".wallBtn").click(function() {
    toShow(".page-wall");
});
/*情书墙返回到作品*/
$(".wall-back").click(function() {
    toShow(".page-create");
});
/*情书墙返回到重新玩游戏*/
$(".wall-again").click(function() {
    toShow(".page-pintu");
});
/*点击蒙层消失*/
$(".page-mask").click(function() {
    toShow(".page-create");
})