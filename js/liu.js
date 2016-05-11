
$(function () {

    var history = [],                                             //历史记录
        layers = [],                                             //存放全部layer的数组
        $body = $('body'),
        $canvasWrap = $("#canvasWrap"),
        $floatDiv = $('<div class="floatDiv"></div>'),
        layerColor = "rgb(255, 255, 255)",                       //layer的颜色
        row = 14,                                                //每行个数
        col = 17,                                                //每列个数
        layerWidth = parseFloat($canvasWrap.width() / row),      //每个layer的width
        layerHeight = parseFloat($canvasWrap.height() / col);    //每个layer的width
    init(1, "canvas", $canvasWrap.width(), $canvasWrap.height(), painCanvas);


    function painCanvas(){
        /* 包裹层 */
        var container = new LSprite();
        addChild(container);

        /* 初始化每个layer */
        for(var i = 0;i<row;i++){
            for(var j = 0;j<col;j++){
                var left = i * layerWidth;
                var top = j*layerHeight;
                container.graphics.drawRect(1, '#000000', [left, top, layerWidth, layerHeight], true, layerColor);
                var $div = $('<div></div>')
                    .css({
                        left:left,
                        top:top,
                        width:layerWidth,
                        height:layerHeight
                    })
                    .data({x:left,y:top});
                $div.appendTo($floatDiv)
            }
        }
        $floatDiv.appendTo($canvasWrap);

        $body.on('click', '.circleList>li', function () {
            var color = $(this).css('color');
            layerColor = color;
            //console.log(color);
        });

        /* 点击变换颜色 */
        $body.on('click','.floatDiv>div', function () {
            var $this = $(this);
            var x = $this.data('x');
            var y = $this.data('y');
            container.graphics.drawRect(1,'#000000',[x,y,layerWidth,layerHeight],true,layerColor);
            history.push( { x:x,y:y } );
        });

        /* 撤销 */
        $('#goBack').on('click', function () {
            var lastLayer = history.pop();
            if (!lastLayer) {
                return false;
            }
            container.graphics.drawRect(1, '#000000', [lastLayer.x, lastLayer.y, layerWidth, layerHeight], true, '#fff');
        });
        /* 清空 */
        $('#reset').on('click', function () {
            for (var i = 0; i < row; i++) {
                for (var j = 0; j < col; j++) {
                    var left = i * layerWidth;
                    var top = j * layerHeight;
                    container.graphics.drawRect(1, '#000000', [left, top, layerWidth, layerHeight], true, '#fff');
                }
            }
            history = [];
        });
        /* 生成图片 */
        $("#createImg").on('click', function () {
            var des = $(".desMyProjectInput").val();
            if(!des){
                alert('请填写描述');
                return false;
            }
            var base64Str  = $("#canvas_canvas").get(0).toDataURL("image/jpeg");
            $('<img src="'+ base64Str +'" alt=""/>').appendTo('#creatImgWrap');

            $(".page-pintu").hide();
            $('.page-create').show();
            $("#creatDes strong").text(des);
        });
    }

});