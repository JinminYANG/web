const siteBox = document.getElementById("siteBox");

function openSite(){
    if(this.value){
        window.open(this.value);
    }
}

function init(){
    siteBox.addEventListener("change",openSite);
}

init();