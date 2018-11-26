$(function(){
    $('.pages>a').click(function(){
        $(this).addClass("on").siblings().removeClass("on")
        console.log($(this).index())
        // return false;
        event.preventDefault();
        $(".menu>div").eq($(this).index()).show().siblings().hide();
        
    })
})