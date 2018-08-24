window.onload = function() {
    var tit = document.getElementById("headee");
    var titleTop = tit.offsetTop;
    document.onscroll = function(){
    //获取当前滚动的距离
        var btop = document.body.scrollTop||document.documentElement.scrollTop;
        //如果滚动距离大于导航条据顶部的距离
        if(btop>titleTop){
            //为导航条设置fix
            tit.className = "header fixed";
        }else{
            //移除fixed
            tit.className = "header";
        }
    }

    var top = document.body.scrollTop||document.documentElement.scrollTop;
    var aboutme = document.getElementById("about-me");
    var aboutmeTop = aboutme.offsetTop;
    document.getElementById("about").onclick=function(){
        top = aboutmeTop;
    }
}