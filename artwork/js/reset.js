$(document).ready(function(){
	// alert('hi');
	
	var numAc = $('article').size(); // article 개수
	// console.log(numAc);

	var widSec = 193*numAc;

	var widTotal = widSec+600; //큰사진 포함	

	$('section').width(widTotal);
	$("body").height(widSec);
	$("html,body").animate({"scrollTop":widSec},2000);
	//맨 마지막 사진에 맞춰 스크롤이 맨아래로 가야하니까 설정해줌.

	//스크롤 제어
	$(window).on("scroll",function(){
		var scroll = $(this).scrollTop();
		$("section").stop().animate({'left':-scroll}, 600);
	});

	//사진 제어
	$('article h2').on("click", function(e){
		e.preventDefault();

		var index = $(this).parent().index();
		var src = $(this).children('a').attr('href');
		var posAc = 193*index;

		$('article').removeClass();
		$(this).parent().addClass('on');

		$('article p img').attr({'src':''});
		$(this).siblings('p').children('img').attr({'src':src});
		$("html,body").scrollTop(posAc); //스크롤 제어

		$('article span').on("click", function(){
			$(this).parent().removeClass();
		});
	});


	// navi 클릭시
	$('#navi>li').on("click", function(){
		var i = $(this).index();
		var posNavi = 1000*i;
		// console.log(i);
		// console.log(posNavi);

		$("#navi li, article").removeClass();
		$(this).addClass("on");

		$("html,body").animate({"scrollTop":posNavi},100);
		// $("html,body").scrollTop(posNavi);
	});
});