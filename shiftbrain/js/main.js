$(document).ready(function(){
	// alert('hi');

	// sticky header


	$(".page-header").each(function(){

		var $window = $(window),
		$header = $(this),
		headerOffsetTop = $header.offset().top;
		// 240
		// console.log(headerOffsetTop);

		// 윈도우 창의 스크롤 이벤트 모니터링
		$window.on('scroll', function(){
			if($window.scrollTop() > headerOffsetTop){
				$header.addClass("sticky");
			} else{
				$header.removeClass("sticky");
			}
		});


		
	});
});