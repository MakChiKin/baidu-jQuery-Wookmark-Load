$(document).ready(function () {
    $(window).on('load',function () {
    //     alert('c1');
        imgLocation();
        // alert('c2');
        var dataImg = {'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'6.jpg'},{'src':'7.jpg'},{'src':'8.jpg'},{'src':'9.jpg'},{'src':'10.jpg'},{'src':'11.jpg'},{'src':'12.jpg'},{'src':'13.jpg'},{'src':'14.jpg'},{'src':'15.jpg'},{'src':'16.jpg'},{'src':'17.jpg'},{'src':'18.jpg'},{'src':'19.jpg'},{'src':'20.jpg'},{'src':'21.jpg'},{'src':'22.jpg'},{'src':'23.jpg'},{'src':'24.jpg'},{'src':'25.jpg'},{'src':'26.jpg'},{'src':'27.jpg'},{'src':'28.jpg'},{'src':'29.jpg'},{'src':'30.jpg'},{'src':'31.jpg'},{'src':'32.jpg'},{'src':'33.jpg'}]}
        // alert('c3');
        window.onscroll = function () {
            if (scrollSide()){
                // console.log('c4');
                $.each(dataImg.data,function (index,value) {//动态创建图片对象
                    var box  = $('<div>').addClass('box').appendTo($('#container'));//创建div标签添加到container并赋予box类
                    var content  = $('<div>').addClass('content').appendTo(box);//创建div标签添加到container并赋予content类
                    console.log('/img/'+$(value).attr('src'));
                    $('<img>').attr('src','img/'+$(value).attr('src')).appendTo(content);//创建img标签添加到content 并给于图片路径
                })
                imgLocation();//按照排列算法排列
                // console.log('c5');
            };
        };
    });
});

//离开页面前发生的事件
//原理很简单，就是在body的onbeforeunload事件绑定函数，代码如下：
// document.body.onbeforeunload = function (event)
// {
//
//     var c = event || window.event;
//     if (/webkit/.test(navigator.userAgent.toLowerCase())) {
//         return "离开页面将导致数据丢失！";
//     }
//     else
//     {
//         c.returnValue = "离开页面将导致数据丢失！";
//     }
// }


function scrollSide() {
    var box = $('.box');
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()/2);//最后一张图片离顶栏的距离加上最后一张图片自身一半的高度 得出刷新的距离值
    var docunmentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();//滚动的高度
    return(lastboxHeight<docunmentHeight+scrollHeight?true:false);
}
function imgLocation() {
    var box = $('.box');
    var boxWidth = box.eq(0).width();//获取每个box的宽度
    var imgAmountDecimal = $(window).width()/boxWidth;//用当前设备的宽度除box的宽度获取一行的数量
    var imgAmount = Math.floor(imgAmountDecimal);//转换为整数
    console.log('一行最多显示数量：'+imgAmount+'个box');
    var boxArr = [];
    box.each(function (index,value) {//index是索引号数 value是数值对象
        // console.log(index+'---'+value);
        var boxHeight = box.eq(index).height();//对象高度
        if (index<imgAmount){//如果索引位数小于一行的最大数量 代表为第一行
            boxArr[index]= boxHeight;//记录第一行中每一个box的高度为数组
            // console.log(boxHeight);
        }
        else {//把其他图片放入第一行最小高度图片下方的位置
            var minboxHeight = Math.min.apply(null,boxArr);//获取第一行中最小高度的box
            // console.log(minboxHeight);
            var minBoxIndex = $.inArray(minboxHeight,boxArr)//找到相应高度的位置就能找到相应的box位置
            $(value).css({
                'position': 'absolute',//设定绝对布局
                'top': minboxHeight,//最小图片的高度
                'left':box.eq(minBoxIndex).position().left//最小图片的坐标
            });
            boxArr[minBoxIndex] = boxArr[minBoxIndex]+boxHeight;//更新最小图片位置高度
        }
    })
}