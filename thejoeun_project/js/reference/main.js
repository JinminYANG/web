$(document).ready(function(){
	// alert('hi');

	var $w_width = $(window).width();

	$("#mainVisual>div").on("mouseover",function(){
		var a = $(this).index();
		// console.log(a);
		$(this).children('div').css({
			'display':'block',
			'z-index':'6'
		});
		$(this).children('.bg').css({
			'width': $w_width,
			'left': '0%',
			'z-index' : '5'
		});


		// $(this).children('.bg1').css({
		// 	'left': '0%'
		// });
		// $(this).children('.bg2').css({
		// 	'left': '0%'
		// });
		// $(this).children('.bg3').css({
		// 	'left': '0%'
		// });
		// $(this).children('.bg4').css({
		// 	'left': '0%'
		// });
		// $(this).children('.bg5').css({
		// 	'left': '0%'
		// });




		// $(this).children('div').css({'display':'block'});
		// $(this).children('div').css({
		// 	'width': $w_width,
		// 	'left': '0%'
		// });
	});





	$("#main_slide>div").on("mouseout",function(){
		$(this).children('div').css({'display':'none'});
	// 	$(this).siblings().css({'display':'none'});
	// 	$(this).css({'width': '100%'});
	$(this).children('.bg').css({
			'z-index' : '1'
		});
		$(this).children('.bg1').css({
			'width': '20%',
			'left': '0%'
		});
		$(this).children('.bg2').css({
			'width': '20%',
			'left': '20%'
		});
		$(this).children('.bg3').css({
			'width': '20%',
			'left': '40%'
		});
		$(this).children('.bg4').css({
			'width': '20%',
			'left': '60%'
		});
		$(this).children('.bg5').css({
			'width': '20%',
			'left': '80%'
		});

	});


});