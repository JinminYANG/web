$(document).ready(function(){
	// alert('hi');

	$('.inner p:nth-child(1)').on("mouseover", function(){
		$(this).stop().children('span').css({'opacity':'0.5'});
		$(this).stop().children('strong').css({'opacity':'0.5'});
	})
	.on("mouseout", function(){
		$(this).stop().children('span').css({'opacity':'0'});
		$(this).stop().children('strong').css({'opacity':'0'});
	});



	$('.inner p:nth-child(2)').on("mouseover", function(){
		$(this).stop().children('span').css({'opacity':'0.5'});
		$(this).stop().children('strong').animate({width: '100%'}).css({'opacity':'0.5'});

	})
	.on("mouseout", function(){
		$(this).stop().children('strong').animate({width: '0%'}).css({'opacity':'0'});
		$(this).stop().children('span').css({'opacity':'0'});
	});


	$('.inner p:nth-child(3)').on("mouseover", function(){
		$(this).stop().children('span').css({'opacity':'0.5'});
		$(this).stop().children('strong').animate({bottom: '84px'}).css({'opacity':'0.5'});
	})
	.on("mouseout", function(){
		$(this).stop().children('span').css({'opacity':'0'});
		$(this).stop().children('strong').animate({bottom: '0'}).css({'opacity':'0'});
	});

});