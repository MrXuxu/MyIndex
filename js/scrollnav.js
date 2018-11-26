// $(function() {
//     $(window).scroll(function () {
    
//         var scroll = $(window).scrollTop();
//         console.log(scroll);
//     })
//     $(function(){
//         $("#hobbyc").click(function () {
//             // var offset = $("#hobbyb").offset().top;
//             // console.log(offset);
//             $("html, body").animate({ scrollTop: 1407}, 700);
//             // console.log(offset);       
//         })
//         $("#about").click(function(){
//             // var offset = $("#about-me").offset().top;
//             $("html, body").animate({scrollTop: 746}, 700);
//         })
//         $("#skillc").click(function(){
//             $("html, body").animate({scrollTop:2377}, 700);
//         })
//         $("#workc").click(function(){
//             $("html, body").animate({scrollTop: 3035}, 700);
//         })
//         $("#contactc").click(function(){
//             $("html, body").animate({scrollTop:3626}, 700);
//         })
//     })
// })
$(window).scroll(function () {
    
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll<746){
        $("#homec").addClass("on").siblings().removeClass("on");
    }
    if(scroll>=746&&scroll<1407){
        $("#about").addClass("on").siblings().removeClass("on");
    }
    if(scroll>=1407&&scroll<2376){
        $(".hobbyc").addClass("on").siblings().removeClass("on");
    }
    if(scroll>=2376&&scroll<3035){
        $(".skillc").addClass("on").siblings().removeClass("on");
    }
    if(scroll>=3035&&scroll<3626){
        $(".workc").addClass("on").siblings().removeClass("on");
    }
    if(scroll>=3406){
        $(".contactc").addClass("on").siblings().removeClass("on");
    }
    
    //以下是技能条的动态效果
    if(scroll>=2228){
        
        $(".html").animate({width:'700px'}, 1000);
        $(".css").animate({width: "750px"}, 1000);
        $(".javascript").animate({width: "650px"}, 1000);
        $(".python").animate({width: "600"}, 1000);
    } 
    
})
$(function(){
    $("#hobbyc").click(function () {
        $("html, body").animate({ scrollTop: 1407}, 700);       
    })
    $(".aboutme-btn").click(function(){
        $("html, body").animate({scrollTop: 746}, 700);
    })
    $("#about").click(function(){
        $("html, body").animate({scrollTop: 746}, 700);
    })
    $("#skillc").click(function(){
        $("html, body").animate({scrollTop:2377}, 700);
    })
    $("#workc").click(function(){
        $("html, body").animate({scrollTop: 3035}, 700);
    })
    $("#contactc").click(function(){
        $("html, body").animate({scrollTop:3626}, 700);
    })
})
