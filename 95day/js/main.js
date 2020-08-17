$(function(){
	 // alert('hi');

	 activateScene2();

	 // scene2를 표시
	 function activateScene2(){
	 	var $content = $('.scene-2-content'),
	 	$charts = $content.find('.chart');

	 	//scene-2-content 슬라이드
	 	$content.stop(true).animate({
	 		right:0
	 	}, 1200, 'swing');

	 	// 원형 차트 처리
	 	$charts.each(function(){
	 		var $chart = $(this),
	 		//마스크를 지정하고 각도 0으로 지정
	 		$circleLeft = $chart.find('.left .circle-mask-inner').css({ transform: 'rotate(0)'}),
	 		$circleRight = $chart.find('.right .circle-mask-inner').css({ transform: 'rotate(0)'}),

	 		//백분율 값을 취득
	 		$percentNumber = $chart.find('.percent-number'),
	 		percentData = $percentNumber.text();

	 		// 백분율 표시를 일단 0으로 초기화
	 		$percentNumber.text(0);

	 		// 각도 (회전) 애니메이션
	 		$({percent : 0}).delay(1000).animate({percent:percentData},{
	 			duration: 1500,
	 			progress: function(){
	 				var now = this.percent;
	 				console.log(now);
	 				// check: 각도: 해당 퍼센트 * 360 / 100%
	 				var deg = now*360/100;
	 				var degRight = Math.min(Math.max(deg),180);
	 				var degLeft = Math.min(Math.max(deg-180,0),180);

	 				$circleRight.css({transform:'rotate(' + degRight + 'deg)'});
	 				$circleLeft.css({transform:'rotate(' + degLeft + 'deg)'});
	 				$percentNumber.text(Math.floor(now));
	 			}	
	 		});
	 	});	

	 }
});