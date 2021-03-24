// 返回顶部
$(function(){
    $(".dvp").hide();//初始隐藏div
    //判定滚动条超过“100”及隐藏div
    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $(".dvp").show();
        }else{
            $(".dvp").hide();
        }
    });
    
    $(".bgt").show();//初始显示div
    //判定滚动条超过“100”及隐藏div
    $(window).scroll(function(){
        if ($(window).scrollTop()>($(".index_section").height()/2)){
            $(".bgt").hide();
        }else{
            $(".bgt").show();
        }
    });
    //返回页首
    $(".dvp").click(function(){
        $('html').animate({scrollTop:0},1000);
        return false;
    });
});