$(document).ready(function(){
	// alert('hi');

	$(".slideshow").each(function(){
		var $slides = $(this).find("img"), //모든 슬라이드
		slideCount = $slides.length, //슬라이드 점수
		currentIndex = 0; // 현재 슬라이드 인덱스



		// 첫 번째 슬라이드에 페이드 인으로 표시
		$slides.eq(currentIndex).fadeIn();

		// 7500 밀리 초마다 showNextSlide 함수를 실행
		setInterval(showNextSlide, 750);

		// 다음 슬라이드 표시 함수
		function showNextSlide(){
			// 다음 슬라이드 인덱스 ~ 1,2,3,0
			var nextIndex = (currentIndex+1)%slideCount;

						// 0,1,2,3
			$slides.eq(currentIndex).fadeOut();
			$slides.eq(nextIndex).fadeIn();

			currentIndex = nextIndex;
		}

	});

});