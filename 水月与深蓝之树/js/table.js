var back=document.getElementById('back');
window.onmousemove = function(event){
    var x=-event.clientX/10;
    var y=-event.clientY/15;
    back.style.backgroundPositionX = x+"px";
    back.style.backgroundPositionY = y+"px";
}


var mpt=document.getElementById('mpt');
function login(){
    if(mpt.value==""){
        alert("正文不能为空");
        return false;
    }
}