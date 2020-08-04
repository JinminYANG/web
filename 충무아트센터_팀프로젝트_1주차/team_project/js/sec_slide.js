$(document).ready(function(){
	// var btnNum=1;
	//섹션 슬라이드

	$(".btns__rightBtn").click(function(){
		// ******************
		$(".show__showList>li").eq(0).insertAfter(".show__showList>li:last-child");
		return false
	})
	$(".btns__leftBtn").click(function(){
		// ******************
		$(".show__showList>li").eq(-1).insertBefore(".show__showList>li:first-child");
		return false
	})


	//이벤트 슬라이드
	$(".event__btns>.right").click(function(){
		// ******************
		$(".cont>.cf>li").eq(0).insertAfter(".cont>.cf>li:last-child");
		return false
	})
	$(".event__btns>.left").click(function(){
		// ******************
		$(".cont>.cf>li").eq(-1).insertBefore(".cont>.cf>li:first-child");
		return false
	})
})