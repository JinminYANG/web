$(document).ready(function(){

	$('.slideshow').each(function(){

		// 열거형 변수 선언***
		var $container = $(this),
		$slideGroup = $container.find('.slideshow-slides'),
		$slides = $slideGroup.find('.slide'),
		$nav = $container.find('.slideshow-nav'),
		$indicator = $container.find('.slideshow-indicator'),

		slideCount = $slides.length, // 슬라이드 갯수
		indicatorHTML = '', // indicator 컨텐츠
		currentIndex = 0, // 현재 슬라이드
		duration=500, // 다음 슬라이드 애니메이션 속성값
		easing = 'swing', // 다음 슬라이드 애니메이션 속성값
		interval = 7500, // 다음 슬라이드 애니메이션 속성값
		timer; 


		// 각 슬라이드의 위치를 결정하고,
		// 해당 indicator의 앵커를 생성
		$slides.each(function(i){
			$(this).css({left : 100*i+'%'});
			indicatorHTML+= '<a href="#">' + (i+1) + '</a>';
		});

		// indicator에 콘텐츠 삽입
		$indicator.html(indicatorHTML);


		// 모든 슬라이드를 표시하는 함수
		function goToSlide(index){
			// 슬라이드 그룹을 대상 위치에 맞게 이동
			$slideGroup.animate({left : -100*index+'%'}, duration, easing);

			// 현재 슬라이드의 인덱스 덮어쓰기
			currentIndex = index;

			// 호출해서 업데이트
			updateNav();
		}

		// 슬라이드의 상태에 따라 탐색 및 표시를 업데이트 하는 함수
		function updateNav(){
			var $navPrev = $nav.find('.prev'),
			$navNext = $nav.find('.next');

			if(currentIndex === 0 ){
				$navPrev.addClass('disabled');
			}else{
				$navPrev.removeClass('disabled');
			}

			if(currentIndex === slideCount-1 ){
				$navNext.addClass('disabled');
			}else{
				$navNext.removeClass('disabled');
			}


			// 현재 슬라이드의 표시를 해제
			$indicator.find('a').removeClass('active').eq(currentIndex).addClass('active');
		}



		// 타이머를 시작하는 함수
		function startTimer(){
			// 변수 interval에서 설정한 시간이 경과할 때 마다 실행
			timer=setInterval(function(){
				// 현재 슬라이드의 인덱스에 따라 다음 표시 할 인덱스 저장
				// 마지막 슬라이드라면 첫번째 슬라이드값 저장
				var nextIndex = (currentIndex+1)%slideCount;
				goToSlide(nextIndex);
			}, interval);
		}

		function stopTimer(){
			clearInterval(timer);
		}



		// 네비게이션 클릭하면 해당 슬라이드 이동
		$nav.on("click", "a", function(event){
			event.preventDefault();
			if($(this).hasClass('prev')){
				goToSlide(currentIndex-1); // 1,2,3
			} else {
				goToSlide(currentIndex+1); // 0,1,2
			}
		});

		// indicator 클릭하면 해당 슬라이드 이동
		$indicator.on("click", "a", function(event){
			event.preventDefault();
			if(!$(this).hasClass('active')){
				goToSlide($(this).index());
			}
		});

		//마우스오버 하면 타이머 정지, 아니면 시작
		$container.on({
			mouseenter : stopTimer,
			mouseleave : startTimer
		});



		//슬라이드 쇼 시작
		goToSlide(currentIndex); // 첫 번째 슬라이드 표시
		startTimer(); // 타이머 시작

	});
});