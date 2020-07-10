$(document).ready(function(){
	// alert('hi');


	$("#main_navigation a").on("click", function(){
		var target = $(this).attr("data-target");

		$(":not([data-name=" + target + "])").removeClass("active");
		$("[data-name=" + target + "]").addClass("active");
	});


	var currentPosition = 1;
	$("#character > a:nth-child(1)").on("click", function(){
		currentPosition -= 1;
		if(currentPosition<1){
			currentPosition =3;
		}
		$('article').removeClass("show");
		$('article:nth-of-type(' + currentPosition + ')').addClass("show");
	});
	$("#character > a:nth-child(2)").on("click", function(){
		currentPosition += 1;
		if(currentPosition>3){
			currentPosition = 1;
		}
		$('article').removeClass("show");
		$('article:nth-of-type(' + currentPosition + ')').addClass("show");
	});




















	// $("#main_navigation>ul>li>a").on("mouseover", function(){
	// 	var num = $(this).parent().index();
	// 	console.log(num);
	// 	var position = (num+1)*70;
	// 	$(this).stop().css({
	// 		'background-position': '0', position
	// 	});
	// });
});