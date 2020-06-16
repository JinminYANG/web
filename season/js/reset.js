
$(document).ready(function(){
	// alert('hi');

	var ht = $(window).height();
	// console.log(ht);

	//브라우저의 height 값을 section에 집어넣어 풀스크린으로 만듬 
	$('section').height(ht);

	//브라우저가 리사이즈 될 때마다 height값을 section에 집어넣음
	$(window).on("resize",function(){
		var ht = $(window).height();
		$('section').height(ht);
	});



	// 메뉴버튼 클릭시
	$("#menu li").on("click",function(e){
		e.preventDefault();
		$('section').height(ht);
		var ht = $(window).height();
		var i = $(this).index();
		// scrollTop은 속성 , index(), height()
		var nowTop = i*ht;
		$("html, body").stop().animate({"scrollTop":nowTop}, 1400);
	});

	// window창 스크롤시
	$(window).on("scroll",function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();
		for(var i =0; i<4; i++){
			if(scroll>=ht*i && scroll<ht*(i+1)){
				$("#menu li").removeClass();
				$("#menu li").eq(i).addClass("on");
			}
		}

		// section위에서 마우스 휠을 움직일때
		$("section").on("mousewheel", function(event, delta){
			//마우스 휠을 올렸을 때
			if(delta > 0){
				//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
				var prev = $(this).prev().offset().top;

				//문서 전체를 prev에 저장된 위치로 이동
				$("html, body").stop().animate({"scrollTop":prev}, 1400, "easeOutBounce");
			} else if(delta < 0){ //마우스 휠 내릴 때
				var next = $(this).next().offset().top;
				$("html, body").stop().animate({"scrollTop":next}, 1400, "easeOutBounce");
			}
		});
	});

	// resize
	// mousemove
	// click
	// scroll
});