
	var wrapper = document.querySelector(".wrapper"),
	page = document.querySelectorAll(".page"),
	indicator = document.getElementById("indicator"),
	indicator_li = indicator.querySelectorAll("li");

	var yDeg = 0,
	indicator_num = 1,
	indicator_length = page.length,
	w = page[0].offsetWidth,
	page_angle=0 ,
	page_vector = 0;
	console.log(w);

var hammer = new Hammer(wrapper);

function init_page(){
	 w= page[0].offsetWidth;

	 for(var i =0; i < page.length; i++){
	 	page[i].style.transform = 'rotateY(' + page_angle + 'deg) translateZ(' + (w/2) + 'px)';
	 	page_angle += 90;
	 }

	 wrapper.style.transform = 'translateZ(' + (-w/2) + 'px) rotateY(' + yDeg + 'deg)';
}

function init_indicator(){
	for(var i =0; i< indicator.length; i++){
		indicator.innerHTML += '<li>' + (i+1) + "</li>";
	}

	change_page(indicator_num);
}

function change_page(inum){
	indicator_li[inum-1].setAttribute("class", "active");
	yDeg = -90 * (inum -1);
	wrapper.style.transform = 'translateZ(' + (-w/2) + 'px) rotateY(' + yDeg + 'deg)';

	for(var i =0; i<indicator_li.length; i++){
		indicator_li[i].removeAttribute("class");
	}
	indicator_li[inum-1].setAttribute("class", "active");
}

init_page();
init_indicator();

for(var i =0; i<indicator_li.length; i++){
	indicator_li[i].addEventListener("click", function(){
		indicator_num = parseInt(this.innerText);
		change_page(indicator_num);
	});
}

//오른쪽으로 넘기는거
hammer.on("swipeleft", function(e){

	if(indicator_num>=1){
		page_vector = +1;
	}else{
		page_vector = 0;
	}

	indicator_num += page_vector;
	change_page(indicator_num);
});

//왼쪽으로 넘기는거
hammer.on("swiperight", function(e){
	if(indicator_num>1){
		page_vector = -1;
	}else{
		page_vector = 0;
	}

	indicator_num += page_vector;
	change_page(indicator_num);
});


window.onresize = function(){
	init_page();
};