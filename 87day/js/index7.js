
var indicator = document.querySelectorAll(".indicator button");
var lightbox = document.querySelector("#lightbox");
var block = document.querySelector("#block");

function lightbox_open(num){
	lightbox.setAttribute('class', "active");
	block.setAttribute("class", "active");

	change_img(num);
	indicator[num-1].focus();
}

function lightbox_close(){
	lightbox.removeAttribute("class");
	block.removeAttribute("class");
}

function change_img(val){
	var imgs = document.querySelectorAll("figure > img");

	for(var i=0; i<imgs.length; i++){
		imgs[i].removeAttribute("class");
	}
	imgs[val-1].setAttribute("class", "active");
}