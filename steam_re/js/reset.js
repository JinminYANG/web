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
		// $('nav').fadeOut();

		$('.btnMenu').fadeIn();
		$('section').removeClass('on');
		$('nav').removeClass('on');
		var i = $(this).index();
		$('section>div').removeClass('on');
		$('section>div').eq(i).addClass('on');
		$('#tit>div').removeClass('on');
		$('#tit>div').eq(i).addClass('on');
		$('#gnb>li>a').removeClass('on');
		$('#gnb>li>a').eq(i).addClass('on');
	});
});