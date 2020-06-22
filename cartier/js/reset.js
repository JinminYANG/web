$(document).ready(function(){
	// alert('sfs');

	// $('section.contents>article').on("mouseover", function(){
	// 	$('section.contents').css("width","70%");
	// 	$(this).css("width","60%");
	// 	$(this).siblings().css("width","13.3%");
	// 	var i = this.index();
	// 	$('section.contents>article').siblings().eq(i).css("opacity","1");
	// });

	// 마우스 오버
	$('article').on('mouseover',function(){
		var vid = $(this).find("video").get(0);
		vid.currentTime=0; //동영상의 재생위치를 처음(0)으로 설정
		vid.play();
		$(this).stop().animate({'width':'35%'},1000,function(){
			$(this).find('h3').stop().animate({"right":"10px"},400);
			$(this).find('p').stop().animate({"right":"10px"},800);
		});
		$(this).find("video").stop().animate({"opacity":"0.9"},1200);
	});



	// 마우스 아웃
	$('article').on('mouseout',function(){
		var vid = $(this).find("video").get(0);
		vid.pause();
		$(this).stop().animate({'width':'12%'},500,function(){
			$(this).find('h3').stop().animate({"right":"-310px"},500);
			$(this).find('p').stop().animate({"right":"-310px"},500);
		});
		$(this).find("video").stop().animate({"opacity":"0"},500);
	});
});	