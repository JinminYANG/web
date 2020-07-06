$(document).ready(function(){
	// alert('hi');
	var duration = 300;

	var $aside = $('.page-main > aside');
	var $asideButton = $aside.find("button");
	$asideButton.on('click', function(){
		$aside.toggleClass('open');
		if($aside.hasClass('open')){
			$aside.stop().animate({
				left: '-70px'
			}, duration);
			$asideButton.find('img').attr("src", "images/prev.png");
		}
		else{
			$aside.stop().animate({
				left: '-350px'
			}, duration);
			$asideButton.find('img').attr("src", "images/next.png");
		}

	});
});