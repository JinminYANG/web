$(function(){
	$(".main-visual-slide").bxSlider({
		auto:true,
		pause:2000,
		autoHover:true,
		autoControls:true,
		autoControlsCombine:true
	});

	$('.grid').isotope({
		itemSelector:'.grid-item',
		layoutMode:'fitRows'
	});


});