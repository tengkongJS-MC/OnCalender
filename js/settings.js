//颜色主题
function color(color){
    document.getElementById("weekDay").style.backgroundColor = color;
    document.getElementById("cleanStudentTitle").style.backgroundColor = color;
    document.getElementById("cleanBlackboardStudentTitle").style.backgroundColor = color;
    document.getElementById("toEatTitle").style.backgroundColor = color;
    document.getElementById("timeBox").style.backgroundColor = color + '70';
    document.getElementById("simplePoetry").style.backgroundColor = color + '50';
    document.getElementById("noticeBox").style.backgroundColor = color + '50';
    for( i = 0 ; i <= 8 ; i ++){
        a = 'c' + i;console.log(a);
        // document.getElementById(a).style.borderBottom = "1px " + color + " solid";
        document.getElementById(a).style.borderTop = "2px " + color + " solid";
    }
    if( color === "#ffffff" ){
        document.getElementById("weekDay").style.color = "rgb(55,55,55)";
        document.getElementById("cleanStudentTitle").style.color = "rgb(55,55,55)";
        document.getElementById("cleanBlackboardStudentTitle").style.color = "rgb(55,55,55)";
        document.getElementById("toEatTitle").style.color = "rgb(55,55,55)";

    }else{
        document.getElementById("weekDay").style.color = "white";
        document.getElementById("cleanStudentTitle").style.color = "white";
        document.getElementById("cleanBlackboardStudentTitle").style.color = "white";
        document.getElementById("toEatTitle").style.color = "white";
    }

}

//焦点模式
function showFocus(){
    document.getElementById("sidebarMain").style.visibility = "hidden";
    document.getElementById("timeBox").style.bottom = "50%";
    document.getElementById("timeBox").style.right = "50%";
    document.getElementById("timeBox").style.transform = "translate(50%,50%)";
    document.getElementById("timeBox").style.width = "50%";
    document.getElementById("timeBox").style.height = "30%";
    document.getElementById("noticeBox").style.display = "none";
    document.getElementById("homeworks").style.position = "absolute"
    document.getElementById("homeworks").style.left = "0px"
    document.getElementById("homeworks").style.width = "20%"
}

function showNormal(){
    document.getElementById("sidebarMain").style.visibility = "visible";
    document.getElementById("timeBox").style.bottom = "80px";
    document.getElementById("timeBox").style.right = "60px";
    document.getElementById("timeBox").style.transform = "translate(0%,0%)";
    document.getElementById("timeBox").style.width = "35%";
    document.getElementById("timeBox").style.height = "25%";
    document.getElementById("noticeBox").style.display = "flex";
    document.getElementById("homeworks").style.removeProperty("position");
}