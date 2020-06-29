$(document).ready(function(){
// 	alert('hi');

	var imgs ='';

	for(var i=0; i<200; i++){
		imgs += "<img src='images/pic" + i + ".jpg' >"
	};

	$("section").html(imgs); // html() 구문에 태그를 반복하여 imgs를 넣어 다시 section 영역안에 추가합니다.
	$("body").on("mousemove", function(e){
		var wid = $(window).width();
		//브라우저의 넓이 값

		var posX = e.pageX; 
		// 변수 posX에 화면상의 마우스 커서의 위치 저장

		var percent = Math.floor((posX/wid)*200);
		// 200까지의 백분율 수치 저장

		$("section>img").hide();

		$("section>img").eq(percent).show();
		//현재 마우스의 위치에 해당하는 이미지 순서만 보임 처리
	});
});