var isOver1 = false;
var isOver2 = false;

function goHide1(){
	if(!isOver1 && !isOver2){
		$('.gnb_depth2_1').stop().fadeOut('fast');
		$('.gnb_depth2_2').stop().fadeOut('fast');
		$('.gnb_depth2_3').stop().fadeOut('fast');
		$('.gnb_depth2_4').stop().fadeOut('fast');
	}
}

$(document).ready(function(){
	// alert("hi");
	if($(document).scrollTop() < 50){ // 초기설정
		$('.to_top').addClass('hide');
	}else{
		$('.to_top').removeClass('hide');
	}
	$(window).scroll(function(){ // 스크롤이 움직일때 제어 이게 정확한거
		if($(document).scrollTop() < 50){
			$('.to_top').addClass('hide');
		}else{
			$('.to_top').removeClass('hide');
		}
	});

	$('.openAll1').mouseover(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_1').fadeIn('fast');
			isOver1= true;
		}
	});
	$('.openAll1').focus(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_1').fadeIn('fast');
			isOver1= true;
		}
	});
	$('.openAll1').mouseout(function(){
		isOver1= false;
		setTimeout("goHide1()", 200); //"함수호출", 0.2초
	});
	$('.gnb_depth2_1 li:last-child a').blur(function(){
		isOver1= false;
		setTimeout("goHide1()", 200); //"함수호출", 0.2초
	});
	
	$('.openAll2').mouseover(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_2').fadeIn('fast');
			isOver1= true;
		}
	});
	$('.openAll2').focus(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_2').fadeIn('fast');
			isOver1= true;
		}
	});
	$('.openAll2').mouseout(function(){
		isOver1= false;
		setTimeout("goHide1()", 200); //"함수호출", 0.2초
	});
	$('.gnb_depth2_2 li:last-child a').blur(function(){
		isOver1= false;
		setTimeout("goHide1()", 200); //"함수호출", 0.2초
	});

	$('.openAll3').mouseover(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_3').fadeIn('fast');
			isOver1= true;
		}
	});
	$('.openAll3').focus(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_3').fadeIn('fast');
			isOver1= true;
		}
	});
	$('.openAll3').mouseout(function(){
		isOver1= false;
		setTimeout("goHide1()", 200); //"함수호출", 0.2초
	});
	$('.gnb_depth2_3 li:last-child a').blur(function(){
		isOver1= false;
		setTimeout("goHide1()", 200); //"함수호출", 0.2초
	});

	$('.openAll4').mouseover(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_4').fadeIn('fast');
			isOver1= true;
		}
	});
	$('.openAll4').focus(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_4').fadeIn('fast');
			isOver1= true;
		}
	});
	$('.openAll4').mouseout(function(){
		isOver1= false;
		setTimeout("goHide1()", 200); //"함수호출", 0.2초
	});
	$('.gnb_depth2_4 li:last-child a').blur(function(){
		isOver1= false;
		setTimeout("goHide1()", 200); //"함수호출", 0.2초
	});



});