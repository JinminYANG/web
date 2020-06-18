$(document).ready(function(){
	// alert('hi');


	// 메뉴 버튼 클릭시
	$('.btnMenu').on("click", function(){
		$(this).fadeOut();
		$('section').addClass("on");
		$('nav').addClass("on");
	});


	//메뉴 버튼 안에 리스트 클릭시
	$('nav li').on("click", function(){
		$('nav').fadeOut();
		$('.btnMenu').fadeIn();
		// $(".box1").fadeIn();
	});
});