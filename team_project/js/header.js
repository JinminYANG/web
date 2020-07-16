const gnb = document.querySelector(".gnb"),
    hover = gnb.querySelectorAll(".hover"),
    hoverA = document.querySelectorAll(".hover a"),
    ul = gnb.querySelectorAll(".hover > ul"),
    hd = document.querySelector('header');

function none() {
    ul.forEach(function (e) {
//        e.style.display = 'none';
        e.style.height = 0;
//        e.style.marginTop = -270;
        e.style.marginTop = 0;
        e.style.opacity = 0;
        e.style.visibility = `hidden`;
//        e.style.transition = `400ms`;
        // e.style.background = `rgba(0,0,0,0.0)`;

    });
}

function show() {
    // hd.forEach(function(e){
    //     e.style.background = `rgba(0,0,0,0.7)`;
    // });
    ul.forEach(function (e) {
//        e.style.display = 'block';
        e.style.height = `200px`;
//        e.style.marginTop = 0;
        e.style.marginTop = `20px`;
        e.style.opacity = 1;
        e.style.visibility = `visible`;
//        e.style.transition = `400ms`;
        // e.style.background = `rgba(0,0,0,0.7)`;
    });
}

function init() {
    hover.forEach(function (e) {
        e.addEventListener("mouseover", show);
        e.addEventListener("mouseleave", none);
    });
    hoverA.forEach(function(e){
        e.addEventListener("focus", show);
        e.addEventListener("blur", none);
    })

}

init();

$(document).ready(function(){
    // alert('hi');

    $(".gnb").on("mouseover",function(){
        $("header").css({"background":"rgba(0,0,0,0.7)"});
    });

    $(".gnb").on("mouseleave",function(){
        $("header").css({"background":"linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0)"});
    });
});