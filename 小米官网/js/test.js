// window.onload = function () {
//     var test = document.getElementById("test");
//     test.onclick = function () {
//         test.style.backgroundColor = "green";
//     }
// }
window.onload = function() {
    var list = document.getElementById("list");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    function animate(offset){
        var newLeft = parseFloat(list.style.left) + offset;
        list.style.left = newLeft + "px";
        list.style.transition = '400ms ease';
        if(newLeft<=-4743.28){
            list.style.left = -948.656 +'px';
        }
        if(newLeft>0){
            list.style.left = -4743.28 +'px';
        }
    }
    prev.onclick = function(){
        animate(948.656);
    }
    next.onclick = function(){
        animate(-948.656);
    }
    // 定时自动轮播
    var timer;
    function autoplay() {
        timer = setInterval(function(){
            next.onclick()
        }, 1500);
    }
    autoplay();
    // 鼠标悬停停止
    var container = document.getElementById('container');
    function stopplay() {
        clearInterval(timer);
    }
    container.onmouseover = stopplay;
    container.onmouseout = autoplay;

    // 切换图片时底部样式改变
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;
    function showButton() {
        for(let i = 0; i<buttons.length; i++){
            if(buttons[i].className == 'on'){
                buttons[i].className = '';
            }
        }
        buttons[index-1].className = 'on';
    }
    prev.onclick = function() {
        index -= 1;
        if(index < 1){
            index = 5;
        }
        // console.log(index);
        showButton();
        animate(948.656);
    }
    next.onclick = function() {
        index += 1;
        if(index > 5){
            index = 1;
        }
        // console.log(index);
        showButton();
        animate(-948.656);
    }
    
    
    // 点击按钮切换
    for(var i=0; i<buttons.length; i++){
        buttons[i].onclick = function(){
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = 948.656*(index - clickIndex);
            animate(offset);
            index = clickIndex;
            showButton();
        }
    }

    // 动画效果
    
}