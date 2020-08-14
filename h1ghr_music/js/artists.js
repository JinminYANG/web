function sub(){
	var sub = document.getElementsByClassName("artists_view"),
	sc_wid = screen.availWidth;
	sc_hei = screen.availHeight;
	console.log(sc_wid, sc_hei);
	sub.width = sc_wid;
	sub.hei = sc_hei;
	console.log(sub);
	console.log(sub.width, sub.hei);
}
sub();


$(document).ready(function(){
	// alert('hi');
	
	var numAc = $('.list').size(); // article 개수
	// console.log(numAc);

	// var widSec = 350*numAc;

	// var widTotal = widSec+600; //큰사진 포함	

	// $('.artists_list').width(widTotal);
	// $("body").height(widSec);
	// $("html,body").animate({"scrollTop":widSec},2000);
	//맨 마지막 사진에 맞춰 스크롤이 맨아래로 가야하니까 설정해줌.

	//스크롤 제어
	$(window).on("scroll",function(){
		var scroll = $(this).scrollTop();
		$(".artists_list").stop().animate({'left':-scroll}, 100);
	});

	var $win_width = $(window).height;
	$(".sub").css({'width' : $win_width});
	//사진 제어
	// $('article h2').on("click", function(e){
	// 	e.preventDefault();

	// 	var index = $(this).parent().index();
	// 	var src = $(this).children('a').attr('href');
	// 	var posAc = 193*index;

	// 	$('article').removeClass();
	// 	$(this).parent().addClass('on');

	// 	$('article p img').attr({'src':''});
	// 	$(this).siblings('p').children('img').attr({'src':src});
	// 	$("html,body").scrollTop(posAc); //스크롤 제어

	// 	$('article span').on("click", function(){
	// 		$(this).parent().removeClass();
	// 	});
	// });
});