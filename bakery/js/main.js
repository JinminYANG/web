$(document).ready(function(){
	// alert('hi');


	$(".menu>ul>li").on("mouseover", function(){
		$(this).children("ul").stop().slideDown();
		$(this).stop().css({'background':'#4298cc'});
		$(this).children("a").css({'color':'#fff'});
	});

	$(".menu>ul>li>ul>li").on("mouseover", function(){
		$(this).stop().css({
			'background':'cyan',
			'color':'#fff'
		});
	});

	$(".menu>ul>li").on("mouseleave", function(){
		$(this).children("ul").stop().slideUp();
		$(this).stop().css({'background':'none'});
		$(this).children("a").css({'color':'#000'});
	});

	$(".menu>ul>li>ul>li").on("mouseleave", function(){
		$(this).stop().css({
			'background':'#fff',
			'color':'#000'
		});
	});

});

start();
var imgs =2;
var now =0;

function start(){
	$('.img_slide>img').eq(0).siblings().css({
		'margin-top':'-1000px'
	});
	setInterval(function(){slide();},2000);
}

function slide(){
	now = now==imgs?0:now+=1;
	$('.img_slide>img').eq(now-1).css({'margin-top':'-1000px'});
	$('.img_slide>img').eq(now).css({'margin-top':'0px'});
}

var win;
function winOpen(){
	win = window.open('contact.html', 'child', 'toolbar = no, location = no, status = no, member =no, resizable =no, scrollbars = no, width = 550, height = 550');
}