$(document).ready(function(){
	// alert('hi');

	$(".menu>ul>li").on("mouseover",function(){
		$(this).css({
			'background':"#996699",
			'color':"#fff"
		});
		$(this).children('ul').stop().slideDown();
		$(this).children('ul').children('li').css({
			'color':'#666666'
		});
	});
	$(".menu>ul>li>ul>li").on("mouseover", function(){
		$(this).css({
			'background':'#cc9999'
		});
	});

	$(".menu>ul>li").on("mouseleave",function(){
		$(this).css({
			'background':"#fff",
			'color':"#666666"
		});
		$(this).children('ul').stop().slideUp();
	});
	$(".menu>ul>li>ul>li").on("mouseleave", function(){
		$(this).css({
			'background':'#fff',
			'color':'#666666'
		});
	});

	//초기에 이미지1이 나오게 설정
	// $(".img>.img1").css({"left":"0"});

	// $(".img>p>a").on("click", function(){
	// 	if($(this).hasClass("btn1")===true){
	// 		$(".img>img").stop().css({"left":"-100%"});
	// 		$(".img>.img1").stop().css({"left":"0"});
	// 	}
	// 	else if($(this).hasClass("btn2")===true){
	// 		$(".img>img").stop().css({"left":"-100%"});
	// 		$(".img>.img2").stop().css({"left":"0"});
	// 	}
	// 	else if($(this).hasClass("btn3")===true){
	// 		$(".img>img").stop().css({"left":"-100%"});
	// 		$(".img>.img3").stop().css({"left":"0"});
	// 	}
	// 	else if($(this).hasClass("btn4")===true){
	// 		$(".img>img").stop().css({"left":"-100%"});
	// 		$(".img>.img4").stop().css({"left":"0"});
	// 	}
	// 	else if($(this).hasClass("btn5")===true){
	// 		$(".img>img").stop().css({"left":"-100%"});
	// 		$(".img>.img5").stop().css({"left":"0"});
	// 	}
	// });


	$(".img>p>a").on("click", function(){
		$(".img>p>a").removeClass("active");
		$(this).addClass("active");
		var th = $(this).index();
		var imgLeft = -(th*1000);
		$(".img").stop().animate({left:imgLeft}, 2000);
	});

	var hei = $(document).height(); //문서 전체 높이
	console.log(hei);
	$(".partner>.partner_img>.img_click").on("click", function(){
		$(".popup").stop().css({
			"display" : "block",
			"height": hei
		});
		$(".popup>.popup_inner>button").on("click", function(){
			$(this).parent().parent().css({"display":"none"});
		});
	});
});