const topBtn = document.querySelector(".topBtn");


function goTop(e) {
    e.preventDefault();
    
    let currentY = window.pageYOffset;
    let step = 200 / currentY > 1 ? 10 : 100;
    let timeStep = 200 / currentY * step;
    let intervalID = setInterval(scrollUp, timeStep);

    function scrollUp() {
        currentY = window.pageYOffset;
        if (currentY === 0) {
            clearInterval(intervalID);
        } else {
            scrollBy(0, -step);
        }
    }
}


function init() {
    topBtn.addEventListener("click", goTop);
}

init();
