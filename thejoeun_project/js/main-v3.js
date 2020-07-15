$(document).ready(function(){
	// alert('hi');

	// var h_width = $('header').width();

	$('header > .header-inner > .right_nav > .gnb > .cf > .hover a').on("mouseover", function(e){
		$('header').addClass('on');
		$('.hover ul').addClass('on');
	});

	$('header > .header-inner > .right_nav > .gnb > .cf > .hover a').on("mouseleave", function(e){
		$('header').removeClass('on');
		$('.hover ul').removeClass('on');	
	});

	// $('.gnb > li > a').on("mouseover", function(e){
	// 	e.preventDefault();
	// 	alert('hi');
	// 	$(this).siblings().addClass("on");
	// });




	// 헤더 네비게이션
	// $('#header .nav1 ul li a').on("mouseover", function(e){
	// 	e.preventDefault();
	// 	$('#header .nav1>ul>li>a').css({'border-bottom':'3px solid red'});
	// 	$("#header").stop().css({
	// 		'background-color':'rgba(0,0,0,0.7)',
	// 		'height': '300px'
	// 	});
	// 	$(this).siblings('.nav_sub').slideDown();
	// 	$('.nav_sub').stop().slideDown();
	// 	$('.nav_sub').css({
	// 		'visibility':'visible',
	// 		'display':'block'
	// 	});
	// 	$('.nav_sub>ul>li>a').css({
	// 		'border-bottom':'none'
	// 	});
	// });
	// $('#header .nav1 ul li a').on("mouseout", function(){
	// 	$(this).css({'border-bottom':'none'});
	// 	$("#header").stop().css({
	// 		'background':'none',
	// 		'height': '100px'
	// 	});
	// 	$(this).siblings('.nav_sub').slideDown();
	// 	$('.nav_sub').stop().slideUp();
	// 	$('.nav_sub').css({
	// 		'display':'none',
	// 		'visibility':'hidden'
	// 	});
	// });



	// 메인 슬라이드
	$(".mainVisual .visual > div").on("mouseover", function(){
		var idx = $(this).index();
		$(this).children().addClass("on");

		$(".mainVisual .visualView > div").removeClass("show");
		$(".mainVisual .visualView > div").eq(idx).siblings().css({
			'width':"0%"
		});
		$(".mainVisual .visualView > div").eq(idx).css({
			'width': '100%',
			'left': '0%'
		});
		$(".mainVisual .visualView > div").eq(idx).addClass("show");
	});

	$(".mainVisual .visual > div").on("mouseout", function(){
		$(this).children().removeClass("on");

		$(".mainVisual .visualView > div").removeClass("show");
		$(".mainVisual .visualView > div").siblings().css({
			'width':"20%"
		});
		for(var i=1; i<6; i++){
			$(".mainVisual .visualView > div").eq(i).css({
				'left' : i*20+'%' 
			});
		}
		
	});
















	// var target2 = $('.mainVisual > .visualView');
	// console.log(target2);

	/* main */

	// $('.mainVisual .bg1').on("mouseover", function(){
	// 	$(this).css({"width": '100%'});
	// });
	// $(target2).on("mouseover", function(){
	// 	$(this).css({"width": '100%'});
	// });

	// var winH = $(window).outerHeight(),
	// winW = $(window).outerWidth() - 64,
	// headerH =  $('#headerWrap').outerHeight(),
	// target = $('.mainVisual .visual'),
	// target2 = $('.mainVisual .visualView'),
	// textBox = target.find('.textBox'),
	// length = target.find('>div').length,
	// idx = 0,
	// check = true,
	// ease = "linear",
	// time = 900,
	// css =[];

	// target2.find('>div').each(function(e){
	// 	css.push({'width':100/length + '%','left':e*(100/length) + '%','left2':-e*100 + '%'});
	// 	$(this).css({'width':css[e].width,'height':winH,'left':css[e].left});
	// });

	// $('.mainVisual .visual').find('>div').mouseenter(function(){
	// 	idx = $(this).index();
	// 	$(this).addClass('on').siblings().addClass('off');
	// 	$(this).find('.textView').stop().slideDown();
	// 	$('.mainVisual .visualView > div').eq(idx).addClass('show')
	// 	.stop().animate({'left':'0','width':'100%'});
	// });

	// $('.mainVisual .visual').find('> div').mouseleave(function(){
	// 	idx = $(this).index();
	// 	$(this).removeClass('on').siblings().removeClass('off');
	// 	$(this).find('.textView').stop().slideUp();
	// 	$('.mainVisual .visualView > div').eq(idx).removeClass('show')
	// 	.stop().css({'width':css[idx].width,'left':css[idx].left});
	// });

});