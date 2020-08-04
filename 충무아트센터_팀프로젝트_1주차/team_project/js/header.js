const hd = document.querySelector('header'),
      gnb = hd.querySelector(".gnb"),
      hover = gnb.querySelectorAll(".hover"),
      hoverA = gnb.querySelectorAll(".hover a"),
      ul = gnb.querySelectorAll(".hover > ul");

function none() {
    hd.style.background = `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0)`;
    ul.forEach(function (e) {
        e.style.height = 0;
        e.style.marginTop = 0;
        e.style.opacity = 0;
        e.style.visibility = `hidden`;
    });
}

function show() {
    hd.style.background = `rgba(0,0,0,0.7)`;
    ul.forEach(function (e) {
        e.style.height = `200px`;
        e.style.marginTop = `20px`;
        e.style.opacity = 1;
        e.style.visibility = `visible`;
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
    });
    

}

init();
