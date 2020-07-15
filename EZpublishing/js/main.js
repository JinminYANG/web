$(document).ready(function(){

	$('#container').addClass('start');
	
	$('nav li').click(function(){
		$('#container').css('max-width','100%');
		var id=$(this).attr('data-rol');
		$('nav li').removeClass('on');
		$(this).addClass('on');
		$('.content').removeClass('prev next this');
		$('#'+id).addClass('this').prevAll().addClass('prev');
		$('#'+id).nextAll().addClass('next');
	});

	// 로고 클릭 시
	$('.logo_box').click(function(){
		$('nav li').removeClass('on');
		$('.content').removeClass('prev next this');
		$('#container').css('max-width','1200px');
	});

	// 롤링배너 왼쪽
	$(".roll_left").on("click", function(){
		$(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
	});

	// 롤링배너 오른쪽
	$(".roll_right").on("click", function(){
		$(".book_roll li:last-child").insertBefore(".book_roll li:first-child");
	});

	// faq 게시판
	$(".accordio_box ol li").on("click", function(){
		$(".accordio_box ol li").removeClass("on");
		$(this).addClass("on");
	});
});